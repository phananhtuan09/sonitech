import logger from "@/server/configs/logger.config";
import type { NextApiResponse } from "next";
import type { NextRequest } from "next/server";
import { parse } from "url";
import { createDirectories } from "./setupFolder";

const handleCheckIsApiResponseError = (dataRes: any) => {
  if (dataRes?.status === false) {
    return true;
  }

  if (dataRes?.error) {
    return true;
  }

  if (dataRes?.errorMessage) {
    return true;
  }
  return false;
};

const requestLogger = (request: NextRequest, responseData: any) => {
  createDirectories("/server/logs/info");
  createDirectories("/server/logs/error");
  const startTime = process.hrtime();
  const [seconds, nanoseconds] = process.hrtime(startTime);
  const duration = (seconds * 1000 + nanoseconds / 1e6).toFixed(3);

  const logMethod = handleCheckIsApiResponseError(responseData)
    ? logger.error
    : logger.info;

  if (process.env.IS_WRITE_LOG === "true") {
    logMethod({
      method: request.method,
      url: request.url,
      body: request.body,
      query: parse(request.url, true)?.query,
      processed: `${duration} ms`,
      response: responseData,
    });
  }
};

export default requestLogger;
