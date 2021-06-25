import { Request, Response } from "express";
import { CreateTagService } from "../services/CreateTagService";

export class CreateTagController {
  async handle(request: Request, response: Response) {
    const createTagService = new CreateTagService();

    const tag = await createTagService.execute(request.body.name);

    return response.json(tag);
  }
}
