# TissueFAXS Viewer 操作指南（網頁版 SOP）

架構與 ZEN 操作指南相同：純靜態網站（GitHub Pages）＋ Google Apps Script 記錄訪客／搜尋／意見回饋。

## 資料夾結構
```
index.html
css/style.css
js/config.js      ← 已填入 GAS 網址
js/content.js     ← 章節內容（改文字只改這個）
js/faq.js         ← 常見問題
js/app.js
images/           ← 截圖放這裡（檔名見下表）
apps-script/Code.gs   ← 貼到 Apps Script，不需上傳 GitHub（上傳也無妨）
```

## 上線步驟
1. 將整個資料夾上傳到 GitHub repo → Settings → Pages → 選 main / root。
2. 建一份**新的 Google 試算表**，複製網址中的 ID，貼到 `Code.gs` 的 `SPREADSHEET_ID`。
3. 試算表 → 擴充功能 → Apps Script，貼上 `Code.gs` → 執行一次 `testWrite` 授權 → 部署為「網頁應用程式」（執行身分：我；存取：所有人）。
4. 把「網頁應用程式網址」貼到 `js/config.js` 的 `GAS_URL`。
5. 截圖尚未放入時，網頁會顯示「📷 截圖待補：檔名」的虛線框，不會破圖。

## 截圖清單（檔名＝章節中的圖檔名）
快速上手用「乾淨截圖」；參數設定的圖請標上編號，**編號 = 該頁步驟編號**。
參數設定頁（p1～p3）請以**螢光 IF 的匯出視窗**截圖編號（它包含 BF 沒有的選項）；標註「僅螢光 IF」的步驟在 BF 視窗中不存在，屬正常。


| 章節 | 圖檔 |
|---|---|
| 開啟專案與選擇 Region | `open-1.jpg`、`open-2.jpg`、`open-3.jpg` |
| 調整螢光顯示與亮度（IF） | `if-show.jpg`、`if-adjust.jpg`、`if-shading.jpg` |
| 轉出單張/多張 FOV 影像 | `flag.jpg`、`menu-fov.jpg`、`fov-dialog.jpg` |
| 轉出完整拼接全圖 | `menu-ov.jpg`、`ov-basic.jpg`、`ov-adv.jpg` |
| 轉出指定框選範圍拼接圖 | `cat-manage.jpg`、`cat-draw.jpg`、`menu-ov.jpg`、`cat-export-adv.jpg` |
| 專案資料夾結構 | `folder.jpg` |
| 影像檢視縮放功能鈕 | `zoom-buttons.jpg` |
| 格線、裁切、比例尺與 Z-stack | `display-tools.jpg` |
| 螢光顯示與亮度調整（IF） | `fluo-panel.jpg` |
| 建立框選組別並繪製範圍 | `cat-manage.jpg`、`cat-tools.jpg`、`cat-draw.jpg` |
| Export FOVs images 參數 | `fov-main.jpg`、`fov-name.jpg` |
| Export region overview 參數 | `ov-main-basic.jpg`、`ov-main-adv.jpg`、`ov-name.jpg` |
| 分組輸出（框選範圍）參數 | `cat-basic.jpg`、`cat-adv.jpg`、`cat-result.jpg` |
