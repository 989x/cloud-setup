# Setting Up MySQL in Docker and Connecting to Your Node.js Program

Follow these steps to utilize MySQL in Docker and connect it to your Node.js program:

1. **Install Docker:** If you don't have Docker on your machine yet, you need to install Docker by visiting the Docker website and downloading/installing Docker Desktop for macOS.

2. **Create a Docker Container for MySQL:** Use the `docker run` command to create a Docker container for MySQL, specifying necessary parameters such as container name, port, connection data, password, etc. Use a command similar to the following:

   ```bash
   docker run -d --name mysql-container -p 3306:3306 -e MYSQL_DATABASE=e_sql -e MYSQL_USER=admin -e MYSQL_PASSWORD=password123 -e MYSQL_ROOT_PASSWORD=root_password123 mysql:latest
   ```

3. **Verify MySQL Container Creation:** Use the `docker ps` command to verify whether the MySQL container has been created successfully.

4. **Connect Node.js to MySQL:** In your Node.js program, you can use MySQL libraries such as `mysql2` to connect to the MySQL database. Use the connection information specified in step 2. Example code:

   ```javascript
   const mysql = require('mysql2');

   // MySQL connection data
   const connection = mysql.createConnection({
     host: 'localhost', // or the IP address of the MySQL Docker container
     user: 'admin',
     password: 'password123',
     database: 'e_sql',
     port: '3306'
   });

   // Connect to MySQL
   connection.connect((err) => {
     if (err) {
       console.error('Error connecting to MySQL:', err);
       return;
     }
     console.log('Connected to MySQL successfully');
   });

   // Example query
   connection.query('SELECT * FROM table_name', (err, results) => {
     if (err) {
       console.error('Error in query:', err);
       return;
     }
     console.log('Results:', results);
   });

   // Close the connection when done
   connection.end();
   ```

Feel free to customize the connection data and queries based on your specific requirements.
