// getting-started.js
// const mongoose = require('mongoose');
import mongoose from 'mongoose'
import app from './app'
import config from './config'
import { errorLogger, logger } from './shared/logger'
async function dbConnect() {
  try {
    await mongoose.connect(config.database_url as string)
    logger.info('Database connected')
    app.listen(config.port, () => {
      logger.info(`Application is listening on port ${config.port}`)
    })
  } catch (error) {
    errorLogger.error('Failed to connect database')
  }
}

dbConnect()
