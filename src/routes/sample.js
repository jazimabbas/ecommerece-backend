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

module.exports = async function (req, res) {
  try {
    const fileContent = fs.readFileSync(__dirname + "/purchase.js");
    console.log("fileContent: ", fileContent);
    const response = await s3
      .upload({
        Bucket: awsConfig.bucketName,
        Key: "purchase.js",
        Body: fileContent,
      })
      .promise();
    res.send("Successfully upload file to s3 " + response.Location);
  } catch (err) {
    console.log("error while uploading file to s3: ", err);
    res.send("Error while uploading file to s3");
  }
};
