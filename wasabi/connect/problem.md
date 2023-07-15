### EndpointError

Failed to upload to Wasabi: EndpointError: Invalid region: region was not a valid DNS name.

S3 regions regression (fails with DNS error) #306
- https://github.com/aws/aws-sdk-js/issues/306

Thanks for reporting this. A workaround in the meantime would be to set your region to `'us-east-1'`, the US Classic region for S3.

```ts
  region: "s3.us-east-1.wasabisys.com"
  // change to 
  region: "us-east-1",
```



### InvalidAccessKeyId

Failed to upload to Wasabi: InvalidAccessKeyId: The AWS Access Key Id you provided does not exist in our records.

The AWS Access Key Id you provided does not exist in our records. AWS
- https://stackoverflow.com/questions/68415772/the-aws-access-key-id-you-provided-does-not-exist-in-our-records-aws