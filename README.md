# sample-nuxt-auth

## このサンプルアプリケーションについて

* Vue.js / Nuxt.jsのログインサンプルアプリケーション
* Auth0とAuth module、またNuxt.jsのmiddlewareを使って実装している

## サンプルの動かし方

リポジトリをcloneした後にnuxt.config.jsの中の「XXXXX」になっているところを変更する

```
  auth: {
    strategies: {
      auth0: {
        domain: 'XXXXX', // Auth0 App Domain
        client_id: 'XXXXX', // Auth0 App Client ID
      },
    },
    ...
  },
```

後は起動するだけ

```bash
# install dependencies
$ yarn install

# serve with hot reload at localhost:3000
$ yarn dev
```

この状態で以下にアクセスするとページが見れる

[http://localhost:3000](http://localhost:3000)
