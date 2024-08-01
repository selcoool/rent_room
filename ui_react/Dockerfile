
# Use the official Node.js 22.5 image as the base image for building
FROM node:22.5-alpine AS build

# Set the working directory
WORKDIR /app

# Copy package.json and package-lock.json to the container
COPY package.json package-lock.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application code to the container
COPY . .

# Build the React application
RUN npm run build

# Use the official Node.js 22.5 image as the base image for serving
FROM node:22.5-alpine

# Set the working directory
WORKDIR /app

# Copy the build output from the previous stage
COPY --from=build /app/build /app/build

# Install serve package to serve the build
RUN npm install -g serve

# Expose port 3000 for the server
EXPOSE 7000

# Start the application on port 3000
CMD ["serve", "-s", "build", "-l", "7000"]





















# # Use the official Node.js image.
# FROM node:22.5-alpine

# # # Base imag
# # FROM node:14-alpine
# # Set working directory
# WORKDIR /app
# # Copy package.json and package-lock.json
# COPY package*.json ./
# # Install dependencies
# RUN npm install

# # # Install dependencies
# # RUN npm ci
# # Copy the rest of the application
# COPY . .
# # Build the React application
# RUN npm run build

# # Copy the entry point script to the container
# COPY docker-entrypoint.sh /docker-entrypoint.sh

# # Make the entry point script executable
# RUN chmod +x /docker-entrypoint.sh

# # Set the entry point to the script
# ENTRYPOINT ["/docker-entrypoint.sh"]


# # Serve the application using a static file server
# RUN npm install -g serve
# CMD ["serve", "-s", "build"]
# # # Expose port 4000
#  EXPOSE 4000