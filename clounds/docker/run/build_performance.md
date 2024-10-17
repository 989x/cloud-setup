### **Troubleshooting Slow Docker Build Times**

---

### **1. Overview**  
This guide provides methods to diagnose and resolve slow Docker build processes. If a build that normally takes 200 seconds now takes over 600 seconds, it suggests potential issues with network dependencies, caching, or Dockerfile optimization.

---

### **2. Commands and Examples**

#### **1. Identify the Step Causing Delay**  
Based on the following log, the command consuming the most time is:

```bash
❯ docker build -t git.inet.co.th:5555/inet_cms/inet_cms_frontend/uat:v0.0.46 . --no-cache
[+] Building 620.5s (5/19)                                                           docker:desktop-linux
 => [internal] load build definition from Dockerfile                                                 0.0s
 => => transferring dockerfile: 1.12kB                                                               0.0s
 => [internal] load metadata for docker.io/library/node:18-alpine                                    1.8s
 => [internal] load .dockerignore                                                                    0.0s
 => => transferring context: 447B                                                                    0.0s
 => CACHED [base 1/3] FROM docker.io/library/node:18-alpine@sha256:02376a266c84acbf45bd19440e08e48b  0.0s
 => [internal] load build context                                                                    0.1s
 => => transferring context: 86.42kB                                                                 0.1s
 => [base 2/3] RUN apk add --no-cache g++ make py3-pip libc6-compat                                618.6s
 => => # (8/40) Installing isl26 (0.26-r1)
 => => # (9/40) Installing mpfr4 (4.2.1-r0)
 => => # (10/40) Installing mpc1 (1.3.1-r1)
 => => # (11/40) Installing gcc (13.2.1_git20240309-r0)
 => => # (12/40) Installing musl-dev (1.2.5-r0)
 => => # (13/40) Installing g++ (13.2.1_git20240309-r0)
```

The delay occurs in the `RUN apk add` step, indicating that the installation of dependencies may be the bottleneck.

---

#### **2. Check Network Connectivity**  
Network issues may cause delays when installing dependencies. Verify that your internet connection is stable:

```bash
ping google.com
```

Alternatively, try setting a different mirror to speed up the package download:

```bash
RUN apk add --no-cache --repository=http://dl-cdn.alpinelinux.org/alpine/v3.18/main g++ make py3-pip libc6-compat
```

---

#### **3. Enable Caching**  
Although the `--no-cache` flag is used, it may not be necessary if the Dockerfile rarely changes. Rebuild without the `--no-cache` flag to use cached layers:

```bash
docker build -t git.inet.co.th:5555/inet_cms/inet_cms_frontend/uat:v0.0.46 .
```

---

#### **4. Optimize the Dockerfile Using Multi-stage Builds**  
Reduce the build time by using multi-stage builds to limit dependencies to only what is required for the final image:

```Dockerfile
FROM node:18-alpine AS build
RUN apk add --no-cache g++ make py3-pip libc6-compat
# Install dependencies and build the app

FROM node:18-alpine AS final
COPY --from=build /app /app
CMD ["node", "/app/index.js"]
```

---

#### **5. Minimize Docker Context Size**  
Ensure that only necessary files are included in the build context. Review the `.dockerignore` file to exclude unnecessary files:

```bash
# Example .dockerignore
node_modules
.git
*.log
```

---

#### **6. Use Docker BuildKit to Improve Performance**  
Docker BuildKit can speed up the build process with parallel execution and caching improvements:

```bash
DOCKER_BUILDKIT=1 docker build -t git.inet.co.th:5555/inet_cms/inet_cms_frontend/uat:v0.0.46 .
```

---

### **3. Conclusion**  
If the build process is still slow after following these steps, check your machine’s resources (CPU, RAM, disk space) or Docker’s resource allocation. Additionally, ensure that no network proxies or firewalls are interfering with the package download. 

By identifying bottlenecks in the build process and applying the above optimizations, you can significantly reduce build times and improve efficiency.
