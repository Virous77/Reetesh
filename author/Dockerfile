FROM node:18-alpine
WORKDIR /app

COPY  yarn.lock /app

RUN yarn

COPY . /app

ENV NODE_ENV=development

EXPOSE 3001

CMD [ "yarn", "run", "dev" ]
