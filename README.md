# Pull Players to Level

A minimal Foundry VTT module that adds a context menu option to scene levels in the navigation bar, allowing Game Masters to pull all connected players to a specific level.

![GitHub Release][release-shield] ![GitHub Downloads (all assets, all releases)][download-shield]

![GitHub contributors][contributor-shield] ![GitHub last commit][last-commit-shield] [![Forks][forks-shield]][forks-url] [![Stargazers][stars-shield]][stars-url]

[![Forge Installs][forge-installs]][forge-link] ![Foundry Version](https://img.shields.io/endpoint?label=Foundry%20VTT%20versions:&url=https://foundryshields.com/version?url=https://raw.githubusercontent.com/misthero/pull-players-to-level/main/module.json)

## If you like this module you can buy me a coffee here

[![ko-fi](https://img.shields.io/badge/ko--fi-Support%20Me-red?style=for-the-badge&logo=ko-fi)](https://ko-fi.com/misthero)

## Features

- **Right-click on scene levels** in the scene navigation top bar
- **GM-only option**: "Pull Players to Level" appears only for Gamemaster users
- **Instant activation**: Pulls all connected players to the scene and sets their view to the specified level
- **Localization support**: Currently includes English; easily extended to other languages
- **Silent execution**: No toast notifications; operates cleanly in the background

## Installation

1. Enable the `lib-wrapper` module (required dependency)
2. Enable the `pull-players-to-level` module
3. Load Foundry VTT or reload if already running

## Usage

1. In the scene navigation panel at the top of the screen, locate the **Levels** section (shows levels for the currently viewed scene)
2. Right-click on any level you wish to activate
3. Select **"Pull Players to Level"** from the context menu
4. All connected players will instantly be pulled to that scene and level

## API Details

- **Hook**: Wraps `foundry.applications.ui.SceneNavigation.prototype._getContextMenuOptions`
- **Action**: Calls `Scene.activate({ pullUsers: true, viewOptions: { level: levelId } })`
- **Scope**: Scene navigation top bar only (not Scene Directory sidebar)
- **Permissions**: Gamemaster users only

## Requirements

- **Foundry VTT**: Version 14.0+
- **lib-wrapper**: For safe API hooking

## License

This module is provided as-is. Modify and redistribute as needed.


[download-shield]: https://img.shields.io/github/downloads/misthero/pull-players-to-level/total?label=Latest%20Downloads
[release-shield]: https://img.shields.io/github/v/release/misthero/pull-players-to-level
[contributor-shield]: https://img.shields.io/github/contributors/misthero/pull-players-to-level?label=Contributors
[last-commit-shield]: https://img.shields.io/github/last-commit/misthero/pull-players-to-level?label=Last%20Commit
[forks-shield]: https://img.shields.io/github/forks/misthero/pull-players-to-level.svg?style=flat-round
[forks-url]: https://github.com/misthero/pull-players-to-level/network/members
[stars-shield]: https://img.shields.io/github/stars/misthero/pull-players-to-level.svg?style=flat-round
[stars-url]: https://github.com/misthero/pull-players-to-level/stargazers
[forge-installs]: https://img.shields.io/badge/dynamic/json?label=Forge%20Installs&query=package.installs&suffix=%25&url=https://forge-vtt.com/api/bazaar/package/pull-players-to-level&colorB=blueviolet
[forge-link]: https://forge-vtt.com/bazaar#package=pull-players-to-level
