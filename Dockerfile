FROM node:10.15.0
COPY src /app
WORKDIR /app
ENV CR_SWAGGER_INTERFACE_PORT=8285
RUN npm install
CMD npm start
