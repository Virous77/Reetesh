FROM node:18-alpine
WORKDIR /app

COPY  yarn.lock /app

RUN yarn
COPY entrypoint.sh /entrypoint.sh
RUN chmod +x /entrypoint.sh
ENTRYPOINT ["/entrypoint.sh"]
COPY . /app

EXPOSE 5173

CMD [ "yarn", "run", "dev" ]
