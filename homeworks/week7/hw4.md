## 什麼是 DOM？

**文件物件模型（\*Document Object Model, DOM\*）**是 HTML、XML 和 SVG 文件的程式介面。

它提供了一個文件（樹）的結構化表示法，並定義讓程式可以存取並改變文件架構、風格和內容的方法。

DOM 提供了文件以擁有屬性與函式的節點與物件組成的結構化表示。

節點也可以附加事件處理程序，一旦觸發事件就會執行處理程序。 本質上，它將網頁與腳本或程式語言連結在一起。

ex :

![img](https://miro.medium.com/max/972/0*iC7eUPKOdZ_ODZwI.gif)

​                                                                     photo by [W3Schools](https://www.w3schools.com/js/js_htmldom.asp)

## 事件傳遞機制的順序是什麼；什麼是冒泡，什麼又是捕獲？

事件在 DOM 中傳遞的順序，以及可以對這事做甚麼。

事件傳遞機制總共分為三大階段：

- **捕獲階段 (Capture Phase)**
- **目標階段 (Target Phase)**
- **冒泡階段 (Bubbling Phase)**

ex :

```
// PhaseType
const unsigned short      CAPTURING_PHASE                = 1;
const unsigned short      AT_TARGET                      = 2;
const unsigned short      BUBBLING_PHASE                 = 3;
```

![img](https://static.coderbridge.com/img/techbridge/images/huli/event/eventflow.png)

​                                                                          photo by [W3C](https://www.w3.org/TR/DOM-Level-3-Events/#event-flow)

由上可知三個階段各代表:

**捕獲階段 (Capture Phase)**

在捕獲階段，DOM 的事件會從祖先層 (window) 開始往下尋找目標 (target)。

**目標階段 (Target Phase)**

在找到目標的時候，就會是目標階段 。

**冒泡階段 (Bubbling Phase)**

循著原路回去的過程。



這個階段的順序，也是常常聽到的口訣：「**先捕獲，再冒泡」**。

而當事件傳到 target 本身，沒有分捕獲跟冒泡。

## 什麼是 event delegation，為什麼我們需要它？

事件代理。

如果遇到 **動態新增** 需要綁定或是 **需要多次迴圈監聽的事件**，實在不適合都只用 EventListener 處理，

太沒效率，event delegation 可以用冒泡很好的解決問題。

ex :

<div class="outer">
  <button class="btn_add" >add</button>
  <button class="btn" data-value="1">1</button>
  <button class="btn" data-value="2">2</button>
</div>
<script>
  document.querySelector('.outer').addEventListener('click',  function (e) {
  console.log(e.target.getAttribute('data-value'));
})
</script>

所有的 `button` 只要觸發 `click` 事件，都會向上冒泡傳遞到上層 `.outer`，觸發 `.outer` 的 `click` 事件，那就直接將 `EventListener` 綁定在上層的 `.outer` 身上，且因為 `click` 事件是綁在上層的 `.outer` ，所以也不用擔心 `.appendChild()` 新增的子元素沒有綁定到 eventListener。

## event.preventDefault() 跟 event.stopPropagation() 差在哪裡，可以舉個範例嗎？

`event.stopPropagation()` : 取消事件傳遞

用來中斷事件鏈，讓事件不再繼續往下傳遞。

ex :

```
$list.addEventListener('click', (e) => {  
console.log('list capturing', e.eventPhase);
e.stopPropagation(); 
}, true)
```

result :

```
list capturing 
1
```

因為事件的傳遞被停止，所以剩下的 listener 都不會再收到任何事件。

`event.preventDefault()` : 取消預設行為

ex :

```
$list_item_link.addEventListener('click', (e) => {
  e.preventDefault();
}, false)
```

result :

阻止超連結的預設行為 ( 新開分頁或是跳傳 ) 。

#### 總結 :

 `event.preventDefault()`  就只是取消預設行為，跟事件傳遞沒有任何關係。

`event.stopPropagation()`則是讓事件不再往下傳遞。