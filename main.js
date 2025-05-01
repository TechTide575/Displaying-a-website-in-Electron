const { app, BrowserWindow, Menu } = require('electron');
const path = require('path');

// ウィンドウを作成する関数
function createWindow() {
    // 新しいブラウザウィンドウを作成
    const win = new BrowserWindow({
        width: 800,
        height: 600,
        icon: path.join(__dirname, 'icon.png'),  // アイコンを指定
        webPreferences: {
            nodeIntegration: true
        }
    });

    // メニューバーを削除
    Menu.setApplicationMenu(null);

    // ウィンドウ名を設定
    win.setTitle('Gmail');

    // URLを読み込む（ここに指定するURLを設定）
    win.loadURL('https://mail.google.com/mail/u/0/#inbox');

    // ウィンドウが閉じたときの処理
    win.on('closed', () => {
        app.quit();
    });
}

// アプリが準備できたらウィンドウを作成
app.whenReady().then(createWindow);

// すべてのウィンドウが閉じられたときの処理
app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') {
        app.quit();
    }
});
