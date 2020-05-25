import express from 'express';
import  UserController from './../controllers/userController';
import  MarketController from './../controllers/marketController';
import authAdminToken from './../middlewares/adminToken';
const router = express.Router();


router.route('/auth/signup')
.post(UserController.signup);

router.route('/auth/signin')
.post(UserController.login);

router.route('/market')
    .post(authAdminToken,MarketController.addMarket);

export default router;

