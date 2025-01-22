import { IUsecase } from "./6.1_usecase";
import { IFindCustomerRepository } from "./7_customer-repository";

/*  Usecase
    Nessa camada implementamos regras de negócio
    Aqui não deve haver tratamento de erros com trycatch

    Não é recomendável utilizar frameworks diretamente nesta camada, ao 
    invés disso, é preferível invocar classes através da inversão de
    dependência

    ** Usecases são classes específicas, portanto o nome da classe
    deve definir aquilo que ela faz e ela conterá apenas um método, chamado
    'execute', adotando o mesmo padrão das Controllers, que possuem apenas
    um método (handle)
*/

export class FindCustomerUseCase implements IUsecase {
  constructor (private readonly _repository: IFindCustomerRepository) { }
  async execute () {
    return await this._repository.findFirst();
  };
};