### 🐣 Creating a container image for use on Amazon ECS

> Amazon ECS uses Docker images in task definitions to launch containers. Docker is a technology that provides the tools for you to build, run, test, and deploy distributed applications in containers. 

</br>

### 🐬 How to Deploy a Docker App to AWS ECS
> https://www.youtube.com/watch?v=YDNSItBN15w

### Creating the Dockerfile

Dockerfile
```
FROM node:alpine

WORKDIR /app

COPY package.json .

RUN npm install

COPY . .

EXPOSE 5000

CMD ["node", "index.js"]
```

Command
```
docker build -t {%NAME} .

docker run -p 6565:5000 {%IMAGE ID}
```

### Creating a Repo with ECR

details


</br>

### 🧸 Reff

### Open & Connect ec2 

How to Use SSH on Your Mac with Terminal
- https://www.youtube.com/watch?v=SfTSBbaFN8Y
```
ssh root@ip
```

How to Connect to an EC2 Instance from your Mac Computer (For Mac Users Only)
- https://www.youtube.com/watch?v=fsjs8XTi8JI
```
chmod 400 myec2key.pem
ssh -i myec2key.pem ec2-user@ip
```

### Deploy docker

Launch A Docker Container On A Single EC2 Instance
- https://www.youtube.com/watch?v=cdqbPfGkUu4
