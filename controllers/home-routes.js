const router = require('express').Router();
const res = require('express/lib/response');
const sequelize = require('../config/connection');
const { User, Post, Comment } = require('../models');

// GET all posts for homepage - http://localhost:3001/
router.get('/', (req, res) => {
    // console.log(req.session);
    console.log('======================');

    Post.findAll({
        attributes: [
            'id',
            'post_url',
            'title',
            'created_at'
        ],
        include: [
            {
                model: Comment,
                attributes: ['id', 'comment_text', 'post_id', 'user_id', 'created_at'],
                include: {
                    model: User,
                    attributes: ['username']
                }
            },
            {
                model: User,
                attributes: ['username']
            }
        ]
    })
    .then(dbPostData => {
        // pass a single post object into the homepage template
        // loop over and map each Sequelize object into a serialized version of itself, saving the results in a new posts array
        const posts = dbPostData.map(post => post.get({ plain: true }));
        res.render('homepage', { 
            posts,
            loggedIn: req.session.loggedIn
        });
    })
    .catch(err => {
        console.error(err);
        res.status(500).json(err);
    });
});

// GET one post for single-post.js
router.get('/post/:id', (req, res) => {
    Post.findOne({
        where: {
            id: req.params.id
        },
        attributes: [
            'id',
            'post_url',
            'title',
            'created_at'
        ],
        include: [
            {
                model: Comment,
                attributes: ['id', 'comment_text', 'post_id', 'user_id', 'created_at'],
                include: {
                    model: User,
                        attributes: ['username']
                        }
            },
            {
                model: User,
                attributes: ['username']
            }
        ]
    })
    .then(dbPostData => {
        if (!dbPostData) {
            res.status(404).json({ message: 'No post found with this id' });
            return;
        }
  
    // serialize the data
    const post = dbPostData.get({ plain: true });
  
    // pass data to template
    res.render('single-post', {
        post,
        loggedIn: req.session.loggedIn
    });
    })
    .catch(err => {
        console.log(err);
        res.status(500).json(err);
    });
});

// http://localhost:3001/login
router.get('/login', (req, res) => {
    if (req.session.loggedIn) {
        res.redirect('/');
        return;
    }

    res.render('login');
});

module.exports = router;