
const fs = require('fs');

const items = require("./img.json");

const colorRecognize = async (req,res) => {

  const argument= req.body.ImageBase64;
  const decodeBase64Image = (dataString) => {
    var matches = dataString.match(/^data:([A-Za-z-+\/]+);base64,(.+)$/),
    response = {};
       if (matches.length !== 3) {
      return new Error('Invalid input string');
      }    response.type = matches[1];
      
      var buffer = Buffer.from(matches[2],"base64");
      return buffer;
  }
  const  decodedImg = decodeBase64Image(argument);
 

    const vision = require('@google-cloud/vision');

    // Creates a client
    const client = new vision.ImageAnnotatorClient();

    // Performs property detection on the local file
    const [result] = await client.imageProperties(decodedImg);

    const colors = result.imagePropertiesAnnotation.dominantColors.colors;
    colors.forEach(color => console.log(color));

    return res.status(200).json({ status: 200, data: colors})
   

}
// colorRecognize();



module.exports = {
    colorRecognize
};