### **NestJS + Docker + MongoDB Setup Guide**

---

### **1. Overview**
This guide provides a step-by-step approach to building a NestJS application with Docker, including setup for both **development** and **production** environments. The setup also integrates **MongoDB** for database management, using **Docker-Compose** to manage multiple services efficiently.

---

### **2. Resources**
- **Optimizing NestJS with Docker for Production:**  
  [https://www.tomray.dev/nestjs-docker-production](https://www.tomray.dev/nestjs-docker-production)

- **Setting up Docker and Docker-Compose for Nest.js and MongoDB:**  
  [https://pallavbh23.medium.com/setting-up-docker-and-docker-compose-for-nest-js-and-mongodb-1cd972d97ef7](https://pallavbh23.medium.com/setting-up-docker-and-docker-compose-for-nest-js-and-mongodb-1cd972d97ef7)

---

### **3. Dockerfile for NestJS: Optimized for Production**

#### **Development Stage:**
```dockerfile
FROM node:18-alpine AS development

WORKDIR /usr/src/app

COPY --chown=node:node package*.json ./
RUN npm ci

COPY --chown=node:node . .

USER node
```

#### **Build Stage:**
```dockerfile
FROM node:18-alpine AS build

WORKDIR /usr/src/app

COPY --chown=node:node package*.json ./
COPY --from=development /usr/src/app/node_modules ./node_modules
COPY --chown=node:node . .

RUN npm run build
ENV NODE_ENV production

RUN npm ci --only=production && npm cache clean --force

USER node
```

#### **Production Stage:**
```dockerfile
FROM node:18-alpine AS production

WORKDIR /usr/src/app

COPY --from=build /usr/src/app/node_modules ./node_modules
COPY --from=build /usr/src/app/dist ./dist

CMD [ "node", "dist/main.js" ]
```

---

### **4. Alternate Dockerfile with MongoDB Integration**

```dockerfile
FROM node:12.19.0-alpine3.9 AS development

WORKDIR /usr/src/app

COPY package*.json ./
RUN npm install glob rimraf
RUN npm install --only=development

COPY . .
RUN npm run build

FROM node:12.19.0-alpine3.9 AS production

ARG NODE_ENV=production
ENV NODE_ENV=${NODE_ENV}

WORKDIR /usr/src/app

COPY package*.json ./
RUN npm install --only=production

COPY . .
COPY --from=development /usr/src/app/dist ./dist

CMD ["node", "dist/main"]
```

---

### **5. Docker-Compose Configuration**

#### **docker-compose.yaml:**
```yaml
version: '3.3'
services:
  dev:
    container_name: nestjs_api_dev
    image: nestjs-api-dev:1.0.0
    build:
      context: .
      dockerfile: ./Dockerfile
    command: npm run start:dev
    ports:
      - 3000:3000
      - 3001:9229
    networks:
      - nesjs-network
    depends_on:
      - mongodb
    volumes:
      - .:/usr/src/app
      - /usr/src/app/node_modules
    restart: unless-stopped

  mongodb:
    image: mongo:latest
    container_name: mongodb
    volumes:
      - ./database:/data/db
    ports:
      - 27017:27017
    networks:
      - nesjs-network
    restart: always

  prod:
    container_name: nestjs_api_prod
    image: nestjs-api-prod:1.0.0
    build:
      context: .
      dockerfile: ./Dockerfile
    command: npm run start:prod
    ports:
      - 3000:3000
      - 9229:9229
    networks:
      - nesjs-network
    depends_on:
      - mongodb
    volumes:
      - .:/usr/src/app
      - /usr/src/app/node_modules
    restart: unless-stopped

networks:
  nesjs-network:
    driver: bridge
```

---

### **6. Running Docker-Compose**

To start the services in **development** or **production** mode:

```bash
# Development mode
sudo docker-compose up dev

# OR

# Production mode
sudo docker-compose up prod
```

---

### **7. Key Improvements and Considerations**

1. **Multi-Stage Dockerfile:**  
   Separates development, build, and production stages to create smaller, optimized images for production.

2. **Docker-Compose for Multi-Service Setup:**  
   Easily manage **NestJS** and **MongoDB** services using `docker-compose`.

3. **Optimized Dependencies:**  
   Uses `npm ci` to install only the necessary dependencies for each environment (development and production).

4. **MongoDB Integration:**  
   The Docker-Compose setup ensures that the NestJS API will wait for the MongoDB service to be ready using `depends_on`.

---

### **8. Conclusion**

This setup provides an efficient and scalable way to develop, build, and deploy a **NestJS application** with **MongoDB** using **Docker** and **Docker-Compose**. It ensures that the application runs smoothly across both development and production environments while keeping the image size optimized.
