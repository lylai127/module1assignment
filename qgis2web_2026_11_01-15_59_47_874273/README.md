# 1992年東涌考察 — 互動地圖與照片資料庫

CUHK ANTH5323 Module Assignment — 1992 Tung Chung Field Study

## 頁面說明

本資料夾包含兩個地圖頁面：

### 1. `interactive_map.html`（主要互動地圖）

以 Leaflet.js 建立的互動地圖，包含：

- **左欄篩選器**：可按 Place Name（地點）、Photo Subject（主題）、Location Precision（精度）獨立篩選，不選擇某類別即表示不限制該類別
- **中央地圖**：顯示現況地圖底圖（`currentmap_merged_clipped_translated_resampled4_0.png`），可勾選疊加兩幅歷史地圖（沙咀頭與大圍坑、彌勒山），並可調節透明度
- **照片標記**：39 張照片以彩色圓點標示於地圖上，按 Place Name 分色；同一座標多張照片時以紅色數字標示數量；縮小地圖時自動聚合成 cluster，顯示照片總數及 Place Name
- **右欄照片面板**：點擊標記後顯示照片及元數據（指攝日期、拍攝者、Place Name、Photo Subject、Location Information、Photo Notes 等）；同一地點有多張照片時顯示縮圖列表
- **重設地圖按鈕**：左欄底部可一鍵重設地圖至完整顯示現況地圖的範圍
- **響應式設計**：支援桌面、平板及手機佈局

### 2. `index.html`（qgis2web 原始匯出）

QGIS qgis2web 插件的原始匯出頁面，使用 OpenLayers，供參考對比。

## 檔案結構

```
├── interactive_map.html      ← 主要互動地圖（請開啟此檔）
├── index.html                ← qgis2web 原始匯出
├── README.md                 ← 本說明檔
├── .gitignore
├── images/                   ← 39 張照片（B12P01–B12P39）
├── layers/                   ← 地圖底圖及歷史地圖 PNG + GeoJSON 資料
│   ├── currentmap_merged_clipped_translated_resampled4_0.png
│   ├── HistoricalMap_1_cropped_translated_resample3_1.png
│   ├── HistoricalMap_2_cropped_translated_resampled3_2.png
│   ├── 1992_3.js             ← GeoJSON 照片資料
│   └── layers.js             ← 圖層定義
├── resources/                ← OpenLayers 函式庫（供 index.html 使用）
├── styles/                   ← qgis2web 樣式及圖例
└── webfonts/                 ← Font Awesome 字體
```

## 如何使用

### 本機查看

直接用瀏覽器開啟 `interactive_map.html` 即可，無需安裝任何軟件。

### GitHub Pages 部署

1. 將整個資料夾上傳至 GitHub repository
2. 進入 repository Settings → Pages
3. Source 選擇 `main` branch，資料夾選 `/ (root)`
4. 儲存後數分鐘即可透過 `https://<username>.github.io/<repo-name>/interactive_map.html` 存取

## 資料來源

- 照片：CUHK Anthropology Department, 1992 Tung Chung Field Study
- 地圖底圖：QGIS 處理之合併裁剪現況地圖
- 歷史地圖：沙咀頭與大圍坑、彌勒山區域歷史地圖
