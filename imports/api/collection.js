import { Meteor } from 'meteor/meteor';

export const Activities = new Mongo.Collection('activities');

Meteor.methods({
  'activity.add'(title, description, location, memberCapacity, attendance, startDate, endDate) {
    var id = new Mongo.ObjectID().toHexString();
    Activities.insert({_id: id, createdAt: new Date(), title, description, start: new Date(startDate), end: new Date(endDate), location, memberCapacity: parseInt(memberCapacity), attendance, participators: [], participatorCount: 0, attendanceRecords: []});
    return id;
  },
  'activity.update'(id, title, description, location, memberCapacity, attendance, startDate, endDate) {
    Activities.update({_id: id}, {$set: {modifiedAt: new Date(), title, description, start: startDate, end: endDate, location, memberCapacity: parseInt(memberCapacity), attendance}});
    return id;
  },
  'activity.apply'(userId, activityId) {
    Activities.update({_id: activityId}, {$addToSet: {participators: userId}});
    var participatorCount = Activities.find({_id: activityId}).fetch()[0].participators.length;
    Activities.update({_id: activityId}, {$set: {participatorCount: participatorCount}});
    var profile = Meteor.users.find({_id: userId}).fetch()[0].profile;
    if (!profile.activities.some((id) => {
      return id == activityId;
    })) {
      profile.activities.push(activityId);
      Meteor.users.update({_id: userId}, {$set: {profile: profile}});
    }
  }
});