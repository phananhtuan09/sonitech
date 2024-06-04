import { createLogger, format } from "winston";
import DailyRotateFile from "winston-daily-rotate-file";
import path from "path";

const logFormat = (timestamp, level, message) => {
  let msg = `[${timestamp}] [${level}] `;
  if (typeof message === "object") {
    const msgDetails = [
      `Method: ${message.method}`,
      `Url: ${message.url}`,
      `Body: ${JSON.stringify(message.body)}`,
      `Query: ${JSON.stringify(message.query)}`,
      `Processed: ${JSON.stringify(message.processed)}`,
      `Response: ${JSON.stringify(message.response)}`,
    ];
    msg += `${msgDetails.join("\t")}`;
  } else {
    msg += message;
  }
  return msg;
};

const logger = createLogger({
  level: "info",
  format: format.combine(
    format.timestamp({
      format: "YYYY-MM-DD HH:mm:ss",
    }),
    format.printf(({ timestamp, level, message }) =>
      logFormat(timestamp, level, message)
    )
  ),
  transports: [
    // Rotate error logs
    new DailyRotateFile({
      filename: path.resolve("server/logs/error/error-%DATE%.log"),
      datePattern: "YYYY-MM-DD",
      level: "error",
      maxSize: "10m",
      maxFiles: "365d",
    }),
    // Rotate info logs
    new DailyRotateFile({
      filename: path.resolve("server/logs/info/info-%DATE%.log"),
      datePattern: "YYYY-MM-DD",
      maxSize: "10m",
      maxFiles: "365d",
    }),
  ],
  exceptionHandlers: [
    new DailyRotateFile({
      filename: path.resolve("server/logs/error/error-%DATE%.log"),
      datePattern: "YYYY-MM-DD",
      maxSize: "10m",
      maxFiles: "365d",
    }),
  ],
  rejectionHandlers: [
    new DailyRotateFile({
      filename: path.resolve("server/logs/error/error-%DATE%.log"),
      datePattern: "YYYY-MM-DD",
      maxSize: "10m",
      maxFiles: "365d",
    }),
  ],
});

export default logger;
