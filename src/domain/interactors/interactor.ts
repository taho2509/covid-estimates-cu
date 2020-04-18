import Response from '../entities/response'

export default interface Interactor {
  execute(input: object): Promise<Response>
}
