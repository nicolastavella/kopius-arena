FROM node:lts-alpine AS development

ENV NODE_ENV development
# Add a work directory
WORKDIR /app
# Expose port
EXPOSE 3000
# Start the app
CMD [ "yarn", "start" ]