import { app } from "./2_app";
const PORT = +process.env.PORT || 3000;

/*  Server
    Entrypoint da API
*/

const run = async () => {
  try {
    await app.listen({ port: PORT });
    app.log.info(`Server running on port: ${PORT}`)
  } catch (error) {
    app.log.error(error);
    process.exit(1);
  };
};

run();