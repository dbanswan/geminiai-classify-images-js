const { GoogleGenerativeAI } = require("@google/generative-ai");
const fs = require("fs");
const mime = require("mime-types");
require("dotenv").config();

const googleAI = new GoogleGenerativeAI(process.env.API_KEY);

function convertImagesToBase64(imagePath) {
  try {
    const base64 = {
      inlineData: {
        data: Buffer.from(fs.readFileSync(imagePath)).toString("base64"),
        mimeType: mime.lookup(imagePath),
      },
    };
    return base64;
  } catch (error) {
    console.log(error);
    return null;
  }
}

async function compareImages() {
  const image1 = "normalchestxray.jpeg";
  const image2 = "chestcancerxray.jpg";
  const model = googleAI.getGenerativeModel({ model: "gemini-1.5-pro-latest" });

  const base64Image1 = convertImagesToBase64(image1);
  const base64Image2 = convertImagesToBase64(image2);

  const result = await model.generateContent([
    `Compare the following two images and provide a detailed comparison.`,
    [base64Image1, base64Image2],
  ]);
  const response = await result.response;
  const text = response.text();
  console.log(text);
}

compareImages();
