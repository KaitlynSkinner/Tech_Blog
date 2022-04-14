const { Post } = require('../models');

const postdata = [

	{
        "title": "Announcing the agenda for Tech Blog Sessions and Events 2022.",
		"contents": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        "user_id": 1

	},
	{
        "title": "Why it's great to write blog posts",
		"contents": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
		"user_id": 2
	},
    {
        "title": "Tech Blog gains 1 million new followers!",
		"contents": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        "user_id": 3
	}
];

const seedPosts = () => Post.bulkCreate(postdata);

module.exports = seedPosts;