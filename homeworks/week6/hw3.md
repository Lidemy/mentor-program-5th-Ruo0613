## 請找出三個課程裡面沒提到的 HTML 標籤並一一說明作用。

1. <bgsound> : 背景音樂 

   ex :<bgsound src="img/music.mp3" loop="5"/> : 播放 " img/music.mp3 " 並循環 5 次。

2. <fieldset>  :  對表單 (form)中的控制元件做分組

   ex :

   <form> 
       
   </form><fieldset>     <legend>Personal details</legend>     <label>Your name:</label> <input name="yourname">     <label>Your age:</label> <input type="number" name="yourage">   </fieldset>    <fieldset>     <legend>Your address</legend>     <label>Street:</label> <input name="street">     <label>Zip code / post code:</label> <input name="postcode">   </fieldset> </form>

3. <ins>  : 用來標示一段被編輯插入 (insertion) 的新文字，常和 <del>一起使用。

   ex :

   ```html
   <p>“You're late!”</p>
   <del>
     <p>“I apologize for the delay.”</p>
   </del>
   <ins cite="../howtobeawizard.html" datetime="2018-05">
     <p>“A wizard is never late …”</p>
   </ins>
   ```

   result：

   “You're late!”

   ~~“I apologize for the delay.”~~

   “A wizard is never late …”

## 請問什麼是盒模型（box modal）

html 中的元素都可以當成一個盒子看，由內向外從本身的長寬到 padding、border、margin 組成，

並可以用 CSS 來調整 box modal 的屬性。

## 請問 display: inline, block 跟 inline-block 的差別是什麼？

#### Inline

．元素可在同一行內呈現，圖片或文字均不換行，也不會影響其版面配置
．不可設定長寬，元素的寬高由它的內容撐開

#### block

．元素寬度預設會撐到最大，使其占滿整個容器
．可以設定長寬/margin/padding，但仍會占滿一整行

#### inline-block

．以inline的方式呈現，但同時擁有block的屬性
．可設定元素的寬高/margin/padding
．可水平排列

## 請問 position: static, relative, absolute 跟 fixed 的差別是什麼？

#### static 

．預設定位，無法定義 top、left、bottom 與 right。

#### relative

．相對定位，元素與 static 位置相同，但可定義 top、left、bottom 與 right。

#### absolute

．絕對定位，以上層非 static(預設定位)的父元素為定位基準。

#### fixed

．固定定位，以目前瀏覽器視窗定位，固定在瀏覽視窗的固定位置，不隨滾動捲軸拉動。