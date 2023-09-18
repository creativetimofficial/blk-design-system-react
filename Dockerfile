FROM node:20.6.1-bullseye
ENV PATH /app/node_modules/.bin:$PATH
RUN npm update -g npm
WORKDIR /app
COPY package* ./
RUN npm ci
COPY . .
RUN npm run build
CMD ["npm","run","start"]
EXPOSE 3000
