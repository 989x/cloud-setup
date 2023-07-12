### Example 1

How to upload file into Wasabi bucket with s3 api with node.js?
- https://stackoverflow.com/questions/58622647/how-to-upload-file-into-wasabi-bucket-with-s3-api-with-node-js

2. How to Authenticate

```js
var AWS = require('aws-sdk');

var accessKeyId = 'accessKeyId';
var secretAccessKey = 'secretAccessKey';

var wasabiEndpoint = new AWS.Endpoint('s3.wasabisys.com');
var s3 = new AWS.S3({
    endpoint: wasabiEndpoint,
    accessKeyId: accessKeyId,
    secretAccessKey: secretAccessKey
});
```

5. How to upload a File

```js
// Full documentation: https://docs.aws.amazon.com/AWSJavaScriptSDK/latest/AWS/S3.html#upload-property

var filePath = '/tmp/myFile.txt';
var params = {
    Bucket: bucketName,
    Key: path.basename(filePath),
    Body: fs.createReadStream(filePath)
};

var options = {
    partSize: 10 * 1024 * 1024, // 10 MB
    queueSize: 10
};

s3.upload(params, options, function (err, data) {
    if (!err) {
        console.log(data); // successful response
    } else {
        console.log(err); // an error occurred
    }
});
```

### Example 1

Wasabi Hot Storage: Pros/Cons and how to use it with Javascript
- https://itnext.io/wasabi-pros-cons-and-how-to-use-with-javascript-fa528c3779a2

When using the @aws-sdk/client-s3 package, the S3 client only needs the Wasabi endpoint defined. The following will create the S3 client w/ the correct endpoint:

```js
const client = new S3Client({
    credentials: {
        accessKeyId: "<wasabi-access-key-id>",
        secretAccessKey: "<wasabi-secret-key>"
    },
    endpoint: {
        url: "https://s3.wasabisys.com"
    }
})
```

From here, putting an object is exactly the same as a standard AWS S3 bucket. Ex:

```js
await client.send(new PutObjectCommand({
    Bucket: "bucket-name",
    Key: "object-key",
    Body: <whatever is being put>
})
```
With the basic import statement being:
```js
import { S3Client, PutObjectCommand } from "@aws-sdk/client-s3"
```