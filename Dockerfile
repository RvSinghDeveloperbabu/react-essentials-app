FROM node:latest
RUN mkdir /react
WORKDIR /react
COPY public/ .
COPY src/ .
COPY package.json .
RUN npm install
EXPOSE 3000
CMD ["npm", "run", "dev"]