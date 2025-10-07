# INET — Monitoring (Prometheus)

**Location:** `/home/JongJong/monitor-se`


## Files & layout

```
/home/JongJong/monitor-se
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


## `docker-compose.yml`

```yaml
version: "3.7"
services:
  prometheus:
    image: prom/prometheus
    user: root
    ports:
      - 8012:9090
    restart: always
    volumes:
      - ./prometheus/data:/prometheus
      - ./prometheus/prometheus.yml:/etc/prometheus/prometheus.yml
    command:
      - "--config.file=/etc/prometheus/prometheus.yml"
      - "--storage.tsdb.path=/prometheus"
      - "--web.console.libraries=/usr/share/prometheus/console_libraries"
      - "--web.console.templates=/usr/share/prometheus/consoles"
      - "--web.route-prefix=/prom"
      - "--web.enable-lifecycle"
      - "--storage.tsdb.retention.time=1m"
      - "--web.enable-admin-api"
```


## Run / Restart Prometheus

```bash
cd /home/JongJong/monitor-se
docker compose down
docker compose up -d
```


## Verify

```bash
docker compose ps
docker compose logs -f prometheus
```

UI: `http://<server-ip>:8012/prom`
