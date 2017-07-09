const Sequelize = require('sequelize')

module.exports = (() => {
  let sequelize

  if (process.env.NODE_ENV === 'production') {
    sequelize = new Sequelize('postgres://user:pass@example.com:5432/dbname')
  } else {
    sequelize = new Sequelize('database_development', '', '', {
      dialect: 'sqlite',
      storage: 'db/database.sqlite'
    })
  }

  return sequelize
})()
