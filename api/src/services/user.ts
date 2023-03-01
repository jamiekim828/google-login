import User, { UserDocument } from "../models/User";

const createOrFindUserByEmail = async(payload: Partial<UserDocument>):Promise<UserDocument | null> => {
    console.log(payload, 'user service payload')
    const userEmail = payload.email
    const result = await User.findOne({email: userEmail})
   if(result) {
    return result
   } else {
    // if no user with that email -> create new user
    const user = new User({
        firstName: payload.firstName,
        lastName: payload.lastName,
        email: payload.email
    })
    return user.save()
   }
}

export default { createOrFindUserByEmail}