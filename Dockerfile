FROM node:18.15.0

COPY . /app

WORKDIR /app

RUN npm install && npm run build

EXPOSE 3005

CMD ["node", "server.js"]
