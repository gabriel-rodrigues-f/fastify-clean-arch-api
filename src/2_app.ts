import Fastify from "fastify";
import { customerRoutes } from "./3_customer-routes";

const app = Fastify({ logger: true });

/*  App
    Configuração da API

    Aqui devemos registrar rotas e middlewares globais da nossa api,
    como helmet, cors e etc
*/

app.register(customerRoutes);

export { app };