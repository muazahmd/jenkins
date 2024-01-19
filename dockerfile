FROM node:20-alpine

RUN npm install -g nodemon

WORKDIR /app

# Copy just the package.json and package-lock.json files
COPY package*.json ./

RUN npm install

# Copy the rest of the application code
COPY . /app

EXPOSE 9001

# ENTRYPOINT ["nodemon", "/app/index.js"]  

CMD ["npm", "start"]
