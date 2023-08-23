FROM node:18 as builder
WORKDIR /app
COPY package.json ./
COPY yarn.lock ./
COPY ./ ./
RUN yarn install
CMD ["yarn", "run", "start"]