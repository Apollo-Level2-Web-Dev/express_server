import app from "./app";
import config from "./config";

const port = config.port;

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
