const dbConnect = require("./core/db");
const apolloStart = require("./core/apolloServer");
const { serverConnect, app } = require("./core/server");
const { PORT } = require("./core/config");
const { CONSOLE_RED, CONSOLE_GREEN } = require("./helpers/cosnoleColor");

const startServer = async () => {
  try {
    await dbConnect();
    await apolloStart(app);
    await serverConnect();
    console.log(CONSOLE_GREEN, `Server started on PORT: ${PORT}`);
  } catch (error) {
    console.log(CONSOLE_RED, "Server start failed with error:", `${error}`);
  }
}

startServer();