#!/usr/bin/env sh

# 确保脚本抛出遇到的错误
set -e

# 生成静态文件
npm run docs:build

# 进入生成的文件夹
cd docs/.vuepress/dist

# 部署到nginx服务器
scp -r ./* root@ecs-master:/root/vuepress

# 如果是发布到自定义域名
# echo 'blog.qianps.cn' > CNAME

git init
git add -A
git commit -m 'deploy'

# 如果发布到 https://<USERNAME>.github.io
git push -f git@github.com:qianps/qianps.github.io.git master

# 如果发布到 https://<USERNAME>.github.io/<REPO>
# git push -f git@github.com:qianps/blog.git master:gh-pages

cd -

