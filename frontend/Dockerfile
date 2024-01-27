FROM node:20

WORKDIR /app

COPY package.json /app

RUN yarn 

COPY . /app

EXPOSE 3000

CMD ["yarn", "dev"]