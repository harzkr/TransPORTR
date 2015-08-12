Meteor.publish('orders', function () {
  return Orders.find({
    $or: [
      { owner: this.userId },
      {owner: {$exists: true}}
    ]
  });
});
