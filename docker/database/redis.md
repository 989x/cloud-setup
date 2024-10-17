### **Running Redis Container without Docker-Compose**

---

### **1. Overview**  
This guide explains how to convert a `docker-compose.yml` configuration into standalone `docker run` commands. It helps run a Redis container with specific settings, including volumes, ports, and environment variables, without using `docker-compose`.

---

### **2. Commands**

#### **1. Create a Volume for Redis Data**  
The volume is required to persist Redis data beyond the lifecycle of the container.

```bash
docker volume create redis_data
```

---

#### **2. Run the Redis Container**  
This command pulls the `redis:alpine` image (if not available locally) and starts the Redis container with appropriate configurations.

```bash
docker run -d \
  --name redis \
  -p 6379:6379 \
  -v redis_data:/data \
  -e REDIS_PASSWORD=${REDIS_PASSWORD} \
  redis:alpine \
  redis-server --requirepass ${REDIS_PASSWORD}
```

- **`-d`**: Run the container in detached mode.
- **`--name redis`**: Name the container as `redis`.
- **`-p 6379:6379`**: Map host port 6379 to container port 6379.
- **`-v redis_data:/data`**: Mount the `redis_data` volume to `/data` in the container.
- **`-e REDIS_PASSWORD=${REDIS_PASSWORD}`**: Pass the `REDIS_PASSWORD` environment variable to the container.
- **`redis:alpine`**: Use the Redis image from the Alpine version.
- **`redis-server --requirepass`**: Start the Redis server with password protection.

---

#### **3. Verify the Running Container**

Once the container is up, verify that it is running properly with the following command:

```bash
docker ps -f name=redis
```

This command will list the Redis container if it is running.

---

#### **4. Stop and Remove the Container (Optional)**

If you need to stop and remove the container:

```bash
docker stop redis
docker rm redis
```

---

#### **5. Remove the Redis Volume (Optional)**

If you no longer need the volume:

```bash
docker volume rm redis_data
```

---

### **3. Summary**

This guide demonstrates how to create a volume, run a Redis container with environment variables and custom settings, and manage it using `docker run` commands. This approach eliminates the need for `docker-compose` while maintaining all essential functionalities.
