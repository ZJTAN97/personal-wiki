---
title: "Dangers of Custom React Hooks"
pubDate: 2025-08-11
author: "Zhi Jie"
image:
  url: "https://docs.astro.build/assets/rose.webp"
  alt: "The Astro logo on a dark background with a pink glow."
tags: ["react"]
---

## Introduction

Custom hooks are great of reusability and all, but if not careful, it may accidentally abstracts away some of the state in your component causing unnecesary re-renders.

For example, we can have a custom hook for opening a modal as shown below

```tsx
// Hook
const useModalState = () => {
  const [isOpen, setIsopen] = useState(false);

  // Internal state in the hook
  // If state changes here, the `App` component will also re-render!
  const [width, setWidth] = useState(0);

  useEffect(() => {
    const listener = () => {
      setWidth(window.innerWidth);
    };

    window.addEventListener("resize", listener);

    return () => window.removeEventListener("resize", listener);
  }, []);

  return {
    isOpen,
    open: () => setIsOpen(true),
    close: () => setIsOpen(false),
  };
};

const App = () => {
  const { isOpen, toggle } = useModalState(); // we cant directly see the state anymore

  return (
    <div>
      <Button onClick={toggle}>Open modal</Button>
      {isOpen ? <HeavyModal onClose={toggle} /> : null}
      <HeavyComponent1 />
      <HeavyComponent2 />
    </div>
  );
};
```

Looking into the custom hook `useModalState`, we have an internal state `width`. When `width` changes, it will cause a re-render in the `App` component. And since `App` re-renders, the children of `App` which are `HeavyComponent1` and `HeavyComponent2` will also re-render!

An attempt to move state from a component into its on hook will just make it invisible.
