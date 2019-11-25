import axios from "axios";

export default {
    getevent: function () {
        return axios.get("/api/event");
    },
    searchevent: function (location) {
        return axios.post("/api/event", {location});
    },
    saveevent: function (data) {
        return axios.post("/api/volunteer&event", data);
    }
}