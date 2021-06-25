import { IErrorWithStatus, KnownError } from "../KnownError";

export class InvalidUserCredentials
  extends KnownError
  implements IErrorWithStatus
{
  status = 400;

  constructor() {
    super("Incorrect email/password!");
  }
}
