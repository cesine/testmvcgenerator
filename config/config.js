var path = require('path'),
    rootPath = path.normalize(__dirname + '/..'),
    env = process.env.NODE_ENV || 'development';

var config = {
  development: {
    root: rootPath,
    app: {
      name: 'testmvcgenerator'
    },
    port: process.env.PORT || 3000,
    db: 'sqlite://localhost/testmvcgenerator-development',
    storage: rootPath + '/data/testmvcgenerator-development'
  },

  test: {
    root: rootPath,
    app: {
      name: 'testmvcgenerator'
    },
    port: process.env.PORT || 3000,
    db: 'sqlite://localhost/testmvcgenerator-test',
    storage: rootPath + '/data/testmvcgenerator-test'
  },

  production: {
    root: rootPath,
    app: {
      name: 'testmvcgenerator'
    },
    port: process.env.PORT || 3000,
    db: 'sqlite://localhost/testmvcgenerator-production',
    storage: rootPath + 'data/testmvcgenerator-production'
  }
};

module.exports = config[env];
