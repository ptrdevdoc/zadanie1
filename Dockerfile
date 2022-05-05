# Specify a base image
FROM node:alpine
#Etykieta informujaca o autorze z krótkim opisem
LABEL maintainer="Piotr Piwoński"
#Ustawienie sciezki roboczej
WORKDIR /usr/src/app
#Dodanie plików servera wraz z ich instalacja
COPY package.json server.js ./
RUN npm install
#Wystawienie portu 8080 na nasluchiwanie
EXPOSE 8080
#Uruchomienie naszego serwera apache wraz z naszą stroną
CMD [ "node", "server.js" ]
