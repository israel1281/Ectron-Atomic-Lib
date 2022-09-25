FROM node:16-alpine

RUN mkdir /ectron-atomic-lib

WORKDIR /ectron-atomic-lib

COPY package.json /ectron-atomic-lib/

RUN npm install

COPY . /ectron-atomic-lib/

RUN npm run build

CMD [ "npm", "start" ]