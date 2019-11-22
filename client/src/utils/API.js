import axios from "axios";

export default {
    getevent: function () {
        return axios.get("/api/event");
    },
    saveevent: function (data) {
        return axios.post("/api/volunteer&event", data);
    }
}