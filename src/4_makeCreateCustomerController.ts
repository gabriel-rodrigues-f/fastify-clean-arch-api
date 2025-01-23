import { IController } from "./5.1_controller";
import { FindCustomerController } from "./5_find-customer-controller";
import { FindCustomerUseCase } from "./6_find-customer-usecase";
import { CustomerRepository } from "./7_customer-repository";

/*  Container Injection
    Padrão utilizado para instânciar e resolver as dependências de implementações
    concretas
*/

export const makeCreateCustomerController = (): IController => {
  const repository = new CustomerRepository();
  const usecase = new FindCustomerUseCase(repository);
  const controller = new FindCustomerController(usecase);
  return { handle: controller.handle.bind(controller) };
};
