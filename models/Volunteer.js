module.exports = function (sequelize, DataTypes) {
    const Volunteer = sequelize.define("Volunteer", {
        dob: {
            type: DataTypes.STRING,
            // validate: {
            //     isDate: true,
            // }
        },
        bio: DataTypes.STRING,
        gender: DataTypes.STRING,
        city: DataTypes.STRING,
        state: DataTypes.STRING,
        zip: DataTypes.STRING,
        image: DataTypes.STRING
    });

    Volunteer.associate = (models) => {
        Volunteer.belongsTo(models.User, {
            foreignKey: {
                allowNull: false
            }
        })
    };
    return Volunteer;
};
