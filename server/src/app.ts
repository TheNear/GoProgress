import { dbConnect } from "./core/db";
import { apolloStart } from "./core/apolloServer";
import { app, serverConnect } from "./core/server";
import { CONSOLE } from "./helpers/cosnoleColor";
import { PORT } from "./core/config";

const startServer = async () => {
  try {
    await dbConnect();
    await apolloStart(app);
    await serverConnect();
    console.log(CONSOLE.GREEN, `Server started on PORT: ${PORT}`);
  } catch (error) {
    console.log(CONSOLE.RED, "Server start failed with error:", `${error}`);
  }
};

startServer();
