import { Customer } from "./8_customer";;
import mockCustomers from "./7.1_mock-customers";

export interface IFindCustomerRepository {
  findFirst: () => Promise<Customer[]>;
};

/*  Repository
    Ao contrário das Controllers e dos Usecases, os repositories devem conter
    todos os métodos necessários para a sua API que estejam relacionados com
    determinada entidade (neste caso, customer). 

    O Repository (ou Gateway), representa nossa interface com o sistema externo
    por esse motivo a classe é uma só, ao invés de termos repositories
    específicos para cada método, como fazemos com os usecases e com as
    controllers.
*/

export class CustomerRepository implements IFindCustomerRepository {
  async findFirst (): Promise<Customer[]> {
    return await Promise.resolve(mockCustomers);
  };

  /* 
    demais métodos relacionados a customer devem estar presentes
    nessa classe
  */
};