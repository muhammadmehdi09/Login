import mongoose from 'mongoose';

const UserSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      min: 3,
      max: 20,
      unique: true,
      required: true
    },
    email: {
      type: String,
      max: 50,
      unique: true,
      required: true
    },
    password: {
      type: String,
      min: 5,
      required: true
    }
    // profilePicture: {
    //   type: String,
    //   default: ""
    // }
  }
)

const User = mongoose.model("Users", UserSchema);
export default User