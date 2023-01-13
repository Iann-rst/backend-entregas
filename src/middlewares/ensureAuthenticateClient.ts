import { NextFunction, Request, Response } from "express";
import { verify } from "jsonwebtoken";

interface IPayload {
  sub: string;
}


export async function ensureAuthenticateClient(request: Request, response: Response,
  next: NextFunction) {

  const authHeader = request.headers.authorization;

  if (!authHeader) {
    return response.status(201).json({ message: "Token missing" })
  }

  const [, token] = authHeader.split(" ");


  try {
    const { sub } = verify(token, "26968fcb38dfb857dbbece44a9660f35") as IPayload;

    request.id_client = sub;

    return next();

  } catch (err) {
    return response.status(401).json({
      message: "Invalid Token"
    })
  }
}