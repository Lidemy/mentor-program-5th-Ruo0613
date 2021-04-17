## 交作業流程

1. 連線至 [GitHub classroom](https://classroom.github.com/a/yNNrtNyW)

2. 用自己的 github 帳號建立 GitHub Repo

3. 把 GitHub classroom 的檔案 clone 下來 : 

   `git clone https://github.com/Lidemy/mentor-program-5th-Ruo0613.git`

4. 開始寫作業前 !!**切記**!! 新建一個 branch :  `git branch week1`

5. 在新建的分支上開始作業 : `git checkout week1`

6. 如果有新增檔案記得加進 git : `git add new`

7. 作業寫到一個段落後可以用 `git status` 來確認自己改過那些檔案

8. 可以再用 `git diff` 來確認修改的內容

9. 確認過再用 `git commit -am "版本說明"` 來提交改動

10. 再用 `git push orign week1` 把作業推到 github

11. 上 git hub 確認作業的推送狀況

12. 等到完成並推完所有作業後，點選 **Compare & pull request** 

    之後把網址複製

13. 進入學習系統，把網址貼上上繳作業

#### 助教改完作業並 merge 之後:

1. 切換到原本的 branch : `git checkout master`
2. 把最新的改動拉到本地：`git pull origin master`
3. 刪除已經 merge 的 branch：`git branch -d week1`

