FROM node:20-alpine as builder

RUN mkdir -p /usr/src/nextjs-test

WORKDIR /usr/src/nextjs-test

COPY package.json package.json

RUN npm install

COPY . .

RUN npm run build

FROM nginx:1.25.3-alpine as production

# pm2 and proxy in middle

ENV NODE_ENV production

RUN rm -rf /usr/share/nginx/html/*

COPY --from=builder /usr/src/nextjs-test/.next /usr/share/nginx/html

COPY nginx.conf /etc/nginx/conf.d/default.conf

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]