import { Request, Response } from "express";
import { CreateComplimentService } from "../services/CreateComplimentService";

export class CreateComplimentController {
  async handle(request: Request, response: Response) {
    const { message, tag_id, user_receiver } = request.body;
    const { user_id } = request;

    const createComplimentService = new CreateComplimentService();

    const compliment = await createComplimentService.execute({
      message,
      tag_id,
      user_sender: user_id,
      user_receiver,
    });

    return response.json(compliment);
  }
}
