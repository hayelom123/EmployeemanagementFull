FROM node:14.17-alpine3.10

RUN mkdir -p /home/node/app &&\
    chown -R node:node /home/node/app
WORKDIR /home/node/app

RUN chgrp -R 0 /home/node/app &&\
    chmod -R g+rwX /home/node/app

COPY package*.json /home/node/app/
USER 1000
RUN npm install

COPY --chown=node:node . /home/node/app
EXPOSE 9000
ENV clkey=clinickey
ENV Host=0.0.0.0
ENV port: 9000
CMD ["npm","start"]
