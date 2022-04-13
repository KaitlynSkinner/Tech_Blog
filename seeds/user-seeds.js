const { faker } = require('@faker-js/faker');
const { User } = require('../models');

const seedUsers = async () => {
    try {

        let users = [{
            username: 'kaitlyn',
            email: 'kaitlynskinner@email.com',
            password: 'password1'
        }];

        for (let i = 0; i < 10; i++) {

            let newUser = {
                username: faker.name.firstName(),
                email: faker.internet.email(),
                password: faker.internet.password()
            }

        users.push(newUser);
        }
        console.log(users);
        await User.bulkCreate(users, ({ individualHooks: true }));
    } catch (err) {
        console.error(err);
    }
};

module.exports = seedUsers;