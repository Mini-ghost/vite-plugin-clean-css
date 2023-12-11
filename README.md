# vite-plugin-clean-css

[![NPM version](https://img.shields.io/npm/v/vite-plugin-clean-css?color=34A88C&label=)](https://www.npmjs.com/package/vite-plugin-clean-css)

Optimize CSS for production using [clean-css](https://github.com/clean-css/clean-css)

## Usage

This plugin minimizes CSS during production. It will minify CSS rules such as:

```css
/* 832 bytes */
.translate-x-0 {
  --un-translate-x: 0;
  transform: translateX(var(--un-translate-x)) translateY(var(--un-translate-y))
    translateZ(var(--un-translate-z)) rotate(var(--un-rotate))
    rotateX(var(--un-rotate-x)) rotateY(var(--un-rotate-y))
    rotateZ(var(--un-rotate-z)) skewX(var(--un-skew-x)) skewY(var(--un-skew-y))
    scaleX(var(--un-scale-x)) scaleY(var(--un-scale-y))
    scaleZ(var(--un-scale-z));
}
.translate-x-1 {
  --un-translate-x: 0.25rem;
  transform: translateX(var(--un-translate-x)) translateY(var(--un-translate-y))
    translateZ(var(--un-translate-z)) rotate(var(--un-rotate))
    rotateX(var(--un-rotate-x)) rotateY(var(--un-rotate-y))
    rotateZ(var(--un-rotate-z)) skewX(var(--un-skew-x)) skewY(var(--un-skew-y))
    scaleX(var(--un-scale-x)) scaleY(var(--un-scale-y))
    scaleZ(var(--un-scale-z));
}
```

Will be minimized to:

```css
/* 
 CleanCss({
  level: {
   2: {
    mergeSemantically: true,
    restructureRules: true,
   },
  },
 }),
*/

/* 493 bytes */
.translate-x-0,
.translate-x-1 {
  transform: translate(var(--un-translate-x)) translateY(var(--un-translate-y))
    translateZ(var(--un-translate-z)) rotate(var(--un-rotate))
    rotateX(var(--un-rotate-x)) rotateY(var(--un-rotate-y))
    rotate(var(--un-rotate-z)) skew(var(--un-skew-x)) skewY(var(--un-skew-y))
    scaleX(var(--un-scale-x)) scaleY(var(--un-scale-y))
    scaleZ(var(--un-scale-z));
}
.translate-x-0 {
  --un-translate-x: 0;
}
.translate-x-1 {
  --un-translate-x: 0.25rem;
}
```

> [!NOTE]
> Using `mergeSemantically` may potentially affect CSS specificity.
> Please consider its usage carefully.

## Installation

```bash
npm install -D vite-plugin-clean-css
```

## Setup
  
```ts
// vite.config.ts

import { defineConfig } from 'vite'
import CleanCss from 'vite-plugin-clean-css'

export default defineConfig({
  plugins: [
    CleanCss({
      // Please note that level 1 optimization options are generally safe while level 2 optimizations should be safe for most users.
      level: 2,
    }),
  ],
})
```

## License

[MIT License](https://github.com/Mini-ghost/vite-plugin-clean-css/blob/main/LICENSE) © 2023-PRESENT [Alex Liu](https://github.com/Mini-ghost)
