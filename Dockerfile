# Step 1: Use Nginx as base image
FROM nginx:alpine

# Step 2: Copy build output to Nginx HTML folder
COPY ./dist/todo-app /usr/share/nginx/html

# Step 3: Remove default Nginx config and add custom config (optional)
# COPY nginx.conf /etc/nginx/conf.d/default.conf

# Step 4: Expose port 80
EXPOSE 80

# Step 5: Start Nginx server
CMD ["nginx", "-g", "daemon off;"]
