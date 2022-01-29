import { Schema, model, Types } from "mongoose";

const UserSchema = new Schema(
  {
    userName: {
      type: String,
      unique: true,
      required: [true, "You must enter a User Name."],
      trim: true,
    },
    email: {
      type: String,
      required: [true, "You must enter a valid email."],
      unique: true,
      // validate:
    },
    thoughts: [
      {
        type: Schema.Types.ObjectId,
        ref: "Thoughts",
      },
    ],
    friends: [
      {
        type: Schema.Types.ObjectId,
        ref: "User",
      },
    ],
  },
  {
    toJSON: {
      virtuals: true,
      getters: true,
    },
    id: false,
  }
);

UserSchema.virtual("replyCount").get(function () {
  return this.friends.length;
});

const User = model("User", UserSchema);

module.exports = User;
