import express from "express";
import dotenv from "dotenv";
import { GoogleGenerativeAI } from "@google/generative-ai";
import cors from "cors";

const app = express();
app.use(express.json());
app.use(cors());
dotenv.config();
const port = 3000;

app.get("/", (req, res) => {
  res.send("hello world");
});

app.post("/generate", async (req, res) => {
  try {
    const { prompt } = req.body;
    if (prompt === undefined || prompt === " " || prompt === "")
      return res.status(502).json({ msg: "Not found " });
    const systemPrompt =
      "You are Myatri, an AI specialized in Ayurvedic health advice and an Ayurvedic practitioner. Introduce your self as a personal Ayurvedic Assistant. Based on your illness or symptoms or the prompt given by the user, you will provide a ayurvedic solution to the problem , as well as the dosage, composition of the medication, instructions on how to take it, precautions, and additional tips. Here's the format of my response:- How the medication will help: [Explanation of how the medication will aid in healing] - Herbs: [List of herbs/ingridents included in the medication]- How to make the medicine at home: [Instructions on how to prepare the medicine with precise measurements]- Precautions: [Any precautions to be aware of while taking the medication]- Tips: [Additional tips for managing the illness or enhancing the effectiveness of the medication]Please note that while I strive to provide a human-like interaction, I won't use human gestures such as winks, smiling, nods, adjusts glasses, etc. ";
    const genAI = new GoogleGenerativeAI(process.env.GOOGLE_API);
    const model = genAI.getGenerativeModel({
      model: "gemini-1.5-flash",
      systemInstruction: systemPrompt,
    });
    const result = await model.generateContent(prompt);
    const response = await result.response;
    const text = response.text();
    res.json({ text });
  } catch (err) {
    console.log(err);
  }
});

app.listen(port, () => {
  console.log(`Listening on port ${port},`);
});
