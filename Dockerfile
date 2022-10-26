FROM node:18.9.1

WORKDIR /e-recycle-service-gateway 

COPY package.json package.json

RUN npm install

COPY . . 

ENV PORT=3001

EXPOSE 3001

CMD ["npm", "run", "prodStart"]