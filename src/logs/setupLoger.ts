import winston, { format } from 'winston';
import path from 'path';
const { combine, simple, colorize, timestamp, align, printf, cli, json } = format;

const filterError = winston.format((info, opts) => {
  return info.level === 'error' ? info : false;
});
const filterInfo = winston.format((info, opts) => {
  return info.level === 'info' ? info : false;
});
const customInfoFormat = combine(
  filterInfo(),
  timestamp({
    format: 'YYYY-MM-DD hh:mm:ss.SSS A', // 2022-01-25 03:23:10.350 PM
  }),

  align(),
  printf((info) => `${info.timestamp}:${info.level}=>${info.message}`),
);
const customErrorFormat = combine(
  filterError(),
  timestamp({
    format: 'YYYY-MM-DD hh:mm:ss.SSS A', // 2022-01-25 03:23:10.350 PM
  }),

  align(),
  printf((info) => `${info.timestamp}:${info.level}=>${info.message}`),
);
const customCombineFormat = combine(
  timestamp({
    format: 'YYYY-MM-DD hh:mm:ss.SSS A', // 2022-01-25 03:23:10.350 PM
  }),

  align(),
  printf((info) => `${info.timestamp}:${info.level}=>${info.message}`),
);
const logger = winston.createLogger({
  level: 'info',

  format: customCombineFormat,
  transports: [
    new winston.transports.Console(),
    new winston.transports.File({
      filename: path.join(__dirname, 'Combiled', 'combined.log'),
    }),
    new winston.transports.File({
      filename: path.join(__dirname, 'Info', 'info.log'),
      level: 'info',
      format: customInfoFormat,
    }),
    new winston.transports.File({
      filename: path.join(__dirname, 'Errors', 'error.log'),
      level: 'error',
      format: customErrorFormat,
    }),
  ],
});
export default logger;
