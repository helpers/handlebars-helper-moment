Install the helper:

```bash
npm i handlebars-helper-moment --save-dev
```

Now add the helper to Assemble's options:

```js
assemble: {
  options: {
    // Assemble will automatically resolve the path
    helpers: ['handlebars-helper-moment', 'foo/*.js']
  }
}
```
