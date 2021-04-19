## 請解釋後端與前端的差異。

<br />

前端是瀏覽器視覺化使用者看得到的，後端是伺服器和資料庫處理使用者看不到的。

前端包括網頁的內容 (HTML)、外觀呈現 (CSS)、使用者介面和互動 (JavaScript) 等，

後端則是功能 (PHP) 與資料處存 (MySQL)。

<br />

## 假設我今天去 Google 首頁搜尋框打上：JavaScript 並且按下 Enter，請說出從這一刻開始到我看到搜尋結果為止發生在背後的事情。

<br />

1. 發送搜尋 **JavaScript** 關鍵字的 request :

​       瀏覽器 &rarr; **OS** &rarr; 網卡 &rarr; Google server &rarr; DB

2. 回傳 respond 並解析顯示 :

      DB &rarr; Google server &rarr; 網卡 &rarr; OS &rarr; 瀏覽器

<br />

## 請列舉出 3 個「課程沒有提到」的 command line 指令並且說明功用



1. `date` : 顯示現在的日期跟時間。
2. `echo` :可以在 CLI 裡顯示文字。
3. `free` : 顯示內存狀態。