import config from '../../../config'
import ApiError from '../../../error/ApiError'
import { IUser } from './users.interface'
import { User } from './users.model'
import { generateUserId } from './users.utils'

// get all user from the DB
export const getAllUsersDB = async () => {
  const users = await User.find({})
  return users
}

// create user in the DB
export const createUserDB = async (user: IUser): Promise<IUser | null> => {
  /**
   * auto generated incremental id
   * default student password
   */
  const id = await generateUserId()
  user.id = id
  if (!user.password) {
    user.password = config.default_user_pass as string
  }

  const createdUser = await User.create(user)
  if (!createdUser) {
    throw new ApiError(400, 'User is not created!!')
  }
  return createdUser
}
