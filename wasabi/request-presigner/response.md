```
fileFilter started

request files:  [
  {
    fieldname: 'images',
    originalname: 'unnamed.jpeg',
    encoding: '7bit',
    mimetype: 'image/jpeg',
    buffer: <Buffer ff d8 ff e0 00 10 4a 46 49 46 00 01 01 00 00 01 00 01 00 00 ff e1 00 2a 45 78 69 66 00 00 49 49 2a 00 08 00 00 00 01 00 31 01 02 00 07 00 00 00 1a 00 ... 21905 more bytes>,
    size: 21955
  }
]

Signed URL for Image:  https://bucketname.s3.us-east-1.wasabisys.com/image-2921......v847.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=XHJ..........%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Date=20230720T080625Z&X-Amz-Expires=900&X-Amz-Signature=a43a......52ef&X-Amz-SignedHeaders=host&x-id=GetObject
[7/20/2023, 3:06:25 PM] [INFO] Result - METHOD: [POST] - URL: [/upload-multiple] - IP: [::1] - STATUS: [200]
uploadToWasabi response:  {
  '$metadata': {
    httpStatusCode: 200,
    requestId: 'A4D7496E3A6E964E',
    extendedRequestId: 'yOZY......1jF/18',
    cfId: undefined,
    attempts: 1,
    totalRetryDelay: 0
  },
  ETag: '"535b......0696"'
}

uploaded image url undefined
```