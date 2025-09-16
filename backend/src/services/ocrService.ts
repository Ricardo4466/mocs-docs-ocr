import Tesseract from "tesseract.js";

export default async function extractText(filePath: string): Promise<string> {
  const {
    data: { text },
  } = await Tesseract.recognize(filePath, "eng");
  return text;
}
