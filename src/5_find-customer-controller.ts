import { FastifyReply } from "fastify";
import { IController } from "./5.1_controller";
import { FindCustomerUseCase } from "./6_find-customer-usecase";

/*  Controller
    Não se comunica diretamente com o Usecase,
    Ao invés disso, recebe no construtor a interface que é implementada
    pelo Usecase desejado. Dessa maneira aderimos a arquitetura limpa,
    evitando acoplamento das camadas e facilitando a troca de componentes

    Aqui faremos validações de input e centralizaremos o tratamento de erros
    Caso repository ou usecase lancem erro, o erro subirá até essa camada
    e será tratado aqui
*/

export class FindCustomerController implements IController {
  constructor (private readonly _usecase: FindCustomerUseCase) { }
  async handle (_, reply: FastifyReply): Promise<any> {
    try {
      const customer = await this._usecase.execute();
      reply.code(200).send({ customer });
    } catch (error) {
      console.log(error);
      reply.status(500).send({ message: "Internal Server Error" });
    };
  };
};