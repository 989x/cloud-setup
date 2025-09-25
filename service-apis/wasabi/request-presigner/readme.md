### Guildline

Storing Images in S3 from Node Server (javascript)
- 30:03 / 39:58 • Getting images with signed url
- https://www.youtube.com/watch?v=eQAIojcArRY&t=1263s

### Install

```bash
pnpm i @aws-sdk/s3-request-presigner
```

### Helper

getSignedUrl is not working with Typescript Version 4.9.5 #4451
- https://github.com/aws/aws-sdk-js-v3/issues/4451

Hi @pranavv4615, thanks for opening this issue. I don`t see you in your code how and where you create an instance of the S3Client?. I do not even see you importing the S3Client. for example, here is a working sample based on your code:

```ts
import { getSignedUrl } from '@aws-sdk/s3-request-presigner';
import { GetObjectCommand, GetObjectRequest, S3Client} from "@aws-sdk/client-s3";

export const getsignedUrl = async (params: GetObjectRequest) => {
    try {
        const command = new GetObjectCommand(params)
        const client = new S3Client({
            region: process.env.TEST_REGION
        })
        const signedUrl = await getSignedUrl(client, command, { expiresIn: 15 * 60 });
        return signedUrl
    } catch (err: any) {
        console.log('Error Genrating Signed URL: ', err);
        throw new Error(err?.message || 'Error Generating Signed URL')
    }
}
```

Thanks!