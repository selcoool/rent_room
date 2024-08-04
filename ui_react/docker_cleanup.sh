#!/bin/bash

# Print a message
echo "Starting Docker cleanup..."

docker system prune -a -f

# # Remove dangling images
# docker image prune -f

# # Remove all unused images
# docker image prune -a -f

# # Remove stopped containers
# docker container prune -f

# # Remove unused networks
# docker network prune -f

# # Remove unused volumes
# docker volume prune -f

# Optionally, you can remove everything (including volumes) with the following command:
# docker system prune -a --volumes -f

echo "Docker cleanup completed."
