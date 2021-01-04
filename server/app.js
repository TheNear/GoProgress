const dbConnect = require("./core/db");
const serverConnect = require("./core/server");

const startServer = async () => {
  try {
    await dbConnect();
    await serverConnect();
  } catch (error) {
    console.log(`Server start failed with error: ${error}`);
  }
}

startServer();