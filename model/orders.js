Orders = new Mongo.Collection("orders");

Orders.allow({
  insert: function (userId, order) {
    return userId && order.owner === userId;
  },
  update: function (userId, order, fields, modifier) {
    return userId && order.owner === userId;
  },
  remove: function (userId, order) {
    return userId && order.owner === userId;
  }
});
Meteor.methods({

  addOrder: function (Order) {

    // Make sure the user is logged in before inserting a task

    if (! Meteor.userId()) {
      throw new Meteor.Error('not-authorized');
    }
    Orders.insert({

      title: Order.title,
      description: Order.description,
      to: Order.to,
      from: Order.from,
      freight: Order.freight,
      date: Order.date,
      trucks: [Order.truck, Order.truck1, Order.truck2, Order.truck3],
      trucki: Order.trucki,
      createdAt: new Date(),

      owner: Meteor.userId(),

      username: Meteor.user().username

    });

}

});
