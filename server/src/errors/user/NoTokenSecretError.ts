import { IErrorWithStatus, KnownError } from "../KnownError";

export class NoTokenSecretError extends KnownError implements IErrorWithStatus {
  status = 500;

  constructor() {
    super("There is no JWT_SECRET declared in the environment");
  }
}
