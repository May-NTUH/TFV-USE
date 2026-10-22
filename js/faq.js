/* 常見問題：要新增或修改，只需編輯此檔。格式：[症狀, 可能原因, 解決方式, 對應章節id] */
window.ZEN_SECTIONS.push({id:"faq",ic:"❓",g:"問題與回饋",t:"常見問題",d:"遇到狀況先看這裡",im:[],st:[],nt:[],faq:[
["TissueFAXS Viewer 需要安裝嗎？Mac 電腦可以使用嗎？","TissueFAXS Viewer 是免安裝（可攜式）軟體，且僅支援 Windows 7 SP2（含）以上版本的作業系統。","只需儲存完整的軟體資料夾內容，即可在 Windows 電腦上直接執行；Mac（macOS）無法執行。","q1"],
["專案打不開，或開啟後找不到掃片影像","專案資料夾內的檔案被移動、更名或刪除。","原檔案不可用，請找尋其他備份資料。",""],
["匯出的單張 FOV 比拼圖中看到的範圍大","FOV 包含拼接計算範圍，實際單張 FOV 會比拼圖中顯示的範圍稍大。","這是正常現象，不影響拼接結果；需要精準範圍時，請改用匯出拼接圖。",""],
["匯出 Tiff 後，影像顯示範圍和軟體中看到的不一樣","影像匯出為 TIFF 時，顯示範圍會因縮放比例而改變。","請以 100% 為基準匯出；否則後續可能需自行裁切修正。","p2"],
["我只想匯出幾張特定的 FOV","沒有先用旗幟選取，或匯出範圍選成 All（完整樣本的全部影像）。","先點擊紅色旗幟選取 FOV，再於匯出視窗選擇 Flags Only（僅主旗幟標誌處），或 Flags With Neighbors（主旗幟與周邊副旗幟標誌處）。","q2"],
["匯出的影像沒有比例尺，或想指定比例尺大小","匯出視窗中沒有勾選比例尺，或顯示過小不易發現。","在匯出視窗勾選 Scale bar；大小無法調整，若需要特定樣式，請於匯出後以其他軟體處理。",""],
["明視野影像有網格狀陰影／螢光影像有奇怪光影","陰影校正選項錯誤。","明視野要開啟（匯出時勾選）；螢光要關閉（匯出時勿勾選）。",""],
["繪製框選範圍時，看不到其他組別的框","繪製時一次只能選取一個組別，只會顯示該組別已繪製的範圍。","要同時看到全部範圍，請在 Subregions 選單選擇 Display Unselected Categories，非指定組別會顯示成白色。","c2"],
["多色螢光疊圖的顏色組合不是我要的","多色疊圖以「當下勾選開啟的顏色」為主。","先回到影像視窗，勾選要呈現的螢光通道，再開始匯出；需要不同組合時，請更改顯示後分多次匯出。","q5"],
["想要每個螢光通道各自一張單色影像","匯出時沒有選擇 Export region channels。","在 Export region overview 的 Basic 分頁勾選 Export region channels。","p2"],
["螢光影像背景太亮，或訊號太暗","螢光亮度範圍尚未調整。","點擊 Region Overlay… → 點擊 Range：在 Range 設定中，Upper 調低可增加 intensity；Lower 調高可降低 background。","f4"],
["陰影校正圖示顯示 OFF，是已經關閉了嗎？","圖示標籤顯示的是「點擊後的動作」：顯示 OFF 代表目前是開啟狀態。","螢光影像一般建議不要開啟陰影校正；圖示顯示 ON 才代表目前為關閉。需要關閉時，點擊顯示 OFF 的圖示即可。","f3"],
],post:[["找不到答案？請到 <span class=link data-go='feedback'>意見回饋</span> 留下問題或建議。"]]});
window.ZEN_SECTIONS.push({id:"dl",ic:"📥",g:"問題與回饋",t:"軟體與說明書下載",d:"Viewer 軟體、PDF 說明書",im:[],st:[],nt:["Viewer 為免安裝（可攜式）軟體，僅支援 Windows；下載後請解壓縮整個資料夾再執行。","下載連結為院內檔案分享空間，若無法開啟，請確認網路環境，或到「意見回饋」告訴我們。"],dl:[
{i:"💾",t:"TissueFAXS Viewer 軟體",d:"免安裝版，Windows 7 SP2（含）以上",u:"https://aep.ntuh.gov.tw/public.php?service=files&t=1oiKOGtcwMrWPLWv_ousPisYr-iucL1Mmi08ABnJQKgqXEA2n95KpVhAGL9qoS-6"},
{i:"📄",t:"PDF 說明書（明視野版本）",d:"明視野樣本操作 SOP",u:"https://aep.ntuh.gov.tw/public.php?service=files&t=n4HnkL02G1gZ37CY_DOO9qtjW8DzygZfFDh7cQhODS2xB_74e_nhESQV0ruqcBxe"},
{i:"📄",t:"PDF 說明書（螢光版本）",d:"螢光樣本操作 SOP",u:"https://aep.ntuh.gov.tw/public.php?service=files&t=DJci8qqv175079KbtMBd-A8D48tG_4vCZ37RjJXBMNvIc5SqU2iudFXGFgrXUdU1"}]});
window.ZEN_SECTIONS.push({id:"feedback",ic:"💬",g:"問題與回饋",t:"意見回饋",d:"留下您的問題或建議",im:[],st:[],nt:[],fb:true});
