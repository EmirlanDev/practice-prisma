import buildServer from "./app";

const startServer = () => {
  const server = buildServer();
  try {
    const PORT = process.env.PORT;
    server.listen({ port: PORT, host: "0.0.0.0" }, () => {
      console.log(`${new Date()}`);
      console.log(`Server Listen on http://localhost:${PORT}`);
    });
  } catch (error) {
    console.log(`Error in ${error}`);
    process.exit(1);
  }
};
startServer();
