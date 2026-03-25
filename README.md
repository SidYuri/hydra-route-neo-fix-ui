# Hydra Route Neo — UI Fix

Пользовательский скрипт Tampermonkey для веб-интерфейса [Hydra Route Neo](https://github.com/Ground-Zerro/HydraRoute), добавляющий адаптивный полноширинный грид и красивые скроллбары.

> **Обновление:** начиная с актуальных версий Hydra Route Neo большинство правок уже встроено в интерфейс.
> Можешь посмотреть мою реализацию **[тёмной темы в стиле Keenetic](https://github.com/SidYuri/hydra-route-neo-dark-theme)**.

---

## Что исправляет

### Адаптивный полноширинный грид
По умолчанию список групп доменов ограничен шириной 900px и выводится в одну колонку. Скрипт снимает это ограничение и переключает список на CSS Grid:
- Группы автоматически выстраиваются в несколько колонок, заполняя всю доступную ширину
- На узких экранах (мобильные) автоматически сворачивается в одну колонку
- Минимальная ширина колонки — 380px, количество колонок подбирается под размер окна

### Кастомные скроллбары
Заменяет громоздкие системные полосы прокрутки на тонкие (6px) с поддержкой обеих тем:
- **Светлая тема** — светло-серый трек, серый ползунок
- **Тёмная тема** — тёмный трек, тёмно-серый ползунок
- При наведении ползунок подсвечивается синим в цвет акцента сайта

---

## Установка

### 1. Установить Tampermonkey

Расширение доступно для всех популярных браузеров:

| Браузер | Ссылка |
|---------|--------|
| Chrome / Edge / Opera | [Chrome Web Store](https://chromewebstore.google.com/detail/tampermonkey/dhdgffkkebhmkfjojejmpbldmpobfkfo) |
| Firefox | [Firefox Add-ons](https://addons.mozilla.org/ru/firefox/addon/tampermonkey/) |
| Safari | [App Store](https://apps.apple.com/app/tampermonkey/id1482490089) |

### 2. Установить скрипт

Нажми на кнопку ниже — Tampermonkey автоматически откроет диалог установки:

[![Установить скрипт](https://img.shields.io/badge/Установить-скрипт-blue?style=for-the-badge)](https://raw.githubusercontent.com/SidYuri/hydra-route-neo-fix-ui/main/hydra-route-fix-ui.user.js)

Или вручную:
1. Открой Tampermonkey → **Создать новый скрипт**
2. Удали весь текст в редакторе
3. Вставь содержимое файла [`hydra-route-fix-ui.user.js`](hydra-route-fix-ui.user.js)
4. Нажми **Сохранить** (`Ctrl+S`)

### 3. Открыть интерфейс Hydra Route Neo

Перейди на веб-интерфейс — обычно это `http://192.168.X.X:2000/`. Изменения применятся автоматически.

---

## Совместимость

- Hydra Route Neo (порт `2000`)
- Браузеры: Chrome, Firefox, Edge, Opera, Safari (через Tampermonkey)

---

## Проблемы и предложения

Если что-то не работает или есть идеи по улучшению — [создай issue](https://github.com/SidYuri/hydra-route-neo-fix-ui/issues).
