/* 章節內容：要修改說明文字，只需編輯此檔
   步驟格式：[文字, 子項目陣列|null, 圖檔|null, (群組步驟)]
   圖檔前綴：無＝文字右側 / ~＝文字下方小圖 / ~~＝文字下方大圖
   提示：「!」開頭＝紅色必看提醒，其餘＝💡小提示
   本指南明視野與螢光樣本共用，差異處在文字中標明 */
/* 圖片顯示寬度（px，上限；畫面較窄時會自動縮小）
   原則：各截圖的軟體畫面截取時放大倍率不同，這裡已換算成「看起來大小一致」。
   沒列在表中的圖（小圖示等）以原始大小顯示。要微調某張圖，只改這裡的數字即可。 */
window.ZEN_IMG_W={
 "ex-select-categories.png":640,
 "cat-export-pick.png":640,
 "SAVE_1.png":600,"NAME.png":500,"FLAG.png":592,"CORECTION_SCALE.png":592,"IF.png":440,
 "SAVE_1.png":600,"NAME.png":560,"FLAG.png":680,"CORECTION_SCALE.png":592,"IF.png":460,
 "SAVE.png":640,"FILE.png":640,"OPTION.png":640,"RESULT.png":640,"CATEGORIES.png":355,"SCALE.png":355,
 "EX-BF.png":640,"EX-BF2.png":640,"EX-FL_IN.png":600,"EX-FL.png":600,"pic_with_crop.jpg":520,"pic_without_crop.jpg":520,
 "open-1.jpg":480,"open-2.jpg":860,"open-3.jpg":860,"folder.jpg":560,
 "fn-toolbar.png":600,"fn-toolbar-if.png":600,"fn-map-demo.png":520,"fn-map-mini.png":164,
 "fl-open.png":600,"fn-fl-panel.png":557,"fn-fl-range.png":520,"q5-select.png":560,"q5-range.png":320,
 "fov-flag.png":600,"fov-menu.png":600,"fov-dialog.png":600,
 "ov-menu.png":600,"ov-basic.png":640,"ov-adv.png":640,"ov-fl.png":600,"cat-export-select.png":640,
 "cat-manage.png":480,"cat-select.png":510,"cat-fixed-new.png":640,"cat-fixed-add.png":640,"cat-fixed-draw.png":600,
 "cat-other-select.png":500,"cat-other-draw.png":510,"cat-remove.png":500
};
window.ZEN_SECTIONS=[
{id:"c1",ic:"🧭",g:"快速上手",t:"該選哪一種轉檔？",d:"依用途選擇 Export 下拉選單中的項目",im:[],pre:[["請先<span class=link data-go='q1'>開啟專案並進入目標 Region</span>；螢光樣本請先完成 <span class=link data-go='q5'>調整螢光顯示與亮度</span>。"]],
 st:[["<b>要原始的單張 FOV 影像（非拼圖）</b> → <span class=link data-go='p1'><b>Export FOVs images</b></span>",["匯出：選取的 FOV 或全部 FOV","方法：先用紅色旗幟選取 FOV，再 Export → Export FOVs images","流程見 <span class=link data-go='q2'>匯出單張/多張 FOV 影像</span>"]],
     ["<b>要整個 Region 的完整拼接大圖</b> → <span class=link data-go='p2'><b>Export region overview</b></span>",["匯出：單張完整拼接全圖（螢光可選全圖／多色疊圖／單色影像）","方法：Export → Export region overview","流程見 <span class=link data-go='q3'>匯出完整拼接全圖</span>"]],
     ["<b>指定框選範圍的拼接圖</b> → <b>框選指定區域</b> ＋ <span class=link data-go='p2'><b>Export region overview</b></span>",["匯出：指定框選範圍的拼接圖，可分組各別匯出","方法：先針對指定區域繪製範圍（見 <span class=link data-go='c2'>建立指定框選範圍</span>），再 Export → Export region overview","流程見 <span class=link data-go='q4'>匯出指定框選範圍拼接圖</span>"]]],
 nt:[]},
{id:"q1",ic:"📂",g:"快速上手",t:"開啟專案與選擇 Region",d:"開啟 .aqproj 專案檔，進入要檢視的 Region",im:[],pre:[["!系統需求：本軟體僅支援 Windows 7 SP2（含）以上版本的作業系統，無法在 Mac（macOS）上執行。"]],
 st:[["<b>開啟軟體</b>：到 TissueFAXS Viewer 的軟體資料夾，點兩下 <b>TissueFAXS Viewer</b> 應用程式。",["TissueFAXS Viewer 為<b>免安裝（可攜式）</b>軟體，只需儲存完整的軟體資料夾內容，即可執行使用"],"^open-1.jpg"],
     ["<b>載入專案</b>：點擊左上角的<b>開啟資料夾</b>圖示（或選單 <b>File → Open</b>），選擇專案的 <b>.aqproj</b> 檔案。",null,"~~open-2.jpg"],
     ["<b>選擇 Region</b>：在左側清單展開玻片（Slide），對要觀察的 <b>Region（SAMPLE…）連點兩下</b>，即可開啟該區域影像。",null,"~~open-3.jpg"]],
 nt:[["!請勿更動專案資料夾內的檔案配置（僅 .bkp 備份檔可以刪除），詳見 <span class=link data-go='f1'>專案資料夾結構</span>。"],
     ["開啟後的影像瀏覽方式見 <span class=link data-go='f2'>影像檢視縮放</span>。螢光樣本請接著做 <span class=link data-go='q5'>調整螢光顯示</span>。"]]},
{id:"q5",ic:"🌈",g:"快速上手",t:"調整螢光顯示與亮度",d:"螢光樣本：開面板、選螢光、調亮度，轉檔前先做好",im:[],pre:[["本章節只適用於<b>螢光樣本</b>；明視野樣本可略過。這裡只列操作流程，各欄位的意思請看 <span class=link data-go='f4'>螢光面板</span>。"]],
 st:[["<b>開啟面板</b>：點擊工具列的 <b>Region Overlay…</b>，會跳出螢光面板。",null,"~~fn-toolbar-if.png"],
     ["<b>選擇要顯示的螢光</b>：勾選 <b>Use</b> 欄位的通道；點擊 <b>Color</b> 可更改顏色。",null,"~~q5-select.png"],
     ["<b>調整亮度</b>：點擊 <b>Auto</b> 自動調整；或點擊 <b>Range</b> 開啟調整視窗，手動調整 Lower／Upper。",null,"~~q5-range.png"],
     ["<b>套用</b>：Range 視窗點擊 <b>Apply &amp; Close</b>，面板點擊 <b>Apply</b>。",["調整後畫面不會即時變化，套用後才會顯現"]],
     ["<b>確認陰影校正未開啟</b>：螢光影像一般建議不要開啟，陰影校正圖示應顯示 <b>ON</b>（說明見 <span class=link data-go='f3'>顯示與工具功能鈕</span>）。"]],
 nt:[["!多色螢光疊圖匯出以「當下勾選開啟的顏色」為主；轉檔前請先設定好顯示。"]]},
{id:"f1",ic:"🗂️",g:"欄位介紹",t:"專案資料夾結構",d:"認識專案資料夾",im:[],imb:["folder.jpg"],
 st:[["<b>.aqproj 專案檔</b>：開啟專案時選擇的檔案（File → Open）。"],["<b>Cache、dat、Images 資料夾</b>：專案的影像與運算資料，請勿移動、更名或刪除。"],["<b>.bkp 備份檔</b>：系統自動產生（檔名含備份日期與時間），可直接刪除。"]],
 nt:[["!除備份檔案可刪除外，請勿更動專案資料夾內的檔案配置，否則專案可能無法正常開啟。"]]},
{id:"f2",ic:"🔍",g:"欄位介紹",t:"影像檢視縮放功能鈕",d:"全圖地圖、最佳觀察大小、100%、自訂比例",im:[],st:[],
 fn:{bar:"fn-toolbar.png",cap:"工具列第一排，由左至右：縮放比例 → 100% 原尺寸 → 最佳觀察大小 → 全圖地圖顯示",
  items:[
   {i:"fn-zoom.png",t:"自訂縮放比例",d:"直接在欄位輸入想要的縮放比例，或點擊左右的放大鏡縮小／放大。",w:1},
   {i:"fn-100.png",t:"100% 原尺寸",d:"以原始尺寸（100%）顯示影像。"},
   {i:"fn-fit.png",t:"最佳觀察大小",d:"自動縮放到適合觀察的大小。"},
   {i:"fn-map.png",t:"全圖地圖顯示",d:"開啟後，影像左下角會出現<b>小地圖</b>，顯示整個樣本的全貌；小地圖中的<b>紅框</b>就是目前視窗正在觀察的位置。",x:["fn-map-mini.png","小地圖（紅框＝目前觀察位置）"],more:["查看完整畫面示意","fn-map-demo.png"]}
  ]},nt:[]},
{id:"f3",ic:"🛠️",g:"欄位介紹",t:"顯示與工具功能鈕",d:"樣本裁切、格線、尺規、比例尺、測量、插旗、陰影校正",im:[],st:[],
 fn:{bar:"fn-toolbar.png",cap:"第二排工具列（Subregions 右側），由左至右：陰影校正 → 樣本裁切範圍 → FOV 格線 → 尺規 → 測量 → 比例尺 → 插旗",
  groups:[
   {h:"👀 顯示類",items:[
    {i:"fn-crop.png",t:"樣本裁切範圍",d:"顯示掃片時框選的指定範圍。"},
    {i:"fn-grid.png",t:"FOV 格線",d:"在影像上顯示各張 FOV 的格線，方便判斷要選取哪幾張（搭配下方的「插旗」使用）。"},
    {i:"fn-ruler.png",t:"尺規",d:"在影像邊緣顯示尺規刻度。"},
    {i:"fn-scalebar.png",t:"比例尺",d:"在影像右下角顯示比例尺。",sub:["畫面上顯示的比例尺不會自動匯出；匯出影像時需在匯出視窗另外勾選"]}
   ]},
   {h:"🎛️ 功能類",items:[
    {i:"fn-measure.png",t:"測量小工具",d:"點擊後可在影像上測量長度。測量結果無法匯出或記錄，重新開關小工具後，結果就會消失。"},
    {i:"fn-flag.png",t:"插旗（標示工具）",d:"點擊後在影像上點擊 FOV，插上旗幟標記要轉檔的 FOV（1 主旗＋8 副旗）。轉檔流程見 <span class=link data-go='q2'>匯出單張/多張 FOV 影像</span>。"},
    {i:["fn-shading-off.png","fn-shading-on.png"],t:"陰影校正（Shading Correction）",d:"圖示標籤顯示的是「點擊後的動作」，所以要看標籤判斷目前狀態：",sub:["<b>左：紅色 OFF</b>＝目前<b>已開啟</b>陰影校正（點擊會關閉）","<b>右：ON</b>＝目前<b>已關閉</b>（點擊會開啟）","螢光影像一般建議<b>不要開啟</b>，也就是圖示應顯示 ON"]}
   ]}
  ]},
 nt:[["螢光樣本的面板說明見 <span class=link data-go='f4'>螢光面板</span>；Z 軸控制見 <span class=link data-go='f5'>Z-stack 影像控制</span>。"]]},
{id:"f4",ic:"🌈",g:"欄位介紹",t:"螢光面板",d:"螢光樣本專用調整功能",im:[],
 st:[["<b>開啟面板</b>：點擊工具列的 <b>Region Overlay…</b>。",["只有開啟螢光影像時才能使用；明視野影像時此按鈕為灰色"],"~~fl-open.png"],
     ["<b>螢光通道表</b>：每個螢光通道一列。",["<b>Use</b>：勾選＝顯示該螢光（也決定多色疊圖匯出的內容）","<b>Name</b>：螢光通道名稱（如 DAPI、FITC、TEXA）","<b>Intensity (%)</b>：該通道的顯示強度","<b>Color</b>：該通道的顯示顏色，點擊可更改套色","<b>Range</b>：目前的亮度範圍，點擊後可調整（見步驟 4）","<b>Auto</b>：自動調整該通道的亮度範圍"],"~~fn-fl-panel.png"],
     ["<b>面板下方</b>",["<b>Monochrome／Color Mode</b>：切換單色或彩色顯示","<b>Apply</b>：套用；<b>Cancel</b>：取消"]],
     ["<b>Range（Threshold）</b>：點擊 Range 後開啟。",["<b>Lower</b>：下限，可用滑桿或直接輸入數值；<b>調高</b>可降低 background","<b>Upper</b>：上限，可用滑桿或直接輸入數值；<b>調低</b>可增加 intensity","<b>Default</b>：還原預設範圍"],"~~fn-fl-range.png"]],
 nt:[["!所有調整都<b>不會即時顯示變化</b>，需點擊 Apply（Range 為 Apply &amp; Close）後，才會顯現變化。"]]},
{id:"f5",ic:"🧊",g:"欄位介紹",t:"Z-stack 影像控制",d:"含 Z 軸的影像：開關控制、選擇觀察層數",im:[],st:[],pre:[["只有檔案包含 Z 軸內容時，才會出現 Z 軸控制列。"]],
 fn:{bar:"z-full.png",cap:"第二排工具列最右側，由左至右：Z 軸開關 → 層數滑桿 → 指定層數",items:[
   {i:"z-toggle.png",t:"Z 軸開關",d:"點擊此鈕可啟用或關閉 Z 軸影像控制。"},
   {i:"z-slider.png",w:1,t:"選擇觀察層數（滑桿）",d:"拉動滑桿，可選擇觀察不同的 Z 軸影像。"},
   {i:"z-input.png",w:1,t:"指定層數",d:"直接輸入層數，或使用上下箭頭，指定要觀察的 Z 軸影像。",sub:["<b>第 0 層</b>：軟體將所有 Z 軸影像中清楚的部分，結合成一張清晰的影像"]}
 ]},nt:[]},
{id:"q2",ic:"🧱",g:"轉檔步驟",t:"匯出單張/多張 FOV 影像",d:"挑選要轉檔的 FOV（原始單張影像）並匯出",im:[],
 st:[["<b>選取 FOV</b>：點擊工具列的<b>紅色旗幟</b>圖示，再到影像視窗中點擊指定的 FOV。",["<b>新增</b>：點擊的 FOV 會出現<b>主旗幟</b>，並環繞 8 個<b>副旗幟</b>，形成九宮格排列","<b>取消</b>：點擊已產生的副旗幟可取消單張；點擊主旗幟會同時取消整個九宮格範圍","匯出多張時，請自行以主、副旗幟標滿所有指定的張數"],"^fov-flag.png"],
     ["<b>開啟匯出視窗</b>：點擊 <b>Export</b> 下拉選單 → <b>Fields of View…</b>。",null,"~~fov-menu.png"],
     ["<b>設定匯出參數</b>：依圖中編號依序設定。",["<b>①</b> 設定儲存資料夾（Save to folder）","<b>②</b> 選擇轉檔格式（JPG／TIF）","<b>③</b> 選擇匯出範圍：<b>All</b>（完整樣本）／<b>Flags Only</b>（僅主旗幟）／<b>Flags With Neighbors</b>（主旗幟與周邊副旗幟）","<b>④</b> 設定陰影校正（Apply Illumination Correction）：明視野<b>勾選</b>；螢光<b>取消勾選</b>","<b>⑤</b> 設定比例尺（Scale bar）：顏色與位置"],["^fov-dialog.png"],null,null,["<b>螢光樣本會多一個選項</b>：設定匯出影像性質（套色疊圖 Overlay／單色影像 Original）","^IF.png"]],
     ["<b>開始轉檔</b>：點擊 <b>Save</b>。"]],
 nt:[["各項細節說明見 <span class=link data-go='p1'>Export FOVs images</span>。"]]},
{id:"q3",ic:"🗺️",g:"轉檔步驟",t:"匯出完整拼接全圖",d:"把整個 Region 匯出成一張拼接大圖",im:[],
 st:[["<b>開啟匯出視窗</b>：點擊 <b>Export</b> 下拉選單 → <b>Region Overview…</b>。",null,"~~ov-menu.png"],
     ["<b>設定匯出參數（Basic 分頁）</b>：依圖中編號依序設定。",["<b>①</b> 設定儲存資料夾（Save to folder）","<b>②</b> 選擇轉檔格式（JPG／TIF）","<b>③</b> 選擇全圖拼圖（<b>Export regions overviews</b>）","<b>④</b> 設定縮放比例（2～100 %）","<b>⑤</b> 設定陰影校正（Apply Illumination Correction）：明視野<b>勾選</b>；螢光<b>取消勾選</b>","<b>⑥</b> 設定外框（Mark crop area）：勾選後可選擇外框顏色"],["^ov-basic.png"],null,null,["<b>螢光樣本會多一個選項</b>：設定匯出影像性質（套色疊圖 Export region overlay／單色影像 Export region channels）","^ov-fl.png"]],
     ["<b>設定比例尺（Advanced 分頁）</b>：切換到 Advanced 分頁，勾選 <b>Scale bar</b>，設定顏色（Color）與位置（Location）。",null,"^ov-adv.png"],
     ["<b>開始轉檔</b>：點擊 <b>Export</b>。"]],
 nt:[["各項細節說明見 <span class=link data-go='p2'>Export region overview</span>。"]]},
{id:"q4",ic:"🔲",g:"轉檔步驟",t:"匯出指定框選範圍拼接圖",d:"只匯出框選的範圍，且可依組別分開匯出",im:[],
 st:[["<b>建立框選組別</b>：點擊 <b>Subregions</b> 下拉選單 → <b>Manage Categories</b>，建立組別名稱。",["不同組別可以分開匯出拼圖照片"],"^cat-manage.png"],
     ["<b>繪製框選範圍</b>：點擊 <b>Subregions</b>，選擇組別名稱，用固定或手動框選工具在影像上框選（細節見 <span class=link data-go='c2'>建立指定框選範圍</span>）。",null,"^cat-select.png"],
     ["<b>開啟匯出視窗</b>：點擊 <b>Export</b> 下拉選單 → <b>Export region overview</b>，並選擇 <b>Export only overviews from categories</b>。",null,"^cat-export-select.png"],
     ["<b>選擇要匯出的組別</b>：切換到 <b>Advanced</b> 分頁，勾選 <b>Include categories</b>，點擊「…」開啟 Select Categories，勾選要匯出的組別（可用 Select All 全選），再點擊 <b>OK</b>。",null,"^ex-select-categories.png"],
     ["<b>設定與匯出</b>：其他設定與匯出完整拼接全圖相同（見 <span class=link data-go='p2'>Export region overview</span>），完成後點擊 <b>Export</b>。"]],
 nt:[]},
{id:"p1",ic:"🧱",g:"詳細設定",t:"Export FOVs images",d:"Export → Fields of View…（匯出單張／多張 FOV）",im:[],st:[],
 pre:[["以下以明視野樣本說明；螢光樣本多出的選項在最後一段。"]],
 thumbs:[["fov-bf-dialog.png","明視野視窗"],["fov-fl-dialog.png","螢光視窗"]],
 parts:[
 {h:"明視野樣本",
  items:[{t:"Save to folder & Files",d:"設定儲存位置",img:"SAVE_1.png",sub:["<b>Save to folder</b>：設定儲存位置","<b>Use stitch</b>：請<b>勿勾選</b>"]},
      {t:"Options",d:"檔名與格式",img:"NAME.png",sub:["<b>File name convention</b>：名稱格式選擇（下方 Name Preview 可預覽檔名）","<b>Image Format</b>：選擇儲存格式（jpg、bmp、png、tif）"],tip:"<div class=note>💡 FOV 原始檔格式：明視野為 JPG，螢光為 TIF。</div>"},
      {t:"匯出範圍",d:"Please select what images will be saved",img:"FLAG.png",sub:["<b>All</b>：完整樣本的全部影像","<b>Flags Only</b>：僅主旗幟標誌處","<b>Flags With Neighbors</b>：主旗幟與周邊副旗幟標誌處"],tip:"<div class=note>💡 如果指定的範圍比例較大，可點擊 <b>Invert selection</b> 反向選擇，排除不需要的 FOV。</div><div class=note>💡 如果已預先指定框選範圍，可勾選 <b>Export only FOVs belonging to categories</b>，選擇組別匯出。</div>"},
      {t:"Apply Illumination Correction",d:"陰影校正（下方第 5、6 項也在這張截圖內）",img:"CORECTION_SCALE.png",sub:["明視野需<b>勾選</b>；螢光請<b>勿勾選</b>（螢光樣本的視窗中，此項顯示為 Apply Shading Correction）"]},
      {t:"Scale bar",d:"勾選後，匯出時會顯示比例尺",sub:["只能指定顏色（Color）與位置（Location）"],tip:"<div class='note must'>⚠️ 比例尺大小無法自行指定。</div>"},
      {t:"Mark crop area",d:"外框設定：請<b>勿勾選</b>"}],
  nt:[]},
 {h:"螢光樣本：Options 新增選項",img:["IF.png"],
  items:[{t:"Overlay",d:"匯出目前顯示的螢光套色影像（多色疊圖）"},
      {t:"Original",d:"匯出 8／16 bit 單色影像"}],
  nt:[["!多色疊圖以當下勾選開啟的顏色為主；需要不同顏色組合時，請更改顯示後分多次匯出。"]]}
 ],
 nt:[]},
{id:"p2",ic:"🗺️",g:"詳細設定",t:"Export region overview",d:"Export → Region Overview…（拼接全圖與指定框選範圍拼圖）",im:[],st:[],
 pre:[["以下以明視野樣本說明；螢光樣本多出的選項在最後一段。"]],
 thumbs:[["EX-BF.png","Basic 頁面"],["EX-BF2.png","Advanced 頁面"]],
 parts:[
 {h:"Basic 頁面",
  items:[{t:"Save to folder",d:"設定儲存位置（可點擊 Browse 選擇資料夾）",img:"SAVE.png"},
      {t:"Files",img:"FILE.png",sub:["<b>Custom part</b>：追加名稱敘述","<b>Extension</b>：選擇儲存格式（jpg、bmp、png、tiff）"],tip:"<div class=note>💡 FOV 原始檔為 JPG，在合適大小範圍內建議使用 JPG 匯出。</div>"},
      {t:"Options",d:"匯出範圍與縮放比例（下方第 4、5 項也在這個區塊內）",img:"OPTION.png",sub:["<b>Export regions overviews</b>：匯出全圖拼圖","<b>Export only overviews from categories</b>：匯出指定框選範圍拼圖","<b>縮放比例（2–100）</b>：縮放後的大小可參考下方 Results 表格中的 Image size (pixels)"],tip:"<div class='note must'>⚠️ 影像匯出為 TIFF 時，顯示範圍會因縮放比例而改變，請以 100% 為基準匯出，否則後續可能需自行裁切修正。</div>"},
      {t:"Apply Illumination Correction",d:"陰影校正",sub:["明視野需<b>勾選</b>；螢光請<b>勿勾選</b>（螢光樣本的視窗中，此項顯示為 Apply Shading Correction）"]},
      {t:"Mark crop area",d:"外框設定",sub:["<b>勾選（上圖）</b>：框選範圍外會套上底色（可在 Color 選擇顏色）","<b>不勾選（下圖）</b>：顯示原始照片拼接"],img:["pic_with_crop.jpg","pic_without_crop.jpg"]},
      {t:"Results",d:"匯出尺寸預覽參考",img:"RESULT.png",sub:["<b>Image size (pixels)</b>：影像尺寸","<b>Uncompressed size (MB)</b>：未壓縮大小"],tip:"<div class='note must'>⚠️ JPG 的未壓縮大小需小於 2000 MB，超過時須改選其他格式。</div>"}]},
 {h:"Advanced 頁面",
  items:[{t:"Include categories",d:"匯出時加入框選組別",img:"CATEGORIES.png",sub:["<b>Categories</b>：選擇要顯示的框選組別","<b>Opacity percent</b>：組別標示的透明度"],tip:"<div class=note>💡 如果影像上已開啟組別顯示，勾選後，匯出的全影像拼圖上會顯示框選組別。</div><div class=note>💡 如要匯出指定框選範圍的拼圖，請點擊「…」勾選要匯出的組別。</div>"},
      {t:"Scale bar",d:"勾選後，匯出時會顯示比例尺",img:"SCALE.png",sub:["只能指定顏色（Color）與位置（Location）"],tip:"<div class='note must'>⚠️ 比例尺大小無法自行指定。</div>"}]},
 {h:"螢光樣本：Options 新增選項",img:["EX-FL_IN.png"],
  items:[{t:"Export region overlay",d:"匯出目前顯示的螢光套色影像（多色疊圖）"},
      {t:"Export region channels",d:"匯出各螢光通道的單張影像，格式有三種：",sub:["<b>Export in 8-bit format</b>：匯出 8-bit 單張單色影像","<b>Export in 16-bit format</b>：匯出 16-bit 單張單色影像（僅 tiff 格式可用）","<b>Export in 8-bit pseudocolor</b>：匯出單張套色影像"]}],
  nt:[["!多色疊圖以當下勾選開啟的顏色為主；需要不同顏色組合時，請更改顯示後分多次匯出。"]],more:["查看螢光樣本的完整視窗","EX-FL.png"]}
 ],
 nt:[]},
{id:"c2",ic:"✏️",g:"詳細設定",t:"建立指定框選範圍",d:"Subregions：建立組別、固定／手動框選",im:[],
 st:[["<b>建立框選組別</b>：點擊 <b>Subregions</b> 下拉選單 → <b>Manage Categories</b>。",["在 <b>Name</b> 直接輸入組別名稱","在 <b>Color</b> 選擇框選線條顏色，點擊 <b>OK</b>"],"^cat-manage.png"],
     ["<b>選擇組別並使用框選工具</b>：點擊 <b>Subregions</b> 勾選要繪製的組別，工具列左側才會出現框選工具。",["框選工具分成「固定」與「手動」兩類，依需求使用"],"^cat-select.png"]],
 fn:{ind:1,groups:[{items:[
   {i:"cat-fixed.png",t:"固定框選工具",d:"可指定框選的長寬，連續框選多個相同大小的範圍。",ms:[
     ["點擊 <b>New</b> 建立框選大小；已建立過的大小會留在清單中，可直接點擊使用。","cat-fixed-new.png"],
     ["點擊 <b>Add to Region</b> 進行繪製（形狀可選矩形 Rectangular 或橢圓 Elliptic）。","cat-fixed-add.png"],
     ["在影像上點擊位置，即可連續框選。","cat-fixed-draw.png","點擊定位前，框選範圍會以黑框顯示；完成框選後，會呈現該組別指定的顏色。"],
     ["按 <b>ESC</b> 結束框選模式。"]]},
   {i:"cat-manual.png",w:1,t:"手動框選工具（方形／圓形／多邊形）",d:"點擊工具列上的工具後，直接在影像上點擊並拖曳滑鼠進行繪製。"}
  ]}]},
 st2:[["<b>繪製其他組別</b>：點擊 <b>Subregions</b> 選擇其他組別，再重複步驟 2 的方式框選。<div class='note must'>⚠️ 繪製時一次只能選取一個組別：選取指定組別時，會顯示該組別已繪製的範圍；同時選取兩個以上的組別，框選工具列將無法使用。</div>",null,"^cat-other-select.png"],
      ["<b>同時查看所有框選範圍（選用）</b>：繪製中如需同時看到全部已框選的範圍，請在 <b>Subregions</b> 選單中選擇 <b>Display Unselected Categories</b>。",["選定組別的範圍維持原本顏色；非選定組別的範圍會以白色顯示，不影響各組別原本的繪製"],"^cat-other-draw.png"],
      ["<b>刪除已框選的範圍</b>：在要刪除的範圍上點擊<b>右鍵</b> → <b>Remove 組別名稱 編號…</b>。",null,"^cat-remove.png"]],
 nt:[["框選的範圍除了匯出之外，也可以匯入 StrataQuest 進行分析。"],
     ["匯出步驟請參考 <span class=link data-go='q4'>匯出指定框選範圍拼接圖</span>。"]]}
];
