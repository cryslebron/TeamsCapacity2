const Sequelize = require('sequelize')
const sequelize = require('../util/database')

const Employee = sequelize.define('employee', {
  id: {
      type: Sequelize.INTEGER,
      autoIncrement: true,
      allowNull: false,
      primaryKey: true
  },
  name: {
      type: Sequelize.STRING,
      allowNull: false
  },
  title: {
      type: Sequelize.STRING
  },
  time: {
      type: Sequelize.INTEGER
  },
  teamId: {
    type: Sequelize.INTEGER
  }
})

const Team = sequelize.define('team', {
  id: {
      type: Sequelize.INTEGER,
      autoIncrement: true,
      allowNull: false,
      primaryKey: true
  },
  teamName: {
      type: Sequelize.STRING,
      allowNull: false
  }
})


const User = sequelize.define('user', {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    username: {
        type: Sequelize.STRING,
        allowNull: false,
        unique: true
    },
    password: {
        type: Sequelize.STRING,
        allowNull: false
    },
    email: {
        type: Sequelize.STRING,
        allowNull: false
    }
})

const Sprint = sequelize.define('sprint', {
  id: {
      type: Sequelize.INTEGER,
      autoIncrement: true,
      allowNull: false,
      primaryKey: true
  },
  sprintName: {
      type: Sequelize.INTEGER,
      allowNull: false
  },
  startDate: {
      type: Sequelize.DATE,
      allowNull: false
  },
  endDate: {
      type: Sequelize.DATE,
      allowNull: false
  },
  teamId: {
    type: Sequelize.INTEGER
  }
})


//associations
Team.hasMany(Employee);
Employee.belongsTo(Team);

Team.hasMany(Sprint);
Sprint.belongsTo(Team);

Employee.belongsToMany(Sprint, { through: 'employee_sprint' });
Sprint.belongsToMany(Employee, { through: 'employee_sprint' });

User.belongsToMany(Team, { through: 'user_team' });
Team.belongsToMany(User, { through: 'user_team' });

module.exports = {
  Employee,
  Team,
  User,
  Sprint
}