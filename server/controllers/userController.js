import db from './../models';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';

require('dotenv').config();

const { User } = db;

export default class UserController {

  /**
   *
   *
   * @param {obj} req
   * @param {obj} res
   * @param {func} next
   * @memberof userController
   *  @return {obj} for registering users
   */
  static signup(req, res) {
    const { username, email, password } = req.body;
    const salt = bcrypt.genSaltSync(10);
    const hashedPassword = bcrypt.hashSync(password, salt);
    User.findOne({ where: { email } }).then(userFound => {
      if (userFound) {
        return res.send({ error: `${email} already have Food Bank accout`, status: 'failed' })
      }
      User.create({
        username,
        email,
        password: hashedPassword,
        isAdmin: false
      }).then(user => {
        return res.status(201).send({
          status: "success",
          message: "Successfully created Food Bank account",
        });
      })

    }).catch(e => console.log(e));

  }


  /**
   *
   * @static
   * @param {obj} req
   * @param {obj} res
   * @return {JSON} Login users  and return success or error 
   * @memberof UserController
   */
  static login(req, res) {
    const { email, password } = req.body;
    User.findOne({
      where: { email }
    }).then(foundUser => {
      if (!foundUser) {
        return res.status(400)
          .json({
            status: 'error',
            message: 'Invalid user credentials'
          });
      }

      const isValidPassword = bcrypt.compareSync(password, foundUser.password);

      if (!isValidPassword) {
        return res.status(401).json({
          status: 'error',
          message: 'Invalid user credentials'
        });
      }

      const {  isAdmin, id, email,username } = foundUser;
      const token = jwt.sign({ isAdmin, userid: id }, process.env.SECRET_KEY, { expiresIn: '24h' });

      return res.status(200).send({
        token,
        status: "success",
        message: "Successfully login",
        data: { id, email, username, isAdmin },
      });
    }).catch(err => console.log(err));
  }

}