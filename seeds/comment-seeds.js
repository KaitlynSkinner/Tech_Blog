const { Comment } = require('../models');

const commentdata = [
	{
		"id": 1,
		"comment_text": "Taskmaster climbs to the Number 1 spot!",
		"user_id": 1,
		"post_id": 1,
		"created_at": "2022-04-13 21:12:06",
		"updated_at": "2022-04-13 21:12:06 "
	},
	{
		"id": 2,
		"comment_text": "This article is awesome!",
		"user_id": 1,
		"post_id": 2,
		"created_at": "2022-04-13 21:12:06",
		"updated_at": "2022-04-13 21:12:06 "
	},
	{
		"id": 3,
		"comment_text": "Just Tech News becomes most popular destination for news!",
		"user_id": 1,
		"post_id": 3,
		"created_at": "2022-04-13 21:12:06",
		"updated_at": "2022-04-13 21:12:06 "
	}
];

const seedComments = () => Comment.bulkCreate(commentdata);

module.exports = seedComments;