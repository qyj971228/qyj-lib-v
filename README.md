# qyj-lib-vue pack by Vite

## Css
### Auto import (Vite-only)

`npm i -D vite-plugin-style-import`

#### vite.config.js 

```
  import { createStyleImportPlugin } from 'vite-plugin-style-import'
  ...
    plugins: [
      ...
      createStyleImportPlugin({
        libs: [
          {
            libraryName: 'qyj-lib-vue',
            esModule: true,
            resolveStyle: (name) => {
              return `qyj-lib-vue/dist/${name}/style/${name}.css`
            },
          },
        ],
      })
    ...
  ]
  
```
### Global import(universal)

`import '<rootDir>/dist/style.css`

#### TODO: Vitest; husky & commitlint; storybook