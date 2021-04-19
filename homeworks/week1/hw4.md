## 跟你朋友介紹 Git



#### 什麼是 Git ?



說簡單點 **Git** 就是一種版本控制系統，而什麼是版本控制?



相信大部分有使用過電腦的人其實都做過某些類版本控制，



比如說打一份小組報告，每次修改另存初版、第二版、第三版最後到最終版，



如果你有做過類似的動作，其實這就很像是版本控制。



那為什麼要做版本控制呢 ? 因為這樣可以讓開發過程比較有彈性跟保障，



讓你可以多線進行存檔並回朔，聽起來是不是有點像多結局遊戲的 S/L 大法 ? 



而 **Git** 就是幫我們做版本控制的利器。

------



#### 環境設置



1. 到 [Git 官網](https://git-scm.com/downloads) 下載對應你的系統的 Git 並安裝 (一直按next就好了)

   

2. 安裝完應該會有個程式叫 **Git Bash**，點開並輸入 `git --version`，有出現版本資訊代表安裝好了。



#### Git 基本常用指令



##### `git init` : 初始化



最初的指令，當你開始要用 Git 做版本控制或是要初始化時，



都需要輸入 `git init` 來建置環境。





##### `git status` : 查看版本控制狀態



用來 check 版本控制的狀態，有事沒事都會用到的指令，多看多保障。





##### `git add` : 決定把檔案加入版本控制



Git 並不會自動幫我們把檔案加入版本控制，也不需要，因為不一定會想要把所有檔案都加入 Git，



因此我們需要用 `git add <filename>` 把檔案加入版本控制



如果需要全選加入的話可以用 `git add .`





##### `.gitgnore` : 黑名單



承上所述用 `git add .` 加入檔案時，若有不想加入的檔案時，可以新建一份黑名單 `thouch.gitgnore`，



把想拒絕往來的檔案寫進 `.gitgnore` 裡 (可以用 `vim` 寫)





##### `git commit` : 新建一個版本



通常會搭配參數使用，檔案修改好要新建一個版本時可以輸入 `git commit -m "commit name"` 建立新版本，



也可以直接輸入 `git commit -am "commit name"` 建立版本同時把檔案都加進來。





##### `git log` : 歷史紀錄 



輸入 `git log` 可觀看歷史紀錄。





##### `git branch` : 分支



上面有說到 Git 是可多線進行的，輸入 `git branch new-feature` 就可以建立一個名叫 new-feature 的新分支。





##### `git checkout`: 切換分支



輸入`git checkout new-feature` 切換到 new-feature 分支。



------



### GitHub



GitHub 是一個以 Git 為基礎，為開發者提供雲端版本控制服務（Repository Hosting）的平台，



其實就是 PornHub 之於 porn ，是讓大家用 Git 來蕉流的平台，可以上傳、留言討論、觀看、下載。



### 跟 GitHub 相關的指令



##### `git push` : 推上去



把本地的版本同步到 GitHub 這個雲端。



##### `git pull` : 拉下來



同理把雲端的版本同步到本地。



##### `git clone` : 拷下來



在 GitHub 上看到需要的東西可以用 `git clone` 拷貝。



### 結論

學會上面這些基本指令菜哥你應該會用 Git 來做版本控制了，加油 !