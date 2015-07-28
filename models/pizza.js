module.exports = {
  identity: 'pizza',
  connection: 'pizzaDB',
  attributes: {
    id: {
      type: 'string',
      primaryKey: true,
      unique: true,
      defaultsTo: function() {
        return shortid.generate();
      }
    },
    name: {
      type : 'string',
      required : true
    },
    ingredients: {
      type : 'array',
      required : false
    }
  }
};