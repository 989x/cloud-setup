# Running Node.js Server on AWS EC2 with PM2

**Overview of Document**

Learn how to run your Node.js server on AWS EC2 reliably using PM2, a process manager for Node.js applications.



## How to Keep Node.js Server on EC2 Running Forever

When you want your Node.js server to run continuously on AWS EC2, consider using PM2. It provides essential features for managing Node.js processes efficiently.

Follow these steps to use PM2:

### Step 1: Install PM2

Install PM2 globally on your EC2 instance using npm:

```bash
$ npm install pm2 -g
```

### Step 2: Start Your Node.js App with PM2

After installing PM2, start your Node.js application using the following command:

```bash
$ pm2 start app.js
```

PM2 will manage your Node.js process, ensuring it runs continuously. You can replace `app.js` with the entry file of your Node.js application.

### Additional PM2 Tasks

Visit the [PM2 npm page](https://www.npmjs.com/package/pm2) to explore various tasks and features offered by PM2. It includes functionalities like balancing, reloading, and more, making it suitable for production environments.

By using PM2, you benefit from a reliable and feature-rich solution to keep your Node.js server running on AWS EC2 consistently.

For more details, refer to the [How do I leave Node.js server on EC2 running forever?](https://stackoverflow.com/questions/26245942/how-do-i-leave-node-js-server-on-ec2-running-forever)



## Troubleshooting: sudo: npm: command not found

If you encounter the error `sudo: npm: command not found`, install npm using the following command:

```bash
sudo apt-get install npm
```

Refer to[ Stack Overflow: sudo: npm: command not found](https://stackoverflow.com/questions/31472755/sudo-npm-command-not-found) for more details.



## Deploying Nest.js App with PM2 on Linux (Ubuntu) Server

For detailed guidance, refer to the article: [Deploy Nest.js App using PM2 on Linux (Ubuntu) Server](https://dev.to/deadwin19/deploy-nest-js-app-using-pm2-on-linux-ubuntu-server-88f).

### Step 4: Build Project

Generate a build for your Nest.js app:

```bash
$ npm run build
```

### Step 5: Run Project with PM2

Run your project using the following PM2 command:

```bash
$ pm2 start dist/main.js --name <application_name>
```

Replace `<application_name>` with a unique name for your app to easily identify it in PM2.

### Additional PM2 Commands

To make your application auto-restart after system reboots, use the following PM2 commands:

```bash
$ pm2 startup system
$ pm2 save
```

These commands ensure your Node.js app is managed effectively and automatically restarts on system reboots.
