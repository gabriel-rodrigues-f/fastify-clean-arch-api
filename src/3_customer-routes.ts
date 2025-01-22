import { FastifyInstance } from "fastify";
import { makeCreateCustomerController } from "./4_container-injection";

/*  route
    Exposição de recursos REST da nossa API
*/

export async function customerRoutes (fastify: FastifyInstance) {
  fastify.get('/customer', makeCreateCustomerController().handle);
};