FROM node:lts-alpine3.15 AS build

ENV NODE_ENV production
WORKDIR /usr/src/app
COPY package*.json /usr/src/app/

RUN npm ci --only=production


FROM node:lts-alpine3.15 AS final
RUN apk add dumb-init
RUN apk --no-cache add curl
ENV NODE_ENV production
RUN mkdir /usr/src/
RUN mkdir /usr/src/app
RUN mkdir /usr/src/app/logs
RUN chown node:node /usr/src/app/logs

USER node

WORKDIR /usr/src/app

COPY --chown=node:node --from=build /usr/src/app/node_modules /usr/src/app/node_modules
COPY --chown=node:node . /usr/src/app

EXPOSE 10000

CMD ["dumb-init", "node", "index.js"]
