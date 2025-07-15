# Stage 1: Build Angular app
FROM node:20 AS builder
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build --prod

# Stage 2: Serve with Nginx
FROM nginx:stable-alpine
COPY --from=builder /app/dist/bistropulse/browser /usr/share/nginx/html
