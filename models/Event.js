module.exports = function (sequelize, DataTypes) {
    const Event = sequelize.define("Event", {
        title: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                notEmpty: true
            }
        },
        link: {
            type: DataTypes.STRING,
        },
        description: {
            type: DataTypes.STRING(10000),
            allowNull: false,
            validate: {
                notEmpty: true,
            }
        },
        organization: {
            type: DataTypes.STRING
        },
        street: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                notEmpty: true,
            }
        },
        city: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                notEmpty: true,
            }
        },
        state: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                notEmpty: true,
            }
        },
        zip: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                notEmpty: true,
            }
        },
        going: {
            type: DataTypes.INTEGER,
            defaultValue: 0
        },
        image: DataTypes.STRING,
        needed: {
            type: DataTypes.INTEGER,
            validate: {
                not: ["[a-z]", 'i']
            }
        },
        date: {
            type: DataTypes.STRING
        },
        time: {
            type: DataTypes.STRING
        },
        ampm: {
            type: DataTypes.STRING
        },
        flexible: {
            type: DataTypes.STRING
        }
    });

    Event.associate = (models) => {
        Event.belongsTo(models.User, {
            foreignKey: {
                allowNull: false
            }
        });
    };

    return Event;
};

