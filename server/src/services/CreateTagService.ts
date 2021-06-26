import { getCustomRepository } from "typeorm";
import { InvalidTagError } from "../errors/tags/InvalidTagError";
import { TagExistsError } from "../errors/tags/TagExistsError";
import { TagsRepository } from "../repositories/TagsRepository";

export class CreateTagService {
  async execute(name: string) {
    const tagsRepository = getCustomRepository(TagsRepository);

    if (!name) {
      throw new InvalidTagError();
    }

    const tagAlreadyExists = await tagsRepository.findOne({ name });

    if (tagAlreadyExists) {
      throw new TagExistsError();
    }

    const tag = tagsRepository.create({ name });

    await tagsRepository.save(tag);
    return tag;
  }
}
