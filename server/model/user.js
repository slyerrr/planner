// // grab the things we need
// var mongoose = require('mongoose');
// const passwordHash = require('password-hash');
// var Schema = mongoose.Schema;
//
//
// // var userSchema = new Schema({
// //   name: String,
// //   username: { type: String, required: true, unique: true },
// //   password: { type: String, required: true },
// //   admin: Boolean,
// //   location: String,
// //   meta: {
// //     age: Number,
// //     website: String
// //   },
// //   created_at: Date,
// //   updated_at: Date
// // });
//
// var userSchema = new Schema({
//   email: String,
//   password: String,
//   confirm : Boolean
// })
//
// userSchema.pre('save', function(next) {
//   const user = this;
//   user.password = passwordHash.generate(user.password);
//   next();
// });
//
//
// module.exports = mongoose.model('User', userSchema);
