FROM node:6-slim
# Create app directory

# Install app dependencies
# A wildcard is used to ensure both package.json AND package-lock.json are copied
# where available (npm@5+)
COPY package*.json ./

RUN npm install -g gulp@3.8.8 && npm install

# If you are building your code for production
# RUN npm install --only=production

EXPOSE 3030
CMD gulp --production