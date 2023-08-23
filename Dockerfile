FROM node:lts

WORKDIR /var/nuxt-surreal-todo

COPY ./package*.json /var/nuxt-surreal-todo

RUN npm install && npm cache clean --force

COPY . .

ENV PATH ./node_modules/.bin/:$PATH

EXPOSE 3000

ENV NUXT_HOST=0.0.0.0
ENV NUXT_PORT=3000

CMD ["npm", "run", "dev"]
