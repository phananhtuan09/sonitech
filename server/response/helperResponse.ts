import { NextApiResponse } from "next";
import { z, ZodError } from "zod";
import { Prisma } from "@prisma/client";
import requestLogger from "../middlewares/requestLogger";
import type { NextRequest } from "next/server";

export class ResponseSuccess<Data = any> {
  statusCode: number;
  data: Data;
  request: NextRequest;

  constructor(statusCode = 200, data: Data, request: NextRequest) {
    this.statusCode = statusCode;
    this.data = data;
    this.request = request;
  }

  send(resFn: any): Response {
    const resData = { ...this.data, status: true };
    requestLogger(this.request, resData);
    return resFn(resData, {
      status: this.statusCode,
    });
  }
}

export class ResponseErrorAuth {
  errorMessage: string;

  constructor(errorMessage: string) {
    this.errorMessage = errorMessage;
  }

  send(res: any): void {
    res.status(401).json({
      code: "404",
      msg: this.errorMessage,
    });
  }
}

export class ResponseError {
  statusCode: number;

  errorMessage: string;

  error?: any;

  constructor(statusCode = 500, errorMessage: string, error?: any) {
    this.errorMessage = this.getErrorMessage(errorMessage, error);
    this.statusCode = statusCode;
    this.error = error;
  }

  send(res: NextApiResponse): void {
    res.status(this.statusCode).json({
      errorMessage: this.errorMessage,
      status: false,
    });
  }

  getZodErrorMessage(error: ZodError): string {
    const errorMessageArr: string[] = [];
    const { errors } = error;
    if (Array.isArray(errors)) {
      errors.forEach((err) => {
        if (typeof err?.message === "string") {
          errorMessageArr.push(err?.message);
        }
      });
    }

    if (Array.isArray(errorMessageArr) && errorMessageArr.length > 0) {
      return errorMessageArr.join(", ");
    }

    return "";
  }

  getPrismaErrorMessage(error: any, defaultMessage: string): string {
    if (defaultMessage) {
      return defaultMessage;
    }
    return error?.message;
  }

  getErrorMessage(errorMessage: string, error: any) {
    if (error instanceof z.ZodError) {
      return this.getZodErrorMessage(error);
    }

    if (
      error instanceof Prisma.PrismaClientKnownRequestError ||
      error instanceof Prisma.PrismaClientValidationError ||
      error instanceof Prisma.PrismaClientInitializationError ||
      error instanceof Prisma.PrismaClientRustPanicError ||
      error instanceof Prisma.PrismaClientUnknownRequestError
    ) {
      return this.getPrismaErrorMessage(error, errorMessage);
    }

    if (errorMessage) {
      return errorMessage;
    }

    if (error?.message && typeof error?.message === "string") {
      return error?.message;
    }
    return "An error occurred";
  }
}
