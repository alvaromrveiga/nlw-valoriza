import { getCustomRepository } from "typeorm";
import { InvalidEmailError } from "../errors/user/InvalidEmailError";
import { UserExistsError } from "../errors/user/UserExistsError";
import { UsersRepository } from "../repositories/UsersRepository";
import { hash } from "bcryptjs";
import { sendWelcomeEmail } from "../utils/sendgrid";

interface IUserRequest {
  name: string;
  email: string;
  admin?: boolean;
  password: string;
}

export class CreateUserService {
  async execute({ name, email, admin = false, password }: IUserRequest) {
    const usersRepository = getCustomRepository(UsersRepository);

    if (!email) {
      throw new InvalidEmailError();
    }

    const userAlreadyExists = await usersRepository.findOne({ email });

    if (userAlreadyExists) {
      throw new UserExistsError();
    }

    const passwordHash = await hash(password, 8);

    const user = usersRepository.create({
      name,
      email,
      admin,
      password: passwordHash,
    });

    await usersRepository.save(user);
    sendWelcomeEmail({ toEmail: user.email, name: user.name });

    return user;
  }
}
