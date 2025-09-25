### Example 1

Wasabi Hot Storage: Pros/Cons and how to use it with Javascript
- https://itnext.io/wasabi-pros-cons-and-how-to-use-with-javascript-fa528c3779a2

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

### Example 2

How to upload file into Wasabi bucket with s3 api with node.js?
- https://stackoverflow.com/questions/58622647/how-to-upload-file-into-wasabi-bucket-with-s3-api-with-node-js

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