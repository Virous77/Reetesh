FROM node:18-alpine

WORKDIR /app

COPY package.json /app

RUN yarn

COPY . /app

EXPOSE 4000

CMD [ "yarn", "run", "dev" ]
