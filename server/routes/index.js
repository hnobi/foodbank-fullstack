import express from 'express';
import  UserController from './../controllers/userController';
import  MarketController from './../controllers/marketController';
const router = express.Router();


router.route('/auth/signup')
.post(UserController.signup);

router.route('/auth/login')
.post(UserController.login);

router.route('/market')
    .post(MarketController.addMarket);

export default router;

