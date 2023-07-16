### Amazon S3 endpoint - 1

How do you configure the endpoint for Amazon S3 by using the AWS SDK V2?
- https://stackoverflow.com/questions/68005239/how-do-you-configure-the-endpoint-for-amazon-s3-by-using-the-aws-sdk-v2

Looking at the Javadocs here:

https://sdk.amazonaws.com/java/api/latest/software/amazon/awssdk/core/client/builder/SdkClientBuilder.html#endpointOverride-java.net.URI-

See:

endpointOverride

endpointOverride(URI endpointOverride)

Configure the endpoint with which the SDK should communicate.**

Looks like you can create a URI object and pass that when you create the Service client

```Java
URI myURI = new URI("<endpoint URL>");

  Region region = Region.US_EAST_1;
  S3Client s3 = S3Client.builder()
                .region(region)
                .endpointOverride(myURI)
                .build();
```

### Amazon S3 endpoint - 2

I want to upload files to the cloud storage in Wasabi
- https://stackoverflow.com/questions/68415772/the-aws-access-key-id-you-provided-does-not-exist-in-our-records-aws

```python
import boto3

s3 = boto3.client('s3',
                  # endpoint_url='https://s3.wasabisys.com',
                  endpoint_url='https://s3.us-east-2.wasabisys.com', # Ture endpoint_url
                  aws_access_key_id="********R2PN",
                  aws_secret_access_key="*************zDKnnWS")

file_path = r"C:\Users\Asus\Desktop\Programming\rofls_with_node\tracks.txt"
bucket_name = "last-fm9"
key_name = "tracks.txt"
s3.put_object(Body=file_path, Bucket=bucket_name, Key=key_name)
```