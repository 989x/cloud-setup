# Dockerizing a Next.js App

This guide provides instructions for building and running a Dockerized Next.js application.

## Source

For more detailed steps and explanations, you can refer to the original article: [Dockerize a Next.js App](https://medium.com/@itsuki.enjoy/dockerize-a-next-js-app-4b03021e084d)

## Build and Run

To build and run the Docker image for an INET server, follow these steps:

1. **Build the Docker image**  
   Use the following command to build the Docker image and tag it appropriately:

   ```bash
   docker build -t git.inet.co.th:5555/inet_cms/inet_cms_frontend/uat:v0.0.1 .
   ```

2. **Push the Docker image**  
   Once the image is built, push it to your Docker registry:

   ```bash
   docker push git.inet.co.th:5555/inet_cms/inet_cms_frontend/uat:v0.0.1
   ```

Ensure that your Docker registry credentials are correctly configured before pushing the image.
