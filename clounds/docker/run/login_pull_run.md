### **Logging in, Pulling, and Running a Docker Image**

---

### **1. Overview**  
This guide provides essential commands for logging into a private Docker registry, pulling a Docker image, and running it locally. These steps are crucial when deploying or testing containerized applications from a private registry.

---

### **2. Commands**

#### **1. Log in to the Docker Registry**

Before pulling an image from a private registry, you need to authenticate:

```bash
docker login git.inet.co.th:5555
```

- This command prompts for your **username** and **password**.
- Ensure you have the correct permissions to access the registry.

---

#### **2. Pull the Docker Image**

After logging in successfully, pull the desired image from the registry:

```bash
docker pull git.inet.co.th:5555/kanya.lo/cast_survay_admin_fontend/uat:v0.03
```

- **`git.inet.co.th:5555`**: The private registry address.
- **`kanya.lo/cast_survay_admin_fontend/uat:v0.03`**: The image path, including the project name and version tag.

---

#### **3. Run the Docker Image**

Once the image is pulled, run it as a container:

```bash
docker run -d -p 8080:80 git.inet.co.th:5555/kanya.lo/cast_survay_admin_fontend/uat:v0.03
```

- **`-d`**: Runs the container in detached mode (in the background).
- **`-p 8080:80`**: Maps port 80 from the container to port 8080 on the host machine.
- **`git.inet.co.th:5555/kanya.lo/cast_survay_admin_fontend/uat:v0.03`**: Specifies the image to run.

---

### **3. Example Workflow**

1. **Log in to the registry:**
   ```bash
   docker login git.inet.co.th:5555
   ```

2. **Pull the image:**
   ```bash
   docker pull git.inet.co.th:5555/kanya.lo/cast_survay_admin_fontend/uat:v0.03
   ```

3. **Run the container:**
   ```bash
   docker run -d -p 8080:80 git.inet.co.th:5555/kanya.lo/cast_survay_admin_fontend/uat:v0.03
   ```

---

### **4. Troubleshooting**

- **Authentication Failed:**  
  Ensure the username and password are correct and that your account has the necessary access permissions.

- **Port Conflict:**  
  If port 8080 is already in use, specify a different port:
  ```bash
  docker run -d -p 8081:80 git.inet.co.th:5555/kanya.lo/cast_survay_admin_fontend/uat:v0.03
  ```

- **Image Not Found:**  
  Verify the image path and tag to ensure they are correct. If the tag is omitted, Docker will try to pull the `latest` tag by default.

---

### **5. Summary**

This guide provides the fundamental steps to log in to a private Docker registry, pull a specific image, and run it as a container. These commands are essential for deploying and testing containerized applications in a secure and controlled environment.
