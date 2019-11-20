module.exports = function (sequelize, DataTypes) {
    const Seeker = sequelize.define("Seeker", {
        name: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                notEmpty: true
            }
        },
        type: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                notEmpty: true
            }
        },
        bio: DataTypes.STRING,
        street: DataTypes.STRING,
        city: DataTypes.STRING,
        state: DataTypes.STRING,
        zip: DataTypes.STRING,
        website: DataTypes.STRING,
        image: DataTypes.STRING
    });
    return Seeker;
};