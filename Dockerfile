
FROM node:18-alpine

# Встановіть робочу директорію
WORKDIR /app

# Скопіюйте файли package.json та package-lock.json
COPY package*.json ./

# Встановіть залежності
RUN npm install

# Скопіюйте всі файли проєкту до контейнера, включаючи .env
COPY . .

# Виставте потрібний порт (наприклад, 3000)
EXPOSE 3333

# Запуск додатку
CMD ["npm", "start"]
