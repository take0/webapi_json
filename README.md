## Web API json

いろいろなテスト用に、JSON形式でレスポンスを返す Web API サーバを簡単に立ち上げることが目的。

node.js と express を使っている。

### 使用している version

```
$ node --version
v11.13.0

$ npm view express version
4.17.1
```

### 手順
#### セットアップ
node.js は Windows 版をインストール済み。

その後の手順には npm/npx ではなく、yarn を使っている。
```
$ yarn init -y // 質問は全て yes (-y) で答える。
$ ls
$ pacakge.json

$ yarn add express
$ ls
node_modules  package.json  yarn.lock

$ vi app.js // app.js を作成して基本的で最低限必要なコードを書く
```

#### 実行
```
$ node app
http://localhost:3000 // ログ出力。ハイパーリンクとできる環境ならクリック出来て便利。
```

#### 確認
```
$ curl http://localhost:3000
Hello, Express.
```

#### 参考文献
[1] JAVASCRIPTエンジニアのためのNODE.JS入門
