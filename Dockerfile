# Use the official Node.js image
FROM node:latest

# Set the working directory
WORKDIR /usr/src/app

# Copy package.json and package-lock.json 
COPY package*.json ./

# Install dependencies (if any)
RUN npm install

# Copy the rest of the application files
COPY . .

# Expose the port (if applicable)
EXPOSE 3000

# Command to run the app
CMD ["node", "app.js"]
