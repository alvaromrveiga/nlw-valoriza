import { IErrorWithStatus, KnownError } from "../KnownError";

export class UserExistsError extends KnownError implements IErrorWithStatus {
  status = 400;

  constructor() {
    super("User Already exists!");
  }
}
