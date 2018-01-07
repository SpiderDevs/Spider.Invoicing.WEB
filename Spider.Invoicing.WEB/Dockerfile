# Create image based on the official Node 6 image from dockerhub
FROM node:8.9

RUN chown -R node:node /usr/local/lib/node_modules \
  && chown -R node:node /usr/local/bin  
USER node  
RUN npm install -g @angular/cli@1.4.5
USER root

# Create a directory where our app will be placed
RUN mkdir -p /usr/src/app

# Change directory so that our commands run inside this new directory
WORKDIR /usr/src/app

# Copy dependency definitions
COPY package.json /usr/src/app

# Install dependecies
RUN npm install

# Get all the code needed to run the app
COPY . /usr/src/app

# Expose the port the app runs in
EXPOSE 4200

# Serve the app
CMD ["ng", "serve", "-H", "0.0.0.0", "--env=uat"]