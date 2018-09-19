FROM node:8.12.0
EXPOSE 3030

RUN npm install -g yarn

# set working directory
RUN mkdir /usr/src/app
WORKDIR /usr/src/app

COPY ./iPizzaWeb .
RUN yarn
RUN yarn run build:prod


ENTRYPOINT yarn start
