//import mongoose and bcrypt
var mongoose = require('mongoose');

var Schema = mongoose.Schema; // Schema object

var ContactSchema = new Schema({
        name: String,
        email: String,
        number:Number,
        salt: String,
        provider: String,
        providerId: String,
        providerData: {},
        created: Number,
        updated: Number
    },
    {
        collection: 'contactInfo'
    });

module.exports = mongoose.model('Contact', ContactSchema);

//!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!//
//var cSchema = mongoose.Schema;
//var ContSchema = new cSchema({
//		email: String,
//		contact: Number,
//		displayName: String,
////		salt: String,
//	provider: String,
//	providerId: String,
//	providerData: {},
//	created: Number,
//	updated: Number
//},
//{
//		collection: 'contactInfo'
//	});
//module.exports = mongoose.model('Contact', ContSchema);
