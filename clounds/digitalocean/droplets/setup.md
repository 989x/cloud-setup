# Server Setup (Docker + MongoDB)


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

> For production hardening later: add TLS and create a dedicated app user.
