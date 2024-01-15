FROM node:18-alpine


WORKDIR /app

COPY  package.json  /app

RUN yarn
RUN npm i -g next
COPY . /app

RUN yarn add next-contentlayer


ENV NODE_ENV=development

EXPOSE 3000

CMD ["yarn", "run", "dev"]