# Use the official Node.js image.
FROM node:22.5-alpine

# # Base imag
# FROM node:14-alpine
# Set working directory
WORKDIR /app
# Copy package.json and package-lock.json
COPY package*.json ./
# Install dependencies
RUN npm install

# # Install dependencies
# RUN npm ci
# Copy the rest of the application
COPY . .
# Build the React application
RUN npm run build

# Copy the entry point script to the container
COPY docker-entrypoint.sh /docker-entrypoint.sh

# Make the entry point script executable
RUN chmod +x /docker-entrypoint.sh

# Set the entry point to the script
ENTRYPOINT ["/docker-entrypoint.sh"]


# Serve the application using a static file server
RUN npm install -g serve
CMD ["serve", "-s", "build"]
# # Expose port 4000
# EXPOSE 4000