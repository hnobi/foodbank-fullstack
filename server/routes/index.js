import express from 'express';
import  UserController from './../controllers/userController';

const router = express.Router();


router.route('/auth/signup')
.post(UserController.signup);

router.route('/auth/login')
.post(UserController.login);







export default router;