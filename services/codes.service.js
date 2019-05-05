"use strict";

const DbService = require("moleculer-db");
const MongoDBAdapter = require("moleculer-db-adapter-mongo");

const service = {
	name: "codes",
	mixins: [DbService],
	collection: "codes",
	settings: {
		pageSize: 20
	}
};

if (process.env.MONGO_URI) {
	service.adapter = new MongoDBAdapter(process.env.MONGO_URI);
}

module.exports = service;