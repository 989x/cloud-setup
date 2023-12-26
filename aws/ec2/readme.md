# AWS EC2 Guide

**Overview of Document**

Welcome to the AWS EC2 Guide! This guide provides useful files, commands, and references to help you navigate Amazon EC2 effectively.

## Useful Files

Clone A Private Repository (GitHub)
- [Private Git Repository Setup](https://github.com/SinsamutQ/ec2/blob/main/private-git.md)

Leave Node.js Server on EC2 Running Forever
- [Running Node.js Forever](https://github.com/SinsamutQ/ec2/blob/main/running-node.md)

Set HTTPS on Node.js Server
- [Setting Up HTTPS](https://github.com/SinsamutQ/ec2/blob/main/https.md)

## Amazon EC2 and NestJS

NestJS - AWS EC2 with MongoDB Atlas
- [Watch the Tutorial](https://www.youtube.com/watch?v=c22bwrIu90A)

HugoRoca/nestjs-auth-passport-jwt
- [GitHub Repository](https://github.com/HugoRoca/nestjs-auth-passport-jwt/tree/mongodb)

Command on ubuntu ec2

```bash
# Update system
sudo apt update
sudo apt upgrade

# Update bashrc
source ~/.bashrc

# Install LTS with NVM
nvm install --lts

# Redirect port 80 to 3000
sudo iptables -A PREROUTING -t nat -i eth0 -p tcp --dport 80 -j REDIRECT --to-port 3000
```

## Useful References

> Ensure a secure site with HTTPS

Learn how to get a free SSL Certificate on AWS with EC2 step by step using AWS Certificate Manager and CloudFront:
- [YouTube Tutorial: Get Free SSL Certificate on AWS with EC2](https://www.youtube.com/watch?v=YVbwVet8aI4)

Discover how to secure your site with HTTPS and set up an SSL Certificate on AWS:
- [YouTube Tutorial: Secure Your Site with HTTPS - SSL Certificate - AWS](https://www.youtube.com/watch?v=whtEehGeYvU)

## Additional References

### Connect to EC2 Instances

**How to Use SSH on Your Mac with Terminal**

For Windows users, sync with Putty. Watch the tutorial:

[YouTube Tutorial: How to Use SSH on Your Mac with Terminal](https://www.youtube.com/watch?v=SfTSBbaFN8Y)

```bash
ssh root@ip
```

**How to Connect to an EC2 Instance from Your Mac Computer (For Mac Users Only)**

For macOS users, use the myec2key.pem key. Watch the tutorial:

[YouTube Tutorial: Connect to EC2 Instance from Your Mac](https://www.youtube.com/watch?v=fsjs8XTi8JI)

```bash
chmod 400 myec2key.pem
ssh -i myec2key.pem ec2-user@ip
```

### Deploy Docker on EC2

**Launch a Docker Container on a Single EC2 Instance**

Deploy a Docker container without a Dockerfile and Node file. Use PuTTY, Nginx, but note that it's not secure.

[YouTube Tutorial: Launch a Docker Container on a Single EC2 Instance](https://www.youtube.com/watch?v=cdqbPfGkUu4)

**How to Deploy a Docker App to AWS ECS**

Learn to deploy a Docker app with an index.ts file on AWS ECS using EC2. Note that this setup is not fully secure.

[YouTube Tutorial: Deploy a Docker App to AWS ECS](https://www.youtube.com/watch?v=YDNSItBN15w)

Feel free to explore these references to enhance your AWS EC2 experience. Happy deploying! 🚀
