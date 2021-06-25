import { IErrorWithStatus, KnownError } from "../KnownError";

export class InvalidEmailError extends KnownError implements IErrorWithStatus {
  status = 400;

  constructor() {
    super("Invalid email!");
  }
}
