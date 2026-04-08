import app from "./src/app.js";
import dotenv from 'dotenv'

dotenv.config()

const PORT = process.env.PORT || 3030;

app.listen(PORT, () => {
  console.log(`🚀 Server corriendo en http://localhost:${PORT}`);
});