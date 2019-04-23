"use strict";

const DbService = require("moleculer-db");
const MongoDBAdapter = require("moleculer-db-adapter-mongo");

module.exports = {
	name: "codes",
	mixins: [DbService],
	adapter: new MongoDBAdapter(process.env.MONGO_URI ||
    "mongodb://192.168.5.43/leetcode"),
	collection: "codes",
	settings: {
		pageSize: 20
	}
};