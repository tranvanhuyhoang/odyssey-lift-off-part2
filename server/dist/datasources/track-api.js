"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const datasource_rest_1 = require("@apollo/datasource-rest");
class TrackAPI extends datasource_rest_1.RESTDataSource {
    baseURL = "https://catstronauts-api.up.railway.app/";
    getTracksForHome() {
        return this.get("tracks");
    }
    getAuthor(authorId) {
        return this.get(`author/${encodeURIComponent(authorId)}`);
    }
}
exports.default = TrackAPI;
