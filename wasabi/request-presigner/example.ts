import { generateImageID } from "../utils/id-generator";
import { uploadToWasabi, findImageUrl } from "../middlewares/wasabi";

const bucketName = process.env.WASABI_BUCKET_NAME;

const uploadImages = async (req: any, res: any) => {
  console.log("request files: ", req.files);

  if (req.files && req.files.length > 0) {
    for (let i = 0; i < req.files.length; i++) {
      const key = `${generateImageID()}.jpg`;

      uploadToWasabi(key, req.files[i].buffer).then((result) => {
        console.log("uploaded image url", result);
      });

      // signedUrl
      const params = { Bucket: bucketName, Key: key };
      const signedUrl = await findImageUrl(params);
      console.log("Signed URL for Image: ", signedUrl);
      // Signed URL for Image:  https://ledida.s3.us-east-1.wasabisys.com/image-2921843c19eo652602829f5i7w04v847.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=XHJ7YFDB99A1GTJE3V6V%2F20230720%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Date=20230720T080625Z&X-Amz-Expires=900&X-Amz-Signature=a43a07223797958b4dd6349ebb47cabea659946fc20d3df1d5268abfa64252ef&X-Amz-SignedHeaders=host&x-id=GetObject
    }
  }

  res.json({
    msg: `${req.files.length} Images uploaded successfully`,
  });
};

export default {
  uploadImages,
};