// collect the packaged group of API endpoints and prefix them with the path /api
const router = require('express').Router();
// require /api folder = removes '/api' from routes in api folder
const apiRoutes = require('./api');
// require homepage routes
const homeRoutes = require('./home-routes.js');
// require dashboard routes
const dashboardRoutes = require('./dashboard-routes.js')

router.use('/', homeRoutes);
router.use('/dashboard', dashboardRoutes);
router.use('/api', apiRoutes);

module.exports = router;