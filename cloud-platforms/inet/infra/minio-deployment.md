# INET — MinIO Deployment (Single-Node & Replica)

**Host:** `JongJong-APP-01-UAT`
**Single-node compose path:** `/home/JongJong/devops-iac-script/files/minio/single-node/docker-compose.yml`
**Replica compose path:** `/home/JongJong/devops-iac-script/files/minio/replica/docker-compose.yml`

> Note: Don’t `cd` into a file. If you see `bash: cd: docker-compose.yml: Not a directory`, open it with an editor instead (e.g., `nano docker-compose.yml`).


## Single-Node Setup

### Compose (reference)

```yaml
services:
  minio:
    # image: quay.io/minio/minio
    image: minio/minio:RELEASE.2025-04-22T22-12-26Z
    container_name: minio
    restart: unless-stopped
    ports:
      - 9000:9000
      - 9001:9001
    environment:
      MINIO_ROOT_USER: admin
      MINIO_ROOT_PASSWORD: __PASSWORD__
      MINIO_SCANNER_SPEED: fastest
      MINIO_HTTP_TRACE: /tmp/minio.log
    volumes:
      - ./data:/data
    command: server /data --console-address ":9001"
    healthcheck:
      test: ["CMD", "curl", "-f", "http://localhost:9000/minio/health/live"]
      interval: 30s
      timeout: 20s
      retries: 3
```

### Run / Update

```bash
cd /home/JongJong/devops-iac-script/files/minio/single-node
docker compose up -d
docker compose ps
docker compose logs -f minio
```


## Replica (Distributed) Setup

> Run **one node per host** (or unique service) with a unique hostname. Each node points to the same set of peers using `http://minio{1...3}/data` and resolves them via `extra_hosts`.

### Template (placeholders)

```yaml
services:
  __HOSTNAME__:
    hostname: __HOSTNAME__            # e.g., minio1 (rename per node)
    container_name: minio
    # image: quay.io/minio/minio
    image: minio/minio:RELEASE.2025-04-22T22-12-26Z
    command: server --console-address ":9001" http://minio{1...3}/data
    restart: unless-stopped
    ports:
      - "9000:9000"
      - "9001:9001"
    extra_hosts:
__EXTRA_HOSTS__                        # e.g., mapping for minio1..3
    environment:
      MINIO_ROOT_USER: admin
      MINIO_ROOT_PASSWORD: __PASSWORD__
      MINIO_SCANNER_SPEED: fastest
    volumes:
      - ./data:/data
    healthcheck:
      test: ["CMD", "curl", "-f", "http://localhost:9000/minio/health/live"]
      interval: 30s
      timeout: 20s
      retries: 3
```

### Example (node: `minio1`)

> Repeat on `minio2`, `minio3` with adjusted `hostname`, service key, and matching `extra_hosts`.

```yaml
services:
  minio1:
    hostname: minio1
    container_name: minio
    image: minio/minio:RELEASE.2025-04-22T22-12-26Z
    command: server --console-address ":9001" http://minio{1...3}/data
    restart: unless-stopped
    ports:
      - "9000:9000"
      - "9001:9001"
    extra_hosts:
      - "minio1:192.168.21.11"
      - "minio2:192.168.21.12"
      - "minio3:192.168.21.13"
    environment:
      MINIO_ROOT_USER: admin
      MINIO_ROOT_PASSWORD: __PASSWORD__
      MINIO_SCANNER_SPEED: fastest
    volumes:
      - ./data:/data
    healthcheck:
      test: ["CMD", "curl", "-f", "http://localhost:9000/minio/health/live"]
      interval: 30s
      timeout: 20s
      retries: 3
```

### Start / Verify (per node)

```bash
cd /home/JongJong/devops-iac-script/files/minio/replica
docker compose up -d
docker compose ps
docker compose logs -f
```

When all nodes are up, access the console on any node:

* Console UI: `http://<node-ip>:9001`
* S3 API: `http://<node-ip>:9000`


## Tips & Notes

* Use a **strong** `MINIO_ROOT_PASSWORD`. Prefer a `.env` file or secret manager.
* Ensure ports `9000`/`9001` don’t conflict with other services on each host.
* The **image tag** should be the **same on all nodes** in the replica setup.
* Data directories (`./data`) are **per-host**; ensure sufficient disk and backups.
* Healthcheck helps Compose restart unhealthy containers automatically.
