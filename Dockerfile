# Use official Node.js LTS image
FROM node:20-alpine

# Set working directory
WORKDIR /kaur_muskanpreet_ui_garden_build_checks

# Copy package.json and package-lock.json
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the app
COPY . .

# Build the app
RUN npm run build

# Expose port for React dev server (if using dev)
EXPOSE 8018

# Default command to run the app
CMD ["sh", "-c", "PORT=8018 npm start"]
