const sequelize = require('../config/connection');
const { User, Post } = require('../models');

const userdata = [
	{
		"username": "Kaitlyn",
		"email": "kaitlyneskinner@gmail.com",
        "password": "password1"
	},
	{
		"username": "Jessica",
		"email": "jessicaskinner@gmail.com",
        "password": "password2"
	},
	{
		"username": "Jessika",
		"email": "jessikacampbell@gmail.com",
        "password": "password3"
	},
    {
        "username": "Cody",
        "email": "cody@gmail.com",
        "password": "password4"
    }
];

const seedUsers = () => User.bulkCreate(userdata, {individualHooks: true});

module.exports = seedUsers;