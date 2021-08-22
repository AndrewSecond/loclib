let mongoose = require('mongoose');
let Schema = mongoose.Schema;
let AuthorSchema = new Schema(
    {
        first_name:{type:String, required: true, max: 100},
        family_name: {type:String, required: true, max: 100},
        date_of_birth: {type: Date},
        date_of_death: {type: Date}
    }
);
//virtual property for the full name of the author
AuthorSchema
.virtual('name')
.get(function() {
    return this.family_name + ', ' + this.first_name;
});
// Виртуальное свойство - URL автора
AuthorSchema
.virtual('url')
.get(function () {
  return '/catalog/author/' + this._id;
});

//Export model
module.exports = mongoose.model('Author', AuthorSchema);
