import express from "express";
import path from "path";
import { fileURLToPath } from "url";
import dotenv from "dotenv";

dotenv.config();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();

// Middleware Ayarları
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "../public")));

// Statik HTML Dosyaları için Yönlendirme (Views)
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "../views/index.html"));
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Sir, sunucu ${PORT} portunda hazır!`);
});
