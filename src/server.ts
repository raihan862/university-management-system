import logger from './logs/setupLoger';
import app from './app';
import config from './config';
import mongoose, { MongooseError } from 'mongoose';
import { Server } from 'http';
import { log } from 'winston';
process.on('uncaughtException', (reason) => {
  console.log('uncaughtException server is closing');

  logger.error(reason);

  process.exit(1);
});

const bostrap = async () => {
  let server: Server;
  try {
    console.log('config.dbUrl', config.dbUrl);

    const connection = await mongoose.connect(config.dbUrl as string);
    logger.info('database connection successfull');

    server = app.listen(config.port, () => {
      logger.info('app is listing on post ' + config.port);
    });
  } catch (error) {
    logger.error(error);
  }
  process.on('unhandledRejection', (reason) => {
    console.log('unhandledRejection server is closing');

    logger.error(reason);
    if (server) {
      server.close();
      process.exit(1);
    } else {
      process.exit(1);
    }
  });
};

bostrap();
