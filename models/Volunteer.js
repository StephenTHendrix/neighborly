module.exports = function (sequelize, DataTypes) {
    const Volunteer = sequelize.define("Volunteer", {
        name: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                notEmpty: true
            }
        },
        dob: {
            type: DataTypes.DATEONLY,
            validate: {
                isDate: true,
            }
        },
        bio: DataTypes.STRING,
        gender: DataTypes.STRING,
        city: DataTypes.STRING,
        state: DataTypes.STRING,
        zip: DataTypes.STRING,
        image: DataTypes.STRING
    });
    return Volunteer;
};
