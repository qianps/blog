docker run -itd \
-p 443:443 \
-v /root/ssl:/etc/nginx/ssl \
-v /root/vuepress:/usr/share/nginx/html/dist \
--name blog-system \
qianps/blog