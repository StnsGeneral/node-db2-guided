module.exports = {
  development: {
    client: 'sqlite3',
    connection: {
      filename: './data/produce.db3', // with others it'd be a URL
    },
    useNullAsDefault: true, // only required in sqlite
    migrations: {
      directory: './data/migrations',
    },
    seeds: {
      directory: './data/seeds'
    },
  },
  production: {},
  staging: {},
  testing: {},
}
