# Box Model

## Introduction

Everything in CSS is a box, these boxes have content, padding, border and margin

## Content

This is the innermost area where text, images, or other media are displayed. The size of the content area is defined by the width and height properties.

## Padding

Padding is the space between the content and the border. It adds internal spacing around the content, making it visually more appealing. The padding property controls this area, and it affects the overall dimensions of the box.

## Border

The border surrounds the padding (if any) and content. It serves as a visible boundary for the element, defined by properties such as border-width, border-style, and border-color.

## Margin

- Outside of border, used to break apart 2 elements from each other
- If there is margin between 2 elements, the bigger one will be used.
  - in box model, margin collapses if 2 element next to each other both specifies margin

## Importance of Box Sizing

The box-sizing property allows you to control how width and height are calculated:

- `content-box`: Default value; width and height apply only to the content area.
- `border-box`: Width and height include padding and border, simplifying layout calculations.

## Summary

The total with and height is calculated by `border` + `padding` + `content`. Margin does not account into the total height and width.

## Reference

- [Learn CSS Box Model in 8 Minutes](https://www.youtube.com/watch?v=rIO5326FgPE)
