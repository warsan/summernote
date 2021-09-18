## Вклад
* Запросы на исправление приветствуются
* Пожалуйста, не включайте файлы `dist/*` в свои коммиты.

## Соглашение о кодировании
* eslint: https://eslint.org
* eslint rule: https://github.com/summernote/summernote/blob/master/.eslintrc

## Построить summernote

Summernote использует [`yarn`](https://yarnpkg.com/) в качестве менеджера пакетов.

```bash
$ yarn install

# собрать полную версию summernote: dist/summernote.js
$ yarn build

```
На данном этапе у вас должен быть каталог `dist/`, заполненный всем необходимым для работы с summernote.

## Запустите локальный сервер для разработки Summernote.
запустите локальный сервер с webpack-dev-server и наблюдайте.
```bash
$ yarn dev
# Откройте браузер на http://localhost:3000.
# Если вы измените исходный код, автоматически перезагрузите страницу.
```

## Тест summernote
запускать тесты с помощью Karma и PhantomJS
```bash
$ yarn test
```
Если вы хотите запустить тесты в другом браузере,
изменить значения для свойств `browsers` в файле `karma.conf.js`.

```javascript
karma: {
  all: {
    browsers: ['PhantomJS'],
    reporters: ['progress']
  }
}

```

Или передайте аргумент `--browsers` через команду `yarn test`.

```bash
$ yarn test -- --browsers Safari,Firefox
```

Вы можете использовать `Chrome`, `ChromeCanary`, `Firefox`, `Opera`, `Safari`, `PhantomJS` и `IE` рядом с `PhantomJS`.
Как только вы запустите `yarn test`, он просмотрит все файлы JavaScript. Поэтому karma запускает тесты каждый раз, когда вы изменяете код.

## Тест часть теста

Если вы хотите запустить какую-то часть своих тестовых кодов, используйте режим просмотра.

```bash
$ yarn test:watch
```

`karma` запустит тест и будет ждать других запросов на тестирование. Затем запустите `test:grep` в другом терминале. Ниже показано, как запустить только тесты, связанные с `LinkDialog`.

```bash
$ yarn test:grep LinkDialog
```

## Подготовительные крючки
В рамках этого репозитория мы используем [Husky](https://github.com/typicode/husky) для git-хуков. Мы используем крючок prepush для предотвращения неудачных коммитов.

## Структура документа

```text
 - body container: <div class="note-editable">, <td>, <blockquote>, <ul>
 - block node: <div>, <p>, <li>, <h1>, <table>
 - void block node: <hr>
 - inline node: <span>, <b>, <font>, <a>, ...
 - void inline node: <img>
 - text node: #text
```

1. A body container has block node, but `<ul>` has only `<li>` nodes.
1. A body container also has inline nodes sometimes. This inline nodes will be wrapped with `<p>` when enter key pressed.
1. A block node only has inline nodes.
1. A inline nodes has another inline nodes
1. `#text` and void inline node doesn't have children.
