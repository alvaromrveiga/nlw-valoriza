import { IErrorWithStatus, KnownError } from "../KnownError";

export class InvalidTagError extends KnownError implements IErrorWithStatus {
  status = 400;

  constructor() {
    super("Invalid tag name!");
  }
}
