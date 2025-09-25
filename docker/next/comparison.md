# Dockerfile Comparison: prod vs. example

This document compares two Dockerfiles used for Dockerizing a Next.js application:  
- **`dockerfile.prod`**: Designed for production with a focus on simplicity and pnpm.  
- **`dockerfile.example`**: A flexible example from Vercel’s Next.js repository, supporting multiple package managers and optimized builds.  


## Key Differences

| **Aspect**             | **dockerfile.prod**                    | **dockerfile.example**                                 |
|------------------------|----------------------------------------|--------------------------------------------------------|
| **Base Image**         | `node:18-alpine` with amd64 specified  | `node:18-alpine` without architecture lock             |
| **Dependencies**       | Uses **pnpm** exclusively              | Supports `yarn`, `npm`, and `pnpm` based on lock files |
| **Build Process**      | Direct build using pnpm                | Uses output file tracing for optimized builds          |
| **User Permissions**   | Uses `nextjs` user (non-root)          | Uses `nextjs` user with `.next` folder permission set  |
| **Production Run**     | Runs with `pnpm start`                 | Runs with `node server.js`                             |
| **Port & Hostname**    | Default port configuration             | Exposes port 3000 and sets hostname to `0.0.0.0`       |
| **Telemetry Control**  | Not mentioned                          | Can disable telemetry during build and runtime         |
| **Performance Focus**  | Basic production setup                 | Uses output file tracing for smaller image size        |


## Summary of Use Cases

- **`dockerfile.prod`**:  
  - Ideal for **simple production deployments**.  
  - Focuses on **pnpm** as the package manager and offers a straightforward approach.

- **`dockerfile.example`**:  
  - Useful for **flexible builds and testing environments**.  
  - Optimized for **smaller image sizes** using output tracing and supports multiple package managers.


## Example Commands for Each Dockerfile

### dockerfile.prod
```bash
docker build -t nextjs-prod -f dockerfile.prod .
docker run -p 3000:3000 nextjs-prod
```

### dockerfile.example
```bash
docker build -t nextjs-example -f dockerfile.example .
docker run -p 3000:3000 nextjs-example
```


## Conclusion
Both Dockerfiles serve different purposes:  
- **`dockerfile.prod`**: Simple and production-focused, using pnpm only.  
- **`dockerfile.example`**: Flexible and optimized, useful for various development and production setups.

Choose the Dockerfile that best fits your needs based on the environment and project requirements.
