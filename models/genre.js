let mongoose = require('mongoose');
let Schema = mongoose.Schema;
let GenreSchema = new Schema(
    {
        name: {type: String, required: true, minLength: 3, maxLength: 100}
    }
);
//virtual property

GenreSchema
.virtual('url')
.get(function() {
  return '/catalog/author/' + this._id;
});

module.exports = mongoose.model("Genre", GenreSchema);