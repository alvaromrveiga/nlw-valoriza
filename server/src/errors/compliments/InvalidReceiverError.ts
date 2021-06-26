import { IErrorWithStatus, KnownError } from "../KnownError";

export class InvalidReceiverError
  extends KnownError
  implements IErrorWithStatus
{
  status = 400;

  constructor() {
    super("Invalid user receiver!");
  }
}
