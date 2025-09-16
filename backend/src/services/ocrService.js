import Tesseract from "tesseract.js";

export default async function extractText(filePath) {
  const {
    data: { text },
  } = await Tesseract.recognize(filePath, "eng");
  return text;
}
