How do I leave Node.js server on EC2 running forever?
- stackoverflow: https://stackoverflow.com/questions/26245942/how-do-i-leave-node-js-server-on-ec2-running-forever

I worked with the valid answer for a while but some times the screen just end with no reason also screen has no balance loader and others features that in a production enviroment you should care , Currently I use a npm component to do this job.

https://www.npmjs.com/package/pm2

This is so easy to use.
```bash
$ npm install pm2 -g
```
then just start your app with pm2 like this

```bash
```
$ pm2 start app.js
```
In the above link you can find diferents tasks to perform if you need.

Hope this help the newbies like me.



</br>



Deploy Nest JS App using PM2 on Linux (Ubuntu) Server
- web: https://dev.to/deadwin19/deploy-nest-js-app-using-pm2-on-linux-ubuntu-server-88f

Step 4 (Build Project) </br>
For Nest JS app, you have to first generate a build then only you can run the project on server.
```bash
$ npm run build
```
Step 5 (Run Project) </br>
If build is generated successfully then will create /dist folder under root directory. Now you can run your project using following PM2 command
```bash
$ pm2 start dist/main.js --name <application_name>
```
application_name you can use to give unique app name so that you can easily identify your apps in pm2 list.

There are some PM2 commands to make your application auto restart after system reboot also
```bash
$ pm2 startup systemd
$ pm2 save
```