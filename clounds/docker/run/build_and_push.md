### **Building and Pushing Docker Image**

---

### **1. Overview**  
This guide outlines the steps to **build** and **push** a Docker image to a remote registry. Building and pushing Docker images is a common workflow when deploying applications across multiple environments, such as **development**, **staging**, or **production**.

---

### **2. Prerequisites**  
- **Docker** installed on your local machine.
- Access to the **Docker registry** (e.g., Docker Hub, GitLab, or any private registry).
- Proper **authentication** to push images to the registry (e.g., `docker login`).

---

### **3. Steps to Build and Push Docker Image**

#### **1. Build the Docker Image**

Use the following command to build the Docker image. Make sure you are in the project’s root directory where your **Dockerfile** is located.

```bash
docker build -t your_registry/your_project/your_image_name:tag .
```

- **`-t`**: Tags the image with a name and version (`tag`).
- **`your_registry/your_project/your_image_name:tag`**: Specifies the full path to the image, including registry, project, and tag name (e.g., `git.inet.co.th:5555/inet_cms/inet_cms_frontend/uat:v0.0.17`).
- **`.`**: Specifies the context directory where the Dockerfile and related files are located.

---

#### **2. Push the Docker Image to Registry**

Once the image is built, push it to the registry with:

```bash
docker push your_registry/your_project/your_image_name:tag
```

Example:

```bash
docker push git.inet.co.th:5555/inet_cms/inet_cms_frontend/uat:v0.0.17
```

---

#### **3. Verify the Image on the Registry**

After pushing, you can verify the image on the registry by either:
- Checking the registry web interface.
- Running the following Docker command to list images:

```bash
docker images
```

---

### **4. Troubleshooting**

- **Authentication Error:**  
  Make sure you are logged in to the registry using:
  ```bash
  docker login your_registry
  ```

- **Port Already in Use:**  
  If you encounter a port conflict during container startup, specify a different port mapping:
  ```bash
  docker run -d -p 3001:3000 your_image_name
  ```

- **Image Not Found:**  
  Double-check the image name, registry path, and tag. Ensure you use the correct format when building and pushing the image.

---

### **5. Example Workflow**

1. **Build the Image:**
   ```bash
   docker build -t git.inet.co.th:5555/inet_cms/inet_cms_frontend/uat:v0.0.17 .
   ```

2. **Push the Image:**
   ```bash
   docker push git.inet.co.th:5555/inet_cms/inet_cms_frontend/uat:v0.0.17
   ```

3. **Run the Container Locally (Optional):**
   ```bash
   docker run -d -p 3000:3000 git.inet.co.th:5555/inet_cms/inet_cms_frontend/uat:v0.0.17
   ```

---

### **6. Summary**

By following these steps, you can build and push Docker images to any registry. This process ensures your applications are containerized and ready to be deployed in different environments. Make sure to properly tag and authenticate with your registry to avoid common issues during the build and push process.
