# Specificity

Specificity is calculated based on the types of selectors used in a CSS rule. The specificity of a selector is represented as a three-part value: (ID, CLASS, TYPE). Each part corresponds to different selector types, and the values are calculated as follows:

- Inline styles: 1000 points
- ID selectors: 100 points
- Class selectors, attributes, and pseudo-classes: 10 points
- Type selectors (element selectors) and pseudo-elements: 1 point

## Specificity from highest to lowest

1. inline styles `(0, 0, 0, 0)`

2. id `(0, 1, 0, 0)`

3. class `(0, 0, 1, 0)`

4. element tag `(0, 0, 0, 1)`

## General Tips

- Try not to use `!important` as it messes with specificity

- Direct siblings `>` will be ignored in specificity

- Can check devtools and see which ones are being overwritten

## References

- [Learn CSS Specificity in 11 minutes](https://www.youtube.com/watch?v=CHyPGSpIhSs)
