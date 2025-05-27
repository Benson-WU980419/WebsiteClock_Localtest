# 📱 iPhone 時鐘 - TW NTP 校準版

這是一個仿 iPhone 樣式的網頁時鐘，支援：

- 🔥 PWA 安裝、離線瀏覽
- 🎯 使用 Cloudflare Workers 實作 NTP 校準
- 💡 支援 iPhone 長亮、OLED 防烙印偏移
- 🇹🇼 台灣標準時間（透過 worldtimeapi.org）

## 🔧 功能特色

- **NTP 校準**：開啟時自動透過 Cloudflare Workers 從 WorldTimeAPI 取得伺服器時間，與本地時間誤差進行調整。
- **PWA 支援**：可安裝至桌面，支援離線使用。
- **燒屏保護**：每 10 秒隨機小幅度移動時間顯示位置。
- **iOS 優化**：支援 `viewport-fit=cover`、Apple Touch Icon、全螢幕模式。

## ☁️ 部署指南（Cloudflare Pages）

1. 將專案 fork 或 clone 下來。
2. 上傳至 GitHub。
3. 前往 [Cloudflare Pages](https://pages.cloudflare.com/) 新增專案。
4. 選擇你的 GitHub 倉庫並部署。
5. 確保 `.html`, `.json`, `.js`, `_headers` 均在專案根目錄。

## 🌐 Cloudflare Workers 作為 NTP Proxy

使用 [worldtimeapi.org](https://worldtimeapi.org) 代理獲取 UTC 時間，避免 CORS 問題。請參考 `ntp-proxy.js` 並部署至 Workers。

> Workers URL 要加入至 `index.html` 中 fetch 的位置，並更新 `_headers` 的 CSP 設定。

## 📝 授權 License

MIT License
