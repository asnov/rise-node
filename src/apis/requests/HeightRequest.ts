import { BaseRequest } from './BaseRequest';
import { injectable } from 'inversify';

@injectable()
export class HeightRequest extends BaseRequest<void, void> {
  protected readonly method = 'GET';
  protected readonly baseUrl = '/peer/height';
}