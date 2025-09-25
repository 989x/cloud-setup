

# Server Setup (Docker + MongoDB + Node.js/pnpm)


## Install Docker (quick)

```bash
curl -fsSL https://get.docker.com -o get-docker.sh
sudo sh get-docker.sh
sudo groupadd docker 2>/dev/null || true
sudo usermod -aG docker $USER
newgrp docker
```

Verify:

```bash
docker --version
docker run hello-world
```


## Install Node.js LTS **and pnpm** (recommended via Corepack)

> Works on Ubuntu 20.04/22.04. Uses Node 20 LTS.

```bash
# 1) Install Node.js 20 (includes Corepack)
curl -fsSL https://deb.nodesource.com/setup_20.x | sudo -E bash -
sudo apt-get install -y nodejs

# 2) Enable Corepack and activate pnpm v9 (system-wide)
sudo corepack enable
sudo corepack prepare pnpm@9 --activate

# 3) (Optional) Also enable for your current user shell
corepack enable
corepack prepare pnpm@9 --activate

# 4) Verify
node -v
pnpm -v
```

### If you prefer a one-liner installer (no Corepack)

```bash
curl -fsSL https://get.pnpm.io/install.sh | sh -
# Re-open your shell, then:
pnpm -v
```

> This installs pnpm under `~/.local/share/pnpm` and updates your shell profile’s `PATH`.

### Optional: set a global pnpm store (keeps `node_modules` lean)

```bash
mkdir -p ~/.pnpm-store
pnpm config set store-dir ~/.pnpm-store
```


## Install MongoDB (Docker, auth + persistence)

```bash
# Replace the password before running!
docker run -d --name mongo \
  -p 27017:27017 \
  -e MONGO_INITDB_ROOT_USERNAME=admin \
  -e MONGO_INITDB_ROOT_PASSWORD='secret123' \
  -v mongo_data:/data/db \
  mongo:7.0 --bind_ip_all
```

Verify & open shell:

```bash
docker logs -f mongo        # Ctrl+C to exit
docker exec -it mongo mongosh -u admin -p
```

Connect from your app (no TLS yet):

```
mongodb://admin:secret123@<SERVER_PUBLIC_IP>:27017/?authSource=admin
```

### Firewall (if accessing remotely)

```bash
sudo ufw allow from <APP_PUBLIC_IP> to any port 27017 proto tcp
sudo ufw status
```

### Handy commands

```bash
docker ps
docker stop mongo
docker start mongo
docker logs -f mongo        # Ctrl+C to exit
docker exec -it mongo mongosh -u admin -p
```
