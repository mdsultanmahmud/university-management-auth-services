// getting-started.js
// const mongoose = require('mongoose');
import { Server } from 'http'
import mongoose from 'mongoose'
import app from './app'
import config from './config'
import { errorLogger, logger } from './shared/logger'
async function dbConnect() {
  let server: Server
  try {
    await mongoose.connect(config.database_url as string)
    logger.info('Database connected')
    server = app.listen(config.port, () => {
      logger.info(`Application is listening on port ${config.port}`)
    })
  } catch (error) {
    errorLogger.error('Failed to connect database')
  }

  // unhandled rejection handling
  process.on('unhandledRejection', async error => {
    console.log('unhandleed rejection, we are closing our server...')
    try {
      if (server) {
        await server.close()
      }
    } catch (err) {
      errorLogger.error('Error while closing the server:', err)
      process.exit(1)
    }
    errorLogger.error(error)
    process.exit(1)
  })
}

dbConnect()
