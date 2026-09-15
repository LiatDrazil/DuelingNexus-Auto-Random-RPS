// ==UserScript==
// @name         Dueling Nexus - Auto Random RPS
// @namespace    https://github.com/LiatDrazil
// @version      1.3
// @description  Automatically clicks the random RPS button.
// @author       LiatDrazil
// @match        https://duelingnexus.com/duel/*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    let alreadyClicked = false;

    const observer = new MutationObserver((mutations, obs) => {
        // Check if the game has advanced to the next phase
        const rpsFirst = document.querySelector("#game-rps-first");
        const gameContainer = document.querySelector("#game-container");
        const isFinished = (rpsFirst && rpsFirst.offsetParent !== null) ||
                           (gameContainer && gameContainer.offsetParent !== null);

        if (isFinished) {
            obs.disconnect();
            return;
        }

        // Check and click the random RPS button if visible
        const rpsButton = document.querySelector("#game-rps-random");
        const isButtonVisible = rpsButton && rpsButton.offsetParent !== null;

        if (isButtonVisible) {
            if (!alreadyClicked) {
                rpsButton.click();
                alreadyClicked = true;
            }
        } else {
            alreadyClicked = false;
        }
    });

    observer.observe(document.body, {
        childList: true,
        subtree: true,
        attributes: true
    });
})();// ==UserScript==
// @name         Dueling Nexus - Auto Random RPS
// @namespace    https://github.com/LiatDrazil
// @version      1.3
// @description  Automatically clicks the random RPS button.
// @author       LiatDrazil
// @match        https://duelingnexus.com/duel/*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    let alreadyClicked = false;

    const observer = new MutationObserver((mutations, obs) => {
        // Check if the game has advanced to the next phase
        const rpsFirst = document.querySelector("#game-rps-first");
        const gameContainer = document.querySelector("#game-container");
        const isFinished = (rpsFirst && rpsFirst.offsetParent !== null) ||
                           (gameContainer && gameContainer.offsetParent !== null);

        if (isFinished) {
            obs.disconnect();
            return;
        }

        // Check and click the random RPS button if visible
        const rpsButton = document.querySelector("#game-rps-random");
        const isButtonVisible = rpsButton && rpsButton.offsetParent !== null;

        if (isButtonVisible) {
            if (!alreadyClicked) {
                rpsButton.click();
                alreadyClicked = true;
            }
        } else {
            alreadyClicked = false;
        }
    });

    observer.observe(document.body, {
        childList: true,
        subtree: true,
        attributes: true
    });
})();
