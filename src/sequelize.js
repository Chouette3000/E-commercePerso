/*==============================================================
Author : Alex Zarzitski & Camélia Zarzitski
Date : 11/01/2018
==============================================================*/
const Sequelize = require('sequelize');

module.exports = {
	connection: function(app) {
		const sequelize = new Sequelize('postgres://bdbiecpfkwqiqa:09f3c26b0e7d04bc9cf0a31f548e6c02b6d0cc4fef583d78fa5438eb44d0c9a7@ec2-54-217-218-80.eu-west-1.compute.amazonaws.com:5432/dbjg84geapj4kl');
		//const sequelize = new Sequelize('postgres://postgres:123456@localhost:5432/postgres');

		sequelize.authenticate().then(() => {
			console.log('Connection has been established successfully.');
			//res.send('CONNEXION OK');
		}).catch(err => {
			console.error('Unable to connect to the database:', err);
			res.send(err);
		});

		return sequelize;
	}
}
