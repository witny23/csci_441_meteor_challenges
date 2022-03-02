import {Mongo} from 'meteor/mongo';

export const UP_Collection_Access = new Mongo.Collection('user_posts_collection');

export const Thoughts_Collection_Access = new Mongo.Collection('called random_thoughts');
