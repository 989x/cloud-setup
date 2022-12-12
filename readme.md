### 🐣 Another files
Clone A Private Repository (github)
- 

leave Node.js server on EC2 running forever
- 

set https on node server
-

</br>

### 🎮 Amazon EC2 and NestJS
> 
NestJS - AWS EC2 con MongoDB Atlas
- youtube: https://www.youtube.com/watch?v=c22bwrIu90A

HugoRoca/nestjs-auth-passport-jwt
- github: https://github.com/HugoRoca/nestjs-auth-passport-jwt/tree/mongodb

Set port on ec2 

![Screen Shot 2565-12-11 at 23 49 03](https://user-images.githubusercontent.com/73060136/206916993-604e1274-57ef-4c1a-82e3-72845c0bc50f.png)

Command on ubuntu ec2
```bash
- Para actualizar 
  - sudo apt update
  - sudo apt upgrade
- Para actualizar el bashrc: source ~/.bashrc
- Para instalar LTS con NVM: nvm install --lts
- Para realizar el redireccionamiento: 
  - sudo iptables -A PREROUTING -t nat -i eth0 -p tcp --dport 80 -j REDIRECT --to-port 3000
```

</br>

### 🧸 Reff usefull
> secure site with HTTPS

how to get free SSL Certificate on AWS with EC2 step by step | AWS Certificate Manager | Cloud Front
- https://www.youtube.com/watch?v=YVbwVet8aI4

How to secure your site with HTTPS - SSL Certificate - AWS
- https://www.youtube.com/watch?v=whtEehGeYvU

</br>

### 🧸 Reff another

### Connect ec2 

How to Use SSH on Your Mac with Terminal
> windows , sync Putty Demo on web
- https://www.youtube.com/watch?v=SfTSBbaFN8Y
```
ssh root@ip
```

How to Connect to an EC2 Instance from your Mac Computer (For Mac Users Only)
> macos , what ? myec2key.pem
- https://www.youtube.com/watch?v=fsjs8XTi8JI
```
chmod 400 myec2key.pem
ssh -i myec2key.pem ec2-user@ip
```

### Deploy docker

Launch A Docker Container On A Single EC2 Instance
> no dockerfile , use PuTTY , not secure
- https://www.youtube.com/watch?v=cdqbPfGkUu4
