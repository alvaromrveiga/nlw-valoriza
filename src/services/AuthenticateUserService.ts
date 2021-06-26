import { getCustomRepository } from "typeorm";
import { InvalidUserCredentials } from "../errors/user/InvalidUserCredentialsError";
import { UsersRepository } from "../repositories/UsersRepository";
import { compare } from "bcryptjs";
import { sign } from "jsonwebtoken";
import { NoTokenSecretError } from "../errors/user/NoTokenSecretError";

interface IAuthenticateRequest {
  email: string;
  password: string;
}

export class AuthenticateUserService {
  async execute({ email, password }: IAuthenticateRequest) {
    const usersRepository = getCustomRepository(UsersRepository);

    const user = await usersRepository.findOne({ email });

    if (!user) {
      throw new InvalidUserCredentials();
    }

    const passwordMatch = await compare(password, user.password);

    if (!passwordMatch) {
      throw new InvalidUserCredentials();
    }

    if (!process.env.JWT_SECRET) {
      throw new NoTokenSecretError();
    }

    const token = sign(
      {
        email: user.email,
      },
      process.env.JWT_SECRET,
      { subject: user.id, expiresIn: "1d" }
    );

    return token;
  }
}
