# tags

## Usage

Open `index.html`, replace url in `fetch('xxx')` to your own url, or delete the full fetch statement and fill data between `<div slot="text"></div>` directly.

The format data followed:

```
<tag name>/<tag size, [1, 10]>/<tag type>/<url>
```

the `<tag name>` is required and others can be blank like:

```
paint
paint//hobbies
paint/7
paint///https://mengru.me
```

And you can custom `title`, `scale`, render `width` and render `height` from `<tags-default-style>`.

Finally run `npm run build`, you can get `index.html` and `assets/index.*.js` in `dist/`.

Have fun!
