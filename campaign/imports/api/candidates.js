import {Mongo} from 'meteor/mongo';
// Mongo is the named export from meteor/mongo


// to create a collection we use the new constructor function
export const Candidates = new Mongo.Collection('candidates');
                                // candidates will be the name of the collection
