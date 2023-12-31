import mongoose, { ValidationError } from 'mongoose'
import { IGenericErrorResponse } from '../interfaces/common'
import { IGenericErrorMessage } from '../interfaces/error'

const handleValidationError = (
  err: mongoose.Error.ValidationError,
): IGenericErrorResponse => {
  const errors: IGenericErrorMessage[] = Object.values(err.errors).map(
    (el: ValidationError) => {
      return {
        path: el?.path,
        message: el?.message,
      }
    },
  )

  return {
    statusCode: 400,
    message: 'Validation Error',
    errorMessages: errors,
  }
}

export default handleValidationError
