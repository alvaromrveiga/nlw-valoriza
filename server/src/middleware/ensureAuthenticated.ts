import { NextFunction, Request, Response } from "express";
import { verify } from "jsonwebtoken";
import { NoTokenSecretError } from "../errors/user/NoTokenSecretError";

interface IPayLoad {
  sub: string;
}

export function ensureAuthenticated(
  request: Request,
  response: Response,
  next: NextFunction
) {
  const bearer = request.headers.authorization;

  if (!bearer) {
    return response.status(401).end(); // mensagem padrão 401
  }

  const [, token] = bearer.split(" ");

  if (!process.env.JWT_SECRET) {
    throw new NoTokenSecretError();
  }

  try {
    const { sub } = verify(token, process.env.JWT_SECRET) as IPayLoad;

    request.user_id = sub;

    return next();
  } catch (err) {
    return response.status(401).end();
  }
}
