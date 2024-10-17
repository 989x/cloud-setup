### **Fixing pnpm ci Issue in Docker**

---

### **1. Overview**  
This guide addresses the issue with the `pnpm ci` command in Docker, which is not implemented yet. Instead, we will use an alternative approach by replacing `pnpm ci` with `pnpm install --frozen-lockfile --prod`. This ensures that dependencies are installed correctly in production environments using `pnpm-lock.yaml` without making modifications.

---

### **2. Problem**  
When attempting to run `pnpm ci` inside a Docker container, the following error is encountered:

```bash
ERR_PNPM_CI_NOT_IMPLEMENTED  The ci command is not implemented yet
```

This happens because `pnpm` does not support the `ci` command (unlike `npm` or `yarn`). Therefore, we need to modify the Dockerfile to ensure the proper installation of dependencies.

---

### **3. Solution: Dockerfile Example**

Here is a working example of the Dockerfile, replacing `pnpm ci` with the recommended alternative.

```Dockerfile
# Use the platform option to specify amd64 architecture
FROM --platform=linux/amd64 node:18-alpine as base
RUN apk add --no-cache g++ make py3-pip libc6-compat

# Install pnpm globally
RUN npm install -g pnpm

WORKDIR /app
COPY package*.json ./
EXPOSE 3000

FROM base as builder
WORKDIR /app

COPY . .

# Install dependencies and build the project
RUN pnpm install
RUN pnpm run build

FROM base as production
WORKDIR /app

ENV NODE_ENV=production

# Install only production dependencies
RUN pnpm install --frozen-lockfile --prod

RUN addgroup -g 1001 -S nodejs
RUN adduser -S nextjs -u 1001
USER nextjs

# Copy necessary files from the builder stage
COPY --from=builder --chown=nextjs:nodejs /app/.next ./.next
COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/package.json ./package.json

# Copy static files
COPY --from=builder /app/public/font ./public/font
COPY --from=builder /app/public/icons ./public/icons
COPY --from=builder /app/public/images ./public/images

# Start the application in production mode
CMD pnpm start
```

---

### **4. Explanation**

- **`pnpm install --frozen-lockfile --prod`**:  
  - Ensures dependencies are installed according to `pnpm-lock.yaml` without modifications.
  - Only installs production dependencies to reduce image size and improve performance.

- **Multi-Stage Build**:  
  - **Builder Stage**: Installs all dependencies and builds the project.
  - **Production Stage**: Copies necessary files and installs only production dependencies.

---

### **5. Commands to Build and Run**

1. **Build Docker Image:**
   ```bash
   docker build -t my-nextjs-app:latest . --no-cache
   ```

2. **Run the Docker Container:**
   ```bash
   docker run --platform linux/amd64 -d -p 3000:3000 my-nextjs-app:latest
   ```

3. **Check Running Containers:**
   ```bash
   docker ps
   ```

---

### **6. Troubleshooting**

- **Port Already in Use:**  
  If you encounter an error saying the port is already allocated, use another port:
  ```bash
  docker run -d -p 3001:3000 my-nextjs-app:latest
  ```

- **Platform Mismatch Warning:**  
  If you see a platform mismatch warning, ensure you use:
  ```bash
  docker run --platform linux/amd64 ...
  ```

---

### **7. Resources**

- **Official pnpm Documentation:**  
  [https://pnpm.io](https://pnpm.io)

- **Understanding Multi-Stage Docker Builds:**  
  [https://docs.docker.com/develop/develop-images/multistage-build](https://docs.docker.com/develop/develop-images/multistage-build)
