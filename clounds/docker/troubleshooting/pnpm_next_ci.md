# Fixing pnpm ci Issue in Docker

This guide addresses the issue with the `pnpm ci` command in Docker, which is not implemented yet. Instead, use `pnpm install --frozen-lockfile --prod`. This installs dependencies according to `pnpm-lock.yaml` without modifications and limits to production deps for smaller images.


## Problem

When attempting to run `pnpm ci` inside a Docker container, you may see:

```bash
ERR_PNPM_CI_NOT_IMPLEMENTED  The ci command is not implemented yet
```

This occurs because `pnpm` does not support the `ci` command (unlike `npm` or `yarn`).


## Solution: Dockerfile Example

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


## Explanation

### pnpm install --frozen-lockfile --prod

* Uses the exact versions from `pnpm-lock.yaml`.
* Skips dev dependencies to reduce image size and attack surface.

### Multi-Stage Build

* **builder**: installs all deps and compiles the app.
* **production**: installs only prod deps, copies compiled output from builder.


## Commands to Build and Run

### Build Docker Image

```bash
docker build -t my-nextjs-app:latest . --no-cache
```

### Run the Docker Container

```bash
docker run --platform linux/amd64 -d -p 3000:3000 my-nextjs-app:latest
```

### Check Running Containers

```bash
docker ps
```


## Troubleshooting

### Port Already in Use

Use another host port:

```bash
docker run -d -p 3001:3000 my-nextjs-app:latest
```

### Platform Mismatch Warning

If your host is ARM (e.g., Apple Silicon) and the image is AMD64:

```bash
docker run --platform linux/amd64 -d -p 3000:3000 my-nextjs-app:latest
```


## Resources

* pnpm docs: [https://pnpm.io](https://pnpm.io)
* Multi-stage builds: [https://docs.docker.com/develop/develop-images/multistage-build](https://docs.docker.com/develop/develop-images/multistage-build)
