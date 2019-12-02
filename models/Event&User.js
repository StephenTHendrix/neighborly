module.exports = function (sequelize, DataTypes) {
    var Event_User = sequelize.define("Event_User", {
        EventID: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        UserID: {
            type: DataTypes.INTEGER,
            allowNull: false,
        }
    });
    return Event_User;
};  