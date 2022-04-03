const AWS = require("aws-sdk");
const config = require("config");
const fs = require("fs");

const awsConfig = config.get("aws");
const s3 = new AWS.S3({
  credentials: {
    accessKeyId: awsConfig.accessKey,
    secretAccessKey: awsConfig.secretKey,
  },
});

module.exports = async function (file) {
  try {
    const stream = fs.createReadStream(file.path);
    return await s3
      .upload(
        {
          Bucket: awsConfig.bucketName,
          Key: file.filename,
          Body: stream,
        },
        { partSize: 10 * 1024 * 1024, queueSize: 5 }
      )
      .promise();
  } catch (err) {
    throw err;
  }
};
