var bedwetterOptions = {}

module.exports = [{
  // return all pizza items
  path: '/pizza',
  method: 'GET',
  config: {
      handler: {
          bedwetter: bedwetterOptions
      }
  }
}, {
  // return a specific pizza by id
  path: '/pizza/{id}',
  method: 'GET',
  config: {
      handler: {
          bedwetter: bedwetterOptions
      }
  }
}, {
  // create a new pizza
  path: '/pizza',
  method: 'POST',
  config: {
      handler: {
          bedwetter: bedwetterOptions
      }
  }
}, {
  // udpate an existing pizza by id
  path: '/pizza/{id}',
  method: ['PATCH', 'POST'],
  config: {
      handler: {
          bedwetter: bedwetterOptions
      }
  }
}, {
  // remove a pizza by id
  path: '/pizza/{id}',
  method: 'DELETE',
  config: {
      handler: {
          bedwetter: bedwetterOptions
      }
  }
}];
