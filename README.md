# learn-taskrunner

## sample_gulpについて

### 動作環境

node 10.15.3
npm 6.4.1

### ディレクトリ構造

``` shell
├── _develop
│   ├── assets
│   ├── css
│   ├── js
│   ├── templates
│   └── tools
│       ├── gulp
│       └── webpack
├── _dist
├── _pages
├── package-lock.json
└── package.json
```

|ディレクトリ名もしくはファイル名|説明|
|---|---|
|_develop|ビルド前のソースコードを格納するディレクトリ、基本的に当ディレクトリのファイルを編集していく|
|_pages|開発用にビルドする中間生成物のディレクトリ|
|_dist|本番用にビルドした成果物が格納されていくディレクトリ|

### 課題

1. `gulp-autoprefixer`パッケージを導入しscssファイルコンパイル時にautoprefixerを実行するよう既存のScssをコンパイルをするタスクを改修してみましょう(対応ブラウザの設定は自由で)

2. 画像のコピー時に画像を圧縮できるように画像のコピーをするタスクを改修してみましょう(使用するnpmパッケージについては自由)