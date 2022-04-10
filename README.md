---
layout: post
title: Ведение блога как хакер
---

# summernote
Супер простой редактор WYSIWYG

[![Править на StackBlitz](https://raw.githubusercontent.com/warsan/gsap-react-route-anim-expro/master/but.svg)](https://stackblitz.com/edit/https://github.com/warsan/summernote)

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

Затем поместите тег `div` куда-нибудь в тег `body`. Этот элемент будет заменен редактором summernote.

```html
<div id="summernote">Здравствуй, Саммернот</div>
```
 
