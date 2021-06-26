import { IErrorWithStatus, KnownError } from "../KnownError";

export class NoSendGridEnvError extends KnownError implements IErrorWithStatus {
  status = 500;

  constructor() {
    super(
      "There is no SENDGRID_API_KEY or/and _EMAIL declared in the environment"
    );
  }
}
