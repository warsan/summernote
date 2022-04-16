---
layout: post
title: Шаблон
---
<hr>

```html
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no" />
<!-- включить библиотеки (jQuery, bootstrap) -->
<script
  type="text/javascript"
  src="//cdnjs.cloudflare.com/ajax/libs/jquery/3.4.1/jquery.min.js"
></script>
<link
  rel="stylesheet"
  href="//cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/3.4.1/css/bootstrap.min.css"
/>
<script
  type="text/javascript"
  src="//cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/3.4.1/js/bootstrap.min.js"
></script>

<!-- включить summernote css/js-->
<link href="../summernote.css" rel="stylesheet" />
<script src="../summernote.js"></script>
</head>
<body>
<div id="summernote">Здравствуй, Саммернот</div>
</body>
</html>
```

<div id="summernote"><h3>Здравствуй, Саммернот</h3></div>

[![Правка на StackBlitz ⚡️](but.svg)](https://stackblitz.com/github/warsan/summernote)

### Установка и зависимости

Summernote построен на [jQuery](http://jquery.com/).

#### 1. Включить JS/CSS

Включите следующий код в тег `<head>` вашего HTML:

```html
<!-- включить библиотеки (jQuery, bootstrap) -->
<script
  type="text/javascript"
  src="//cdnjs.cloudflare.com/ajax/libs/jquery/3.4.1/jquery.min.js"
></script>
<link
  rel="stylesheet"
  href="//cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/3.4.1/css/bootstrap.min.css"
/>
<script
  type="text/javascript"
  src="//cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/3.4.1/js/bootstrap.min.js"
></script>

<!-- включить summernote css/js-->
<link href="summernote.css" rel="stylesheet" />
<script src="summernote.js"></script>
```

#### 2. Нацелить элемент

Затем поместите тег `div` куда-нибудь в тег `body`. Этот элемент будет заменён редактором summernote.

```html
<div id="summernote">Здравствуйте, Саммернот</div>
```

<hr> 

## Добро пожаловать на GitHub Pages

[![Править на StackBlitz](https://raw.githubusercontent.com/warsan/summernote/gh-pages/but.svg)](https://github.com/warsan/summernote/tree/gh-pages)

Вы можете использовать [редактор на GitHub](https://github.com/warsan/summernote/edit/gh-pages/index.md) для ведения и предварительного просмотра содержимого вашего сайта в файлах Markdown.

Всякий раз, когда вы фиксируете этот репозиторий, GitHub Pages будет запускать [Jekyll](https://jekyllrb.com/), чтобы перестроить страницы вашего сайта на основе содержимого ваших файлов Markdown.

### Markdown

Markdown - это легкий и простой в использовании синтаксис для оформления текста. Она включает в себя соглашения для

```markdown
Синтаксис выделенного блока кода

# Header 1
## Header 2
### Header 3

- Пунктуация
- Список

1. Нумерация

2. Список

**Жирный** и _Италический_ и `Кодовый` текст

[Link](url) и ![Image](src)
```

Более подробную информацию смотрите в [GitHub Flavored Markdown](https://guides.github.com/features/mastering-markdown/).

### Темы Jekyll

Ваш сайт Pages будет использовать макет и стили темы Jekyll, выбранной вами в [настройках хранилища](https://github.com/warsan/summernote/settings/pages). Имя этой темы сохраняется в конфигурационном файле Jekyll `_config.yml`.

### Поддержка или контакт

Возникли проблемы с Pages? Посмотрите нашу [документацию](https://docs.github.com/categories/github-pages-basics/) или [свяжитесь со службой поддержки](https://support.github.com/contact), и мы поможем вам разобраться.
