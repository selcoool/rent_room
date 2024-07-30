FROM node:22.5-alpine

# # Base image
# FROM node:14-alpine
# Set working directory
WORKDIR /app
# Copy package.json and package-lock.json
COPY package*.json ./
# Install dependencies
RUN npm install
# Copy the rest of the application
COPY . .


# Copy the entrypoint script to the root of the container filesystem
COPY docker-entrypoint.sh /docker-entrypoint.sh

# Make the entrypoint script executable
RUN chmod +x /docker-entrypoint.sh

# Set the entrypoint script
ENTRYPOINT ["/docker-entrypoint.sh"]


# Start the Node.js application
CMD ["npm", "start"]
# # Expose port 6000
# EXPOSE 6000