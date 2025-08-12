---
sidebar_position: 1
---

# HTML Essentials

## Basic Structure

```html
<!doctype html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <title>Page Title</title>
  </head>
  <body>
    <!-- Content goes here -->
  </body>
</html>
```

## Text Elements

```html
Headings:
<h1>
  to
  <h6>
    Paragraph: `p> Line break: <br />
    Horizontal rule: `hr> Bold:
    <strong>
      or
      <b>
        Italic:
        <em>
          or <i> Underline: <u></u></i></em></b
    ></strong>
  </h6>
</h1>
```

## Unordered list

```html
<ul>
  <li>Item 1</li>
  <li>Item 2</li>
</ul>
```

## Ordered list

```html
<ol>
  <li>First item</li>
  <li>Second item</li>
</ol>
```

## Links

```html
<a href="https://example.com">Link text</a>
```

## Images

```html
<img src="image.jpg" alt="Description" width="300" height="200" />
```

## Tables

```html
<table>
  <tr>
    <th>Header 1</th>
    <th>Header 2</th>
  </tr>
  <tr>
    <td>Row 1, Cell 1</td>
    <td>Row 1, Cell 2</td>
  </tr>
</table>
```

## Forms

```html
<form action="/submit" method="post">
  <label for="name">Name:</label>
  <input type="text" id="name" name="name" required />

  <label for="email">Email:</label>
  <input type="email" id="email" name="email" required />

  <input type="submit" value="Submit" />
</form>
```

## Semantic Elements

```html
<header>
  : Page header
  <nav>
    : Navigation links
    <main>
      : Main content
      <article>
        : Independent content
        <section>
          : Grouped content
          <aside>
            : Sidebar content
            <footer>
              : Page footer Multimedia xml
              <audio src="audio.mp3" controls></audio>
              <video src="video.mp4" controls></video>
            </footer>
          </aside>
        </section>
      </article>
    </main>
  </nav>
</header>
```
