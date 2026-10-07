FROM node:18-alpine

WORKDIR /app

COPY package*.json ./
RUN npm install --production

COPY . .

EXPOSE 3000

VOLUME ["/app/data", "/app/uploads"]

CMD ["node", "server.js"]
