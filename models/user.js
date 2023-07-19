import { Schema, model, models } from 'mongoose';

const UserSchema = new Schema({
  email: {
    type: String,
    unique: [true, 'El email ya existe!'],
    required: [true, 'Email es obligatorio!'],
  },
  username: {
    type: String,
    required: [true, 'Nombre de usuario es obligatorio!'],
    match: [ /^(?=.{8,20}$)(?![_.])(?!.*[_.]{2})[a-zA-Z0-9._é]+(?<![_.])$/, "Username invalid, it should contain 8-20 alphanumeric letters and be unique!"]
  },
  image: {
    type: String,
  }
});

const User = models.User || model("User", UserSchema);

export default User;