# ReactImpExScript ( react-imp-ex-script )

## note

### Redux

https://pjchender.dev/webdev/note-without-redux/

https://pjchender.dev/react/redux-toolkit/

Redux Toolkit => configureStore 可以接收 reducer 後建立 store

### pjchender

https://pjchender.dev/react/note-create-react-app/

```js
npx create-react-app common-template
npx create-react-app redux-template --template redux
npx create-react-app typescript-template --template typescript
npm install --save typescript @types/node @types/react @types/react-dom @types/jest
npm install --save react-router-dom
npm install node-sass --save
npm install --save source-map-explorer // (Analyzing Bundle Size)
npm install eslint-plugin-react --save-dev
npm install eslint-plugin-react-hooks --save-dev
npm install eslint-plugin-jsx-a11y --save-dev
npx install-peerdeps --dev eslint-config-airbnb // (eslint-config-airbnb)

"https start": "HTTPS=true react-scripts start"
webpack-dev-server --https

// 絕對路徑的方式來載入模組 ( 設定後所有路徑都會以 /src 開始 )
// (X) import Button from './components/Button';
// (O) import Button from 'components/Button';
// ./jsconfig.json <=> TypeScript ./tsconfig.json
{
  "compilerOptions": {
    "baseUrl": "src"
  },
  "include": ["src"]
}

// .env 設定 create-react-app 行為
// https://create-react-app.dev/docs/advanced-configuration/
BROWSER=none
PORT=1450
EXTEND_ESLINT=true

// package.json (Analyzing Bundle Size)
"scripts": {
     "analyze": "source-map-explorer 'build/static/js/*.js'",
     "start": "react-scripts start",
     ...
}
// ...
"name": "react-hooks-sandbox",
// ...
"eslintConfig": {
    "extends": "react-app",
    "extends": [
      "eslint:recommended",
      "plugin:react/recommended"
    ],
    "plugins": [
      "react-hooks"
    ],
    "extends": ["react-app", "plugin:jsx-a11y/recommended"],
    "plugins": ["jsx-a11y"]
}


// ./vscode/setting.json
{
  "eslint.validate": [
    "javascript",
    "javascriptreact",
    { "language": "typescript", "autoFix": true },
    { "language": "typescriptreact", "autoFix": true }
  ]
}
```

eslint-config-airbnb

```js
// .eslintrc
{
  "extends": ["airbnb"],
  "rules": {
    "react/jsx-filename-extension": [
      1,
      {
        "extensions": [".js", ".jsx"]
      }
    ],
    "import/no-unresolved": [
      2,
      {
        "ignore": ["^@?"]
      }
    ],
    "no-console": [
      1,
      {
        "allow": ["log", "warn", "error"]
      }
    ]
  },
  "env": {
    "browser": true,
    "node": true
  }
}
```

## hannah-lin

https://medium.com/hannah-lin/react-hook-%E7%AD%86%E8%A8%98-usereducer-%E7%9C%9F%E7%9A%84%E8%83%BD%E5%AE%8C%E5%85%A8%E5%8F%96%E4%BB%A3-redux-%E5%97%8E-fabcc1e9b400

https://medium.com/hannah-lin/jest-enzyme-%E9%81%8B%E7%94%A8%E5%9C%A8%E7%9C%9F%E5%AF%A6%E4%B8%96%E7%95%8C%E4%B8%AD%E7%9A%84-react-redux-project-%E5%B0%88%E6%A1%88%E8%AC%9B%E8%A7%A3%E7%AF%87-ca370c22f745

```markdown
src
  ├ common
  ├ modules
  | ├ dashboard
  | | ├ actions/thunks
  | | | | fetch-data.js
  | | | └ index.js
  | | |
  | | ├ components
  | | | ├ containers
  | | | | ├ lifycycles.js    --> componentDidmount 那些
  | | | | └ mappings.js      --> mapStateToProps/mapDispatchToProps
  | | | ├ presentations
  | | | | └ dashboard.js
  | | | └ index.js
  | | |
  | | ├ mock-data               --> 放假資料，就不用等後端
  | | ├ reducers
  | | | └ authReducer.js
  | | ├ utils/data-transformers --> 轉 API 回傳 shape成想要格式
  | | ├ constants.js            --> 只要重覆用兩次以上常數就要放到這
  | | └ index.js
  | └
  ├ App.js
  ├ ...
  ├ ...
  └
```
