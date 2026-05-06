/**
 * Pull Players to Level
 * 
 * Adds a context menu option to scene levels in the navigation bar
 * to pull all connected players to that specific level.
 */

Hooks.once('init', () => {
  if (!window.libWrapper) {
    console.warn('[pull-players-to-level] libWrapper not available! Module will not work.');
    return;
  }

  try {
    libWrapper.register(
      'pull-players-to-level',
      'foundry.applications.ui.SceneNavigation.prototype._getContextMenuOptions',
      function (wrapped, ...args) {
        // Call original method and ensure we have an array
        let menuOptions = wrapped(...args);
        if (!Array.isArray(menuOptions)) {
          console.warn('[pull-players-to-level] _getContextMenuOptions did not return an array:', menuOptions);
          menuOptions = [];
        }

        menuOptions.push({
          name: game.i18n.localize('PULL_PLAYERS_TO_LEVEL.label'),
          icon: '<i class="fas fa-arrow-circle-down"></i>',
          condition: (li) => {
            const isLevel = li?.dataset?.levelId !== undefined;
            const isGM = game?.user?.isGM;

            return isLevel && isGM;
          },
          callback: async (element) => {
            const sceneId = element.dataset.sceneId;
            const levelId = element.dataset.levelId;

            const scene = game.scenes.get(sceneId);
            if (!scene) {
              console.warn(`[pull-players-to-level] Scene not found: ${sceneId}`);
              return;
            }

            try {
              /*await scene.activate({
                pullUsers: true,
                viewOptions: { level: levelId }
              });*/
              await scene.pullUsers(game.users, { level: levelId });
            } catch (err) {
              console.error('[pull-players-to-level] ✗ Activate failed:', err);
            }
          }
        });

        return menuOptions;
      },
      'WRAPPER'
    );
  } catch (err) {
    console.error('[pull-players-to-level] ✗ Initialization failed:', err);
  }
});



