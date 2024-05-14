# Build Stage
FROM node:lts-bullseye-slim as builder

RUN mkdir /app
WORKDIR /app
COPY /src/ .
RUN npm install && npm run build

# Deploy Stage
FROM nginxinc/nginx-unprivileged:stable-alpine-slim
WORKDIR /usr/share/nginx/html
RUN rm -rf ./*
COPY --from=builder /app/build .

ENTRYPOINT [ "nginx", "-g", "daemon off;" ]