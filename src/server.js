import envVariables from "./configs/envConfig.js";
import app from "./app.js";

const PORT = envVariables.PORT || 5000;
app.listen(PORT, async () => {
  console.log("connected");
});
