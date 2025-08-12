# Hydration

## Introduction

Hydration refers to the process where React takes over server-rendered HTML and attaches event listeners to it, enabling interactivity. This is crucial for applications that utilize server-side rendering (SSR) because it allows the static HTML served by the server to become interactive once the JavaScript is loaded on the client side.

<video controls width="70%">
 <source src="https://res.cloudinary.com/ddxwdqwkr/video/upload/f_auto/v1609056521/patterns.dev/prog-rehy-1.mp4" />
</video>

A server rendered application uses the server to generate the HTML for the current navigation. Once the server has completed generating the HTML contents, which also contains the necessary CSS and JSON data to display the static UI correctly, it sends the data down to the client. Since the server generated the markup for us, the client can quickly parse this and display it on the screen, which produces a faster First Contentful Paint

Although server rendering provides a faster First Contentful Paint, it doesn’t always provide a faster Time To Interactive. The necessary JavaScript in order to be able to interact with our website hasn’t been loaded yet. Buttons may look interactive, but they aren’t interactive (yet). The handlers will only get attached once the JavaScript bundle has been loaded and processed.

## Progressive Hydration

Progressive hydration allows us to only hydrate components based on a certain condition, e.g. when component is visible in the viewport.

## Concurrent Mode and Progressive Hydration

React Hydration is part of the Concurrent API, specifically in how it can be implmented and optimized through features like progressive hydration.

With the introduction of `Concurrent Mode`, React allows for more efficient hydration processess. Hydration tasks can be prioritized based on user interactions or important events.

For example, if user interacts with a component while hydration is still in progress, React can pause the hydration process to respond to that interaction, improving responsiveness

## Useful Resources

- [Patterns Dev](https://www.patterns.dev/react/progressive-hydration/)
