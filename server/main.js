import { Meteor } from 'meteor/meteor';
import '../imports/api/collection';
import '../imports/startup/accounts-config';
import { Activities } from '../imports/api/collection';

Meteor.publish('Activity.all', function() {
  return Activities.find({});
});

Meteor.publish('Activity.one', function(id) {
  return Activities.find({_id: id});
});

Meteor.publish('Avatar.some', function(ids) {
  return Meteor.users.find({_id: {$in: ids}}, {profile: 1});
});