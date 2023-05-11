FROM node:18.16.0-alpine3.17
ENV PATH /app/node_modules/.bin:$PATH
RUN apk add bash \
    && rm -rf /var/cache/apk/*
WORKDIR /app
COPY package* ./
RUN npm install
COPY . .
CMD ["npm","run","start"]