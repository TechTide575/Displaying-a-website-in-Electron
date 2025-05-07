# Electronでのwebサイト表示
webサイトを表示するコードのテンプレートです
Below is the English version
# 下準備
>vscodeをダウンロード＆インストールしとくと便利
>コマンドもvscodeでも使えるよ
***

まずNode.jsがインストールされているか確認して下さい
以下のコマンドを実行
`node -v `
これで
`v~~~~`と表示されればインストールしています
インストールURL
[[Node.js](https://nodejs.org/ja/download)]
Node.jsの環境はnmpでfmmで
***
つぎにgitをインストールします
[[Git]((https://git-scm.com/))]
ここからインストーラーをダウンロードして実行してウイザードのとおり進めてください
***
まず`npm init` `npm install electron`の順に実行
***
次に
このレジスポリのmain.jsをダウンロードしてpackage.jsonとpackage-lock.jsonは、中身をこのレジスポリのやつに書き換えて
コマンドプロンプトは起動しといて


# 使い方
main.js
***
`win.loadURL('https://example.com');`
アプリ内で表示するウェブページの URL を指定。
オフラインアプリを作りたい場合は loadFile('index.html') などに変更可能。
***
アプリアイコンは、icoフォルダのなかに
同じ画像をpng ico icns形式で1ずつ、名前は、`Icon.png` `icon.ico` `icon.icns`で
画像をpngをもとにして変換して
***
package.json
***
アプリの名前を変更するには、"の中を変更してください
`"name": "name",`
***
バージョンは、1.0.0を変更してください
`"version": "1.0.0",`
***
製品名を変更するには、"の中を変更
`"productName": "MyElectronApp",`
***
# ビルド方法
***
これを実行
`npm install electron-packager --save-dev
npx electron-packager . MyAppName --platform=win32 --arch=x64 --icon=icon.ico --overwrite
`
***
以上日本語版
***
# Displaying a website with Electron
This is a code template for displaying a website
Below is the English version
# Preparation
>It's useful to download and install vscode
>You can also use commands with vscode
***

First, make sure Node.js is installed
Execute the following command
`node -v `
If it displays `v~~~~`, it is installed
Installation URL
[[Node.js](https://nodejs.org/en/download)]
Node.js environment is nmp and fmm
***
Next, install git
[[Git]((https://git-scm.com/))]
Download the installer from here, run it, and proceed as instructed by the wizard
***
First, run `npm init` and `npm install electron` in that order
***
Next, download main.js from this regispoli and rewrite the contents of package.json and package-lock.json to the ones from this regispoli
Start the command prompt

# Usage
main.js
***
`win.loadURL('https://example.com');`
Specify the URL of the web page to display in the app.
If you want to create an offline app, you can change it to loadFile('index.html') or something similar.
***
The app icon is in the ico folder
The same image in png ico icns format, one each, named `Icon.png` `icon.ico` `icon.icns`
Convert the image based on png
***
package.json
***
To change the name of the app, change the "
`"name": "name",`
***
To change the version, change 1.0.0
`"version": "1.0.0",`
***
To change the product name, change the "
`"productName": "MyElectronApp",`
***
# How to build
***
Run this
`npm install electron-packager --save-dev
npx electron-packager . MyAppName --platform=win32 --arch=x64 --icon=icon.ico --overwrite
`
Run this
`npm install electron-packager --save-dev
npx electron-packager . MyAppName --platform=win32 --arch=x64 --icon=icon.ico --overwrite
`
