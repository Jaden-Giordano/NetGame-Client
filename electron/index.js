const url = require('url');
const path = require('path');

// eslint-disable-next-line import/no-extraneous-dependencies
const { app, BrowserWindow, Menu } = require('electron');

const { config } = require('./util');

let win = null;

function createWindow() {
  const cfg = config();

  const { window = { width: 800, height: 600 } } = cfg;

  const windowSettings = Object.assign({
    resizable: false,
    minimizable: false,
    maximizable: false,
    show: false,
    webpreferences: {
      devTools: process.env.NODE_ENV === 'dev',
    },
  }, window);

  windowSettings.width += process.env.NODE_ENV === 'dev' ? 500 : 0;

  win = new BrowserWindow(windowSettings);

  // Remove the menu bar.
  Menu.setApplicationMenu(null);
  // Show the window gracefully.

  win.loadURL(url.format({
    pathname: path.resolve(__dirname, '..', 'dist', 'index.html'),
    protocol: 'file:',
    slashes: true,
  }));

  if (process.env.NODE_ENV === 'dev') {
    win.webContents.openDevTools();
  }

  win.once('ready-to-show', () => win.show());
}

app.on('ready', createWindow);

// Quit when all windows are closed.
app.on('window-all-closed', () => {
  // Mac won't quit unless CMD+Q is pressed, so force it to quit when the window is closed.
  if (process.platform !== 'darwin') app.quit();
});

app.on('activate', () => {
  // On macOS it's common to re-create a window in the app when the
  // dock icon is clicked and there are no other windows open.
  if (win === null) createWindow();
});
