FROM node:18-alpine

WORKDIR /app

COPY package*.json ./
RUN npm install

COPY . .

COPY wait-for-kafka.sh .
RUN chmod +x wait-for-kafka.sh

EXPOSE 3000

CMD ["./wait-for-kafka.sh"]
