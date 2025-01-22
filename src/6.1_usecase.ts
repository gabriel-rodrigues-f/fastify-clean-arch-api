/*  Usecase (Interface)
    Modelo de assinatura para todos os Usecases da API
    (todos os Usecases devem implementar essa classe)
*/

export interface IUsecase {
  execute (params?: any): Promise<any>;
};