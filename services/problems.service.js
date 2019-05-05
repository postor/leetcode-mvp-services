"use strict";

const DbService = require("moleculer-db");
const MongoDBAdapter = require("moleculer-db-adapter-mongo");
const defaultProblems = require("../data/default-problems");

const service = {
	name: "problems",
	mixins: [DbService],
	collection: "problems",
	settings: {
		pageSize: 50
	},
	async afterConnected() {
		const db = this.adapter;
		if (!await db.count()) {
			await db.insertMany(defaultProblems);
		}
	}
};

if (process.env.MONGO_URI) {
	service.adapter = new MongoDBAdapter(process.env.MONGO_URI);
}

module.exports = service;