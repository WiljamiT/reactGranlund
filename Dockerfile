FROM node:16 AS build

WORKDIR /app

COPY package*.json ./

RUN npm install

COPY . .

RUN npm run build

FROM nginx:alpine

COPY --from=build /app/build /usr/share/nginx/html

EXPOSE 80

ENV REACT_APP_API_URL=http://localhost:8080

CMD ["nginx", "-g", "daemon off;"]
