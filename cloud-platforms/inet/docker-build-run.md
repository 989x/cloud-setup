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

**Required scopes:** `read_registry`, `write_registry`.

- Use your **Personal Access Token (PAT)** as the password (not group/project tokens).  
- Group/project tokens have inconsistent permissions here. Create a PAT with `read_registry` (pull) and `write_registry` (push).

```bash
docker login git.inet.co.th:5555
# Username: <your GitLab username>
# Password: <your Personal Access Token>
```


## Build & Tag the Docker Image

Use `--provenance=false` to disable BuildKit attestations (prevents some INET/Harbor digest errors).
Run this in the project root where your `Dockerfile` lives.

```bash
docker build --provenance=false \
  -t git.inet.co.th:5555/inet_cms/inet_cms_frontend/uat:v0.0.17 .
```

*Apple Silicon → x86_64 servers:*

```bash
docker build --platform=linux/amd64 --provenance=false \
  -t git.inet.co.th:5555/inet_cms/inet_cms_frontend/uat:v0.0.17 .
```

* `-t` tags the resulting image.
* Use a clear path and tag (e.g., `project/component/env:version`).

**Example (another project):**

```bash
docker build --provenance=false \
  -t git.inet.co.th:5555/kanya.lo/cast_survay_admin_fontend/uat:v0.03 .
```

> Older Docker/BuildKit that lacks `--provenance`:
>
> ```bash
> DOCKER_BUILDKIT=0 docker build \
>   -t git.inet.co.th:5555/inet_cms/inet_cms_frontend/uat:v0.0.17 .
> ```


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

**Run (map host:container ports):**

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

# build (disable provenance)
docker build --provenance=false \
  -t git.inet.co.th:5555/inet_cms/inet_cms_frontend/uat:v0.0.17 .

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


## Quick Troubleshooting

* **Error:** Login/push fails due to missing scopes (e.g., `insufficient_scope`, `read_registry`, `write_registry`) when using a group/project token.
  **Fix:** Create a **Personal Access Token (PAT)** with `read_registry` and `write_registry` scopes, then re-login:

  ```bash
  docker logout git.inet.co.th:5555
  docker login git.inet.co.th:5555
  # Username: <your GitLab username>
  # Password: <your Personal Access Token>
  ```

* **Error:** `Digest: Not applicable., Invalid tag: missing manifest digest`
  **Fix:** Rebuild with `--provenance=false` (or `DOCKER_BUILDKIT=0`) and push again. If needed:

  ```bash
  docker build --no-cache --provenance=false -t <image:tag> . && docker push <image:tag>
  ```
  