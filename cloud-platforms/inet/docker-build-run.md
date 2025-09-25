# Docker Registry, Build, Push, Pull & Run Guide

This single guide consolidates:
1) Building & pushing images  
2) Logging in, pulling & running images  
3) Troubleshooting slow Docker builds

It’s tailored for INET’s private registry (e.g. `git.inet.co.th:5555`) and common on-prem constraints in Thailand (private networks, mirrors, custom CA, proxies).


## Prerequisites

- Docker installed on your workstation or CI runner.
- Access to INET’s Docker registry (e.g., `git.inet.co.th:5555`).
- Credentials for `docker login`.
- (If applicable) Corporate proxy and/or custom CA installed.

> INET TLS notes:
> - If your registry uses a custom CA:
>   - Place the CA at: `/etc/docker/certs.d/git.inet.co.th:5555/ca.crt` then restart Docker.
> - If your registry is **HTTP** or has non-public certs (not recommended), add to `/etc/docker/daemon.json`:
>   ```json
>   {
>     "insecure-registries": ["git.inet.co.th:5555"]
>   }
>   ```
>   Then restart Docker.


## Log in to INET Registry

```bash
docker login git.inet.co.th:5555
# Enter username and password when prompted
```


## Build & Tag the Docker Image

Run this in the project root where your `Dockerfile` lives.

```bash
docker build -t git.inet.co.th:5555/inet_cms/inet_cms_frontend/uat:v0.0.17 .
```

* `-t` tags the resulting image.
* Use a clear path and tag (e.g., `project/component/env:version`).

**Example (another project):**

```bash
docker build -t git.inet.co.th:5555/kanya.lo/cast_survay_admin_fontend/uat:v0.03 .
```


## Push the Docker Image

```bash
docker push git.inet.co.th:5555/inet_cms/inet_cms_frontend/uat:v0.0.17
```

**Example (another project):**

```bash
docker push git.inet.co.th:5555/kanya.lo/cast_survay_admin_fontend/uat:v0.03
```

**Verify locally (optional):**

```bash
docker images
```


## Pull & Run the Docker Image

**Pull:**

```bash
docker pull git.inet.co.th:5555/kanya.lo/cast_survay_admin_fontend/uat:v0.03
```

**Run (map host\:container ports):**

```bash
docker run -d -p 8080:80 git.inet.co.th:5555/kanya.lo/cast_survay_admin_fontend/uat:v0.03
```

* `-d` runs in background.
* Change `8080` if occupied (e.g., `-p 8081:80`).


## Example Workflows

### A. Build → Push → (Optional) Local Run

```bash
# login
docker login git.inet.co.th:5555

# build
docker build -t git.inet.co.th:5555/inet_cms/inet_cms_frontend/uat:v0.0.17 .

# push
docker push git.inet.co.th:5555/inet_cms/inet_cms_frontend/uat:v0.0.17

# run locally
docker run -d -p 3000:3000 git.inet.co.th:5555/inet_cms/inet_cms_frontend/uat:v0.0.17
```

### B. Login → Pull → Run

```bash
docker login git.inet.co.th:5555
docker pull git.inet.co.th:5555/kanya.lo/cast_survay_admin_fontend/uat:v0.03
docker run -d -p 8080:80 git.inet.co.th:5555/kanya.lo/cast_survay_admin_fontend/uat:v0.03
```
