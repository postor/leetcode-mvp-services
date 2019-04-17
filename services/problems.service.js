"use strict";

const DbService = require("moleculer-db");
const MongoDBAdapter = require("moleculer-db-adapter-mongo");
const defaultProblems = require("../data/default-problems");

module.exports = {
	name: "problems",
	mixins: [DbService],
	adapter: new MongoDBAdapter(process.env.MONGO_URI ||
    "mongodb://192.168.5.43/leetcode"),
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