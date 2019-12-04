

module.exports = function (sequelize, DataTypes) {
  var User = sequelize.define("User", {
    // Giving the Author model a name of type STRING
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    first_name: {
      type: DataTypes.STRING
    },
    last_name: {
      type: DataTypes.STRING
    },
    email: {
      type: DataTypes.STRING
    },
    kind: {
      type: DataTypes.STRING
    },
    password: {
      type: DataTypes.STRING
    },
    created: {
      type: DataTypes.DATE,
      defaultValue: DataTypes.NOW
    }
  },
    {
      timestamps: false
    }

  );

  User.associate = function (models) {
    User.hasOne(models.Volunteer, {
      onDelete: "cascade"
    });
    User.hasOne(models.Seeker, {
      onDelete: "cascade"
    });
    User.hasMany(models.Event, {
    });

  };

  return User;
};


