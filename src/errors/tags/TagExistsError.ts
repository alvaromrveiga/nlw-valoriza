import { IErrorWithStatus, KnownError } from "../KnownError";

export class TagExistsError extends KnownError implements IErrorWithStatus {
  status = 400;

  constructor() {
    super("Tag already exists!");
  }
}
