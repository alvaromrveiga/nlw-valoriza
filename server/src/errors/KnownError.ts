export interface IErrorWithStatus {
  status: number;
}

export class KnownError extends Error implements IErrorWithStatus {
  status: number;

  constructor(message: string) {
    super(message);

    // Necessary to use if(error === instanceof KnownError)
    // https://github.com/Microsoft/TypeScript/wiki/Breaking-Changes#extending-built-ins-like-error-array-and-map-may-no-longer-work
    Object.setPrototypeOf(this, KnownError.prototype);
  }
}
