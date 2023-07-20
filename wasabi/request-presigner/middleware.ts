import {
  S3Client,
  PutObjectCommand,
  GetObjectCommand,
  GetObjectRequest,
} from "@aws-sdk/client-s3";
import { getSignedUrl } from "@aws-sdk/s3-request-presigner";

dotenv.config();

const bucketName = process.env.WASABI_BUCKET_NAME;
const wasabiRegion = process.env.WASABI_REGION
const wasabiEndpoint = new URL(process.env.WASABI_ENDPOINT!); // Convert to URL type
const accessKeyId = process.env.WASABI_ACCESS_KEY;
const secretAccessKey = process.env.WASABI_SECRET_KEY;

export const client = new S3Client({
  credentials: {
    accessKeyId: accessKeyId!,
    secretAccessKey: secretAccessKey!,
  },
  endpoint: {
    url: wasabiEndpoint,
  },
  // endpoint: wasabiEndpoint
  region: wasabiRegion,
});

export const findImageUrl = async (params: GetObjectRequest) => {
  try {
    const command = new GetObjectCommand(params);
    // const client = new S3Client({
    //   region: wasabiRegion,
    // });
    const signedUrl = await getSignedUrl(client, command, {
      expiresIn: 15 * 60,
    });
    return signedUrl;
  } catch (err: any) {
    console.log("Error Genrating Signed URL: ", err);
    throw new Error(err?.message || "Error Generating Signed URL");
  }
};
