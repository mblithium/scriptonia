// ==UserScript==
// @name         No WordPress Admin Notices
// @name:pt-BR   Sem Admin Notices no WordPress
// @namespace    mblithium
// @version      0.0.1
// @tag          tools
// @description  Remove Admin Notices from WordPress. Useful for taking screenshots for tutorials.
// @description:pt-BR  Remove os Admin Notices do WordPress. Útil para tirar prints para tutoriais.
// @author       Matheus Bastos
// @match        http*://*/*
// @grant        none
// @run-at       context-menu
// ==/UserScript==

/*
Change @run-at from "context-menu" to "document-idle" to run automatically when the page finishes loading.
Altere @run-at de "context-menu" para "document-idle" para executar automaticamente ao terminar o carregamento da página.
*/

(function() {
    'use strict';
    const wpbody = document.querySelector("#wpbody");
    const wpnotices = wpbody.querySelectorAll(".notice");
    wpnotices.forEach(function (elem) {
        elem.remove();
    });
})();