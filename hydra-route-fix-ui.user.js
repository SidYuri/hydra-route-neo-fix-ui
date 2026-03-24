// ==UserScript==
// @name         Hydra Route Neo — UI Fix
// @namespace    hydra-route-neo
// @version      0.1
// @description  Адаптивный полноширинный грид и кастомные скроллбары для Hydra Route Neo
// @author       SidYuri
// @include      http://192.168.*:2000/*
// @updateURL    https://raw.githubusercontent.com/SidYuri/hydra-route-neo-fix-ui/main/hydra-route-fix-ui.user.js
// @downloadURL  https://raw.githubusercontent.com/SidYuri/hydra-route-neo-fix-ui/main/hydra-route-fix-ui.user.js
// @supportURL   https://github.com/SidYuri/hydra-route-neo-fix-ui/issues
// @homepageURL  https://github.com/SidYuri/hydra-route-neo-fix-ui
// @grant        none
// @run-at       document-end
// ==/UserScript==

(function () {
    'use strict';

    const CSS = `
        /* Снимаем ограничение ширины с основных контейнеров */
        .dashboard-policies-list {
            max-width: none !important;
        }

        .dashboard-create-buttons {
            max-width: none !important;
        }

        /* Переключаем список групп доменов на адаптивный грид */
        .policy-card-content-inner {
            display: grid !important;
            grid-template-columns: repeat(auto-fill, minmax(380px, 1fr)) !important;
            flex-direction: unset !important;
            align-items: start !important;
        }

        /* Только div.domain-entry (карточка группы), не label.domain-entry */
        div.domain-entry {
            width: 100% !important;
            box-sizing: border-box !important;
            min-width: 0 !important;
        }

        /* Textarea внутри группы растягивается по ширине */
        div.domain-entry textarea {
            width: 100% !important;
            box-sizing: border-box !important;
        }

        /* label внутри хедера не должен распирать всю ширину */
        .domain-header label.domain-entry {
            width: auto !important;
            flex: 1 1 auto !important;
            min-width: 0 !important;
        }

        /* Кнопка "+ поле" всегда в конце и по ширине ячейки */
        .add-field-btn {
            align-self: start !important;
        }

        /* Тонкие кастомные скроллбары — светлая тема */
        *::-webkit-scrollbar { width: 6px; height: 6px; }
        *::-webkit-scrollbar-track { background: #ebebeb; border-radius: 3px; }
        *::-webkit-scrollbar-thumb { background: #c0c0c0; border-radius: 3px; }
        *::-webkit-scrollbar-thumb:hover { background: #2396da; }
        *::-webkit-scrollbar-corner { background: #ebebeb; }

        /* Тёмная тема */
        [data-theme="dark"] *::-webkit-scrollbar { width: 6px; height: 6px; }
        [data-theme="dark"] *::-webkit-scrollbar-track { background: #1a1a1a; border-radius: 3px; }
        [data-theme="dark"] *::-webkit-scrollbar-thumb { background: #333; border-radius: 3px; }
        [data-theme="dark"] *::-webkit-scrollbar-thumb:hover { background: #2396da; }
        [data-theme="dark"] *::-webkit-scrollbar-corner { background: #1a1a1a; }
    `;

    const style = document.createElement('style');
    style.textContent = CSS;
    document.head.appendChild(style);

})();
