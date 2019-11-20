module.exports = function (sequelize, DataTypes) {
    const Event = sequelize.define("Event", {
        title: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                notEmpty: true
            }
        },
        date: {
            type: DataTypes.DATEONLY,
            allowNull: false,
            validate: {
                notEmpty: true,
                isDate: true
            }
        },
        time: {
            type: DataTypes.TIME,
            allowNull: false,
            validate: {
                notEmpty: true,
            }
        },
        description: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                notEmpty: true,
            }
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
        image: DataTypes.STRING,
        needed: {
            type: DataTypes.INTEGER,
            validate: {
                not: ["[a-z]", 'i']
            }
        }
    });
    return Event;
};

