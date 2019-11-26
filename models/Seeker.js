module.exports = function (sequelize, DataTypes) {
    const Seeker = sequelize.define("Seeker", {
        companyName: {
            type: DataTypes.STRING,
        },
        type: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                notEmpty: true
            }
        },
        bio: DataTypes.STRING,
        address1: DataTypes.STRING,
        address2: DataTypes.STRING,
        city: DataTypes.STRING,
        state: DataTypes.STRING,
        zip: DataTypes.STRING,
        website: DataTypes.STRING,
        image: DataTypes.STRING
    });

    Seeker.associate = (models) => {
        Seeker.belongsTo(models.User, {
            foreignKey: {
                allowNull: false
            }
        })
    };
    return Seeker;
};