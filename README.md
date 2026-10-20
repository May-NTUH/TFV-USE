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

## 圖片顯示大小
每張截圖的最大顯示寬度集中在 `js/content.js` 最上方的 `ZEN_IMG_W` 表（單位 px，畫面較窄時會自動縮小）。截圖放大倍率不同，表中數字已換算成「看起來大小一致」；換新圖後若覺得太大或太小，只改該檔名對應的數字即可。

## 檔名注意
圖檔檔名**不可只差大小寫**（例如 `FOV-FL.png` 與 `fov-fl.png`）：Windows 解壓縮或上傳時會互相覆蓋，造成圖片消失。新增圖片時請使用不同的名稱。

## 截圖清單（檔名＝章節中的圖檔名）
快速上手用「乾淨截圖」；參數設定的圖請標上編號，**編號 = 該頁步驟編號**。
參數設定頁（p1～p3）請以**螢光樣本的匯出視窗**截圖編號（它包含明視野沒有的選項）；標註「僅螢光」的步驟在明視野視窗中不存在，屬正常。


| 章節 | 尚待補的圖檔 |
|---|---|

> 目前所有章節的截圖都已內附，沒有待補圖檔。
