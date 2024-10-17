### Example 1

How to set credentials in AWS SDK v3 JavaScript?
- https://stackoverflow.com/questions/68264237/how-to-set-credentials-in-aws-sdk-v3-javascript

You can embed the credential inside your source code but it's not the prefered way

```js
new S3Client(configuration: S3ClientConfig): S3Client
```

Where S3ClientConfig contain a credentials property

https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-s3/modules/credentials.html

```js
    const { S3Client,GetObjectCommand } = require("@aws-sdk/client-s3");
    
    let client = new S3Client({
        region:'ap-southeast-1',
        credentials:{
            accessKeyId:'',
            secretAccessKey:''
        }
    });
    
    (async () => {
      const response = await client.send(new GetObjectCommand({Bucket:"BucketNameHere",Key:"ObjectNameHere"}));
      console.log(response);
    })();
```

Sample answer

```bash
  '$metadata': {
    httpStatusCode: 200,
    requestId: undefined,
    extendedRequestId: '7kwrFkEp3lEnLU+OtxjrgdmS6gQmvPdbnqqR7I8P/rdFrUPBkdKYPYykWivuHPXCF1IHgjCIbe8=',
    cfId: undefined,
    attempts: 1,
    totalRetryDelay: 0
  },
```

### Example 2

Wasabi Hot Storage: Pros/Cons and how to use it with Javascript
- https://itnext.io/wasabi-pros-cons-and-how-to-use-with-javascript-fa528c3779a2

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

### Example 3

How to upload file into Wasabi bucket with s3 api with node.js?
- https://stackoverflow.com/questions/58622647/how-to-upload-file-into-wasabi-bucket-with-s3-api-with-node-js

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
