import axios from "axios";

export default {
    searchevent: function () {
        return axios.get("/api/events");
    },

    savedEvent: function (id, userId) {
        return axios.post("/api/events/" + id, userId);
    },

    removeEvent: function (id, userId) {
        return axios.delete("/api/events/" + id + "/" + userId)
    },

    getsavedEvent: function (id) {
        return axios.get("/api/userevents/" + id)
    },

    updateNumber: function (id, addone) {
        return axios.put("/api/events/add/" + id, addone);
    },
    removeNumber: function (id, minusone) {
        return axios.put("/api/events/remove/" + id, minusone);
    },

    seekerEventVolunteerList: function (id, UserId) {
        return axios.get("/api/seekerEvent/" + id + "/" + UserId)
    }
}