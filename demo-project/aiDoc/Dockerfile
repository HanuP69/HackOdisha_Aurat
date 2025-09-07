# ----- Stage 1: Build React Frontend -----
FROM node:18-alpine AS frontend-builder
WORKDIR /frontend

# Install frontend dependencies
COPY frontend/package*.json ./
RUN npm install

# Copy all frontend code
COPY frontend/ ./

# Build React app
RUN npm run build

# ----- Stage 2: Backend + Nginx -----
FROM python:3.10-slim

# Install system dependencies + Nginx
RUN apt-get update && \
    apt-get install -y --no-install-recommends \
        nginx wget unzip libasound2 libx11-6 && \
    apt-get clean && rm -rf /var/lib/apt/lists/*

# Install Rhubarb Lip Sync
RUN wget https://github.com/DanielSWolf/rhubarb-lip-sync/releases/download/v1.14.0/Rhubarb-Lip-Sync-1.14.0-Linux.zip -O rhubarb.zip \
    && unzip rhubarb.zip \
    && mv Rhubarb-Lip-Sync-1.14.0-Linux/rhubarb /usr/local/bin/rhubarb \
    && mv Rhubarb-Lip-Sync-1.14.0-Linux/res /usr/local/bin/res \
    && chmod +x /usr/local/bin/rhubarb \
    && rm rhubarb.zip \
    && rm -rf Rhubarb-Lip-Sync-1.14.0-Linux

ENV PATH="/usr/local/bin:$PATH"

# Backend workdir
WORKDIR /app

# Install Python dependencies
COPY backend/requirements.txt ./requirements.txt
RUN pip install --no-cache-dir -r requirements.txt

# Copy backend code
COPY backend/ ./backend

# Copy frontend build into Nginx html folder
COPY --from=frontend-builder /frontend/build /usr/share/nginx/html

# Copy Nginx config
# RUN rm /etc/nginx/conf.d/default.conf
COPY frontend/nginx.conf /etc/nginx/conf.d/default.conf

# Copy startup script
COPY start.sh /start.sh
RUN chmod +x /start.sh

# Expose ports (80 for frontend, 8000 for backend)
EXPOSE 80 8000

# Start both services
CMD ["/start.sh"]
