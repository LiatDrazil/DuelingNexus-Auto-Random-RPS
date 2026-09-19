# Dueling Nexus - Auto Random RPS

A Tampermonkey userscript designed to automatically click the random Rock-Paper-Scissors (RPS) button in Dueling Nexus duels, streamlining the match start process.

## Features

* **Automated Clicks:** Instantly clicks the `#game-rps-random` button the moment it appears and becomes visible on the screen.
* **Smart Detection:** Uses a safety lock to prevent repetitive or spam clicking while the button is visible.
* **Resource Efficient:** Automatically disconnects and stops running once the game advances to the next phase (detected via `#game-rps-first` or `#game-container`).

## Installation

1. **Install a Userscript Manager:** Make sure you have the [Tampermonkey](https://www.tampermonkey.net/) extension installed in your web browser.
2. **Install the Script:** Click on the link below to install the script directly through Tampermonkey:
   * [Install script.user.js](https://raw.githubusercontent.com/LiatDrazil/DuelingNexus-Auto-Random-RPS/main/script.user.js)
3. **Confirm Installation:** Tampermonkey will prompt you to confirm the installation. Click **Install**.
