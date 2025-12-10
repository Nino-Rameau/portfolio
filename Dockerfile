FROM node:18-bullseye AS builder

WORKDIR /app

COPY package*.json ./
RUN npm install

COPY . .
RUN npm run build


FROM node:20-bullseye

WORKDIR /app

RUN npm install -g serve

COPY --from=builder /app/build ./build

EXPOSE 8080

CMD ["serve", "-s", "build", "-l", "8080"]