# Use the official Node.js image
FROM node:latest

# Set the working directory inside the container
WORKDIR /usr/src/app

# Copy package.json and package-lock.json into the container
COPY package*.json ./

# Install dependencies (including dev dependencies like nodemon)
RUN npm install

# Copy the rest of the application files into the container
COPY . .

# Expose port 3000
EXPOSE 3000

# Use nodemon to run the app (for development mode)
CMD ["npm", "run", "dev"]  # Run the app using the dev script to use nodemon
