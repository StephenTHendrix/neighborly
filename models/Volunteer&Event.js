module.exports = function (sequelize, DataTypes) {
    const Volunteer_Event = sequelize.define("Volunteer_Event", {
        VolunteerId = {
            type: DataTypes.INTERGER
        },
        EventId = {
            type: DataTypes.INTERGER
        }
    });
    return Volunteer_Event;
};
