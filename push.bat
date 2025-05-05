@echo off
cd /d "C:\Users\KSK\Desktop\LINE WORKSアプリ\一般家庭版計算アプリ"

echo -------------------------
echo GitHub Pages 更新開始…
echo -------------------------

git add .
git commit -m "GitHub Pages update"
git push origin main

echo -------------------------
echo 完了！GitHubを確認してね
echo -------------------------
pause