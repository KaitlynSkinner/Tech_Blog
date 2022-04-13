const { Post } = require('../models');

const postdata = [

	{
        "title": "Announcing the agenda for Tech Blog Sessions and Events 2022.",
		"contents": "https://techblog.com/news",
        "user_id": 1

	},
	{
        "title": "Why it's great to write blog posts",
		"contents": "https://techblog.com/blog-posts",
		"user_id": 2
	},
    {
        "title": "Tech Blog gains 1 million new followers!",
		"contents": "https://techblog.com/press",
        "user_id": 3
	}
];

const seedPosts = () => Post.bulkCreate(postdata);

module.exports = seedPosts;