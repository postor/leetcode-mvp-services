"use strict";

const DbService = require("moleculer-db");
const MongoDBAdapter = require("moleculer-db-adapter-mongo");

const service = {
	name: "answers",
	mixins: [DbService],
	collection: "answers",
	settings: {
		pageSize: 20
	}
};


if (process.env.MONGO_URI) {
	service.adapter = new MongoDBAdapter(process.env.MONGO_URI);
}

module.exports = service;