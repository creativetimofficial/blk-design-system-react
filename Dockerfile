FROM node:21.2.0-alpine3.18
ENV PATH /app/node_modules/.bin:$PATH
RUN npm install -g npm@10.2.4 && \
    apk update && \
    apk add --no-cache python3 build-base
WORKDIR /app
COPY package* ./
RUN npm ci
COPY . .
RUN npm run build
CMD ["npm","run","start"]
EXPOSE 3000
