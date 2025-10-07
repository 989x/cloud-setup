# INET — Plugin Deployment Guide

**Assumption:** You’re already connected to INET via OpenVPN.


## Server directory structure (UAT)

**Host:** `JongJong-APP-01-UAT` • **Base:** `/home/JongJong`

```
/home/JongJong
├─ deployment/
│  ├─ backend/
│  ├─ frontend/
│  └─ plugin/
├─ devops-iac-script/
│  ├─ files/
│  │  ├─ grafana&prometheus/
│  │  ├─ jenkins-server/
│  │  ├─ keydb/
│  │  ├─ minio/
│  │  ├─ monitor/
│  │  ├─ nfs/
│  │  ├─ proxy/
│  │  ├─ rabbitmq/
│  │  ├─ rancher/
│  │  ├─ redis/
│  │  └─ sonarqube/
│  ├─ script/
│  │  ├─ actions/
│  │  ├─ CHANGELOG.md
│  │  ├─ get-docker.sh
│  │  ├─ main.sh
│  │  ├─ README.md
│  │  └─ setup.txt
│  └─ utils/
│     ├─ file-request.sh
│     ├─ logger.sh
│     ├─ random-password.sh
│     └─ README.md
└─ monitor-se/
   ├─ docker-compose.yml
   └─ prometheus/
      ├─ prometheus.yml
      └─ data/
         ├─ 01K6WC0D0D02PYGCA5CAT0WZNG/
         ├─ chunks_head/
         ├─ lock
         ├─ queries.active
         └─ wal/
```

> Plugin compose path: `/home/JongJong/deployment/plugin/docker-compose.yaml`


## Deploy / Update the Plugin

1. SSH & elevate

```bash
ssh JongJong@192.168.21.1
# password: [password-server]
```

2. Elevate Privileges

```bash
sudo su
# password: [password-server]
```

3. Go to plugin directory

```bash
cd /home/JongJong/deployment/plugin
```

4. Edit compose (if needed)

```bash
nano docker-compose.yaml
# Save: Ctrl+O (Enter), Exit: Ctrl+X
```

**Reference `docker-compose.yaml` (plugin)**

```yaml
version: '3.8'

services:
  frontend-service:
    container_name: jongjong-plugin-uat
    image: git.inet.co.th:5555/jongjong/booking-plugin/test:v0.0.6
    ports:
      - '3000:3000'
    restart: unless-stopped
    # environment:
    #  - API_URL=https://domain-name.co.th/api/v1/
    # env_file:
    #  - .env
    # volumes:
    #  - ./public:/app/public
```

5. Recreate stack

```bash
docker compose down
docker compose up -d
```

6. Verify

```bash
docker compose ps
docker compose logs -f
```

> Tip: backup before editing
> `cp docker-compose.yaml docker-compose.yaml.bak.$(date +%Y%m%d%H%M%S)`
