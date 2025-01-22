import { FastifyReply, FastifyRequest } from "fastify";

/*  Controller (Interface)
    Modelo de assinatura para todas as Controllers da API
    (todas as Controllers devem implementar essa classe)
*/

export interface IController {
  handle: (request: FastifyRequest, reply: FastifyReply) => Promise<any>;
};