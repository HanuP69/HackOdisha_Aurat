#!/bin/bash

# Start Nginx in the background
nginx -g "daemon off;" &

# Start the Python backend
uvicorn backend.main:app --host 0.0.0.0 --port 8000
