### **MongoDB Setup Guide**

---

### **Resource**

- **MongoDB inside Docker Container:**  
  [https://www.youtube.com/watch?v=uklyCSKQ1Po](https://www.youtube.com/watch?v=uklyCSKQ1Po)

- **MongoDB Official Image on Docker Hub:**  
  [https://hub.docker.com/_/mongo](https://hub.docker.com/_/mongo)

---

### **Solve**

- **`mongo: command not found` on MongoDB 6.0 Docker Container [duplicate]:**  
  [https://stackoverflow.com/questions/73582703/mongo-command-not-found-on-mongodb-6-0-docker-container](https://stackoverflow.com/questions/73582703/mongo-command-not-found-on-mongodb-6-0-docker-container)  
  > **Note:** Starting with MongoDB 6.0, the `mongo` shell has been replaced by `mongosh`.

---

### **Set up Docker MongoDB**

1. **Pull the latest MongoDB image:**
   ```bash
   docker pull mongo:latest
   ```

2. **Verify the image:**
   ```bash
   docker images
   ```

3. **Create a directory to store MongoDB data:**
   ```bash
   mkdir mongodb-local
   cd mongodb-local
   ```

4. **Run the MongoDB container:**
   ```bash
   docker run -d -p 27017:27017 -v ~/mongodb-local:/data/db --name mymongo mongo:latest
   ```

5. **Verify the container is running:**
   ```bash
   docker ps
   ```

---

### **Usage**

1. **Access the running MongoDB container:**
   ```bash
   docker exec -it mymongo bash
   ```

2. **Start the `mongosh` shell:**
   ```bash
   root@<container_id>:/# mongosh
   ```

3. **Work with databases inside `mongosh`:**
   ```bash
   show dbs

   use test

   db.user.insert({ "name": "Truly Mittal" })

   db.user.find()
   ```

---

### **Changes & Improvements**
1. Replaced all references to `mongo` with `mongosh` to reflect MongoDB 6.0+ changes.
2. Fixed port mapping (was incorrectly listed as `2717:27017`; corrected to `27017:27017`).
3. Organized code blocks and added step-by-step instructions for better clarity.
4. Highlighted important details about the `mongosh` shell for newer MongoDB versions.
