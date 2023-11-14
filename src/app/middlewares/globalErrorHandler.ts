import { ErrorRequestHandler } from 'express'
import config from '../../config'
import ApiError from '../../error/ApiError'
import handleValidationError from '../../error/handleValidationError'
import { IGenericErrorMessage } from '../../interfaces/error'

export const globalErrorHanlder: ErrorRequestHandler = (
  error,
  req,
  res,
  next,
) => {
  let statusCode = 500
  let message = 'Something went wrong!!'
  let errorMassages: IGenericErrorMessage[] = []

  if (error.name == 'ValidationError') {
    const validateErr = handleValidationError(error)
    statusCode = validateErr?.statusCode
    message = validateErr?.message
    errorMassages = validateErr?.errorMessages
  } else if (error instanceof ApiError) {
    statusCode = error?.statusCode
    message = error?.message
    errorMassages = error?.message
      ? [
          {
            path: '',
            message: error?.message,
          },
        ]
      : []
  } else if (error instanceof Error) {
    message = error?.message
    errorMassages = error?.message
      ? [
          {
            path: '',
            message: error?.message,
          },
        ]
      : []
  }
  res.status(statusCode).json({
    success: false,
    message,
    errorMassages,
    stack: config.env != 'production' ? error?.stack : undefined,
  })
  next()
}
