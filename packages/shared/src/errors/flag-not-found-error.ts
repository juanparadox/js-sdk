import { OpenFeatureError } from './open-feature-error-abstract';
import { ErrorCode } from '../evaluation';

export class FlagNotFoundError extends OpenFeatureError {
  code: ErrorCode;
  constructor(message?: string) {
    super(message);
    Object.setPrototypeOf(this, FlagNotFoundError.prototype);
    this.name = 'FlagNotFoundError';
    this.code = ErrorCode.FLAG_NOT_FOUND;
  }
}
