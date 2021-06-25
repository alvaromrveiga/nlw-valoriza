import { IErrorWithStatus, KnownError } from "../KnownError";

export class SameSenderReceiverError
  extends KnownError
  implements IErrorWithStatus
{
  status = 400;

  constructor() {
    super("You cannot send a compliment to yourself!");
  }
}
