FROM nginx:1.25.1

WORKDIR /usr/share/nginx/html

RUN mkdir /dist
COPY ./default.conf /etc/nginx/conf.d/default.conf

RUN mkdir /etc/nginx/ssl

EXPOSE 443

CMD ["nginx", "-g", "daemon off;"]