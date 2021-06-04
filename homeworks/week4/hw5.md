## 請以自己的話解釋 API 是什麼

全名 **Application Programming Interface** ，即應用程式介面。

就我的理解 **API** 就是 client 端與 server 之間的物流公司，它會把 client 發出的 request 傳給 server，再把 server 的 respond 回傳給 client，而兩邊的溝通都照物流公司 ( **API** ) 的標準格式填表叫貨跟出貨，快速又方便，只要照著規定格式走，**API** 使命必達。

## 請找出三個課程沒教的 HTTP status code 並簡單介紹

[`202 Accepted`](https://developer.mozilla.org/zh-TW/docs/Web/HTTP/Status/202)

request 已經被接受但尚未處理。

[`300 Multiplehoice`](https://developer.mozilla.org/zh-TW/docs/Web/HTTP/Status/300)

request 擁有一個以上的 respond。user 應該從中選一。不過，並沒有標準的選擇方案。

[`403 Forbidden`](https://developer.mozilla.org/zh-TW/docs/Web/HTTP/Status/403)

user 並無訪問權限，例如未被授權，所以伺服器拒絕給予應有的回應。

## 假設你現在是個餐廳平台，需要提供 API 給別人串接並提供基本的 CRUD 功能，包括：回傳所有餐廳資料、回傳單一餐廳資料、刪除餐廳、新增餐廳、更改餐廳，你的 API 會長什麼樣子？請提供一份 API 文件。

**Base URL**: https://www.haohaochi.com/api

|   description    | method |       path       |         parameter         |         example         |
| :--------------: | :----: | :--------------: | :-----------------------: | :---------------------: |
| 取得所有餐廳資料 |  GET   |   /restaurants   | _limit : 限制回傳資料數量 | /restaurants?_limit=888 |
|  取得一餐廳資料  |  GET   | /restaurants/:id |                           |    /restaurants/168     |
|   刪除餐廳資料   | DELETE | /restaurants/:id |                           |    /restaurants/168     |
|   新增餐廳資料   |  POST  |   /restaurants   |       name: 餐廳名        |                         |
|   更改餐廳資料   | PATCH  | /restaurants/:id |       name: 餐廳名        |    /restaurants/168     |

