import db from "./../models";
import cloudinary from "./../utils/cloudinary";
import fs from "fs";
const { Market } = db;

class MarketController {
  static addMarket(req, res) {
    const {
      name,
      description,
      address,
      longitude,
      latitude,
      images,
    } = req.body;

    const { userid } = req.decoded;
    Market.create({
      name,
      description,
      address,
      longitude,
      latitude,
      images,
      userId: userid,
    })
      .then((market) => {
        return res.send({
          message: "successfully created new market",
          market,
        });
      })
      .catch((e) => res.send(e));
  }

  static async uploadImage(req, res) {
    const imagesUrl = [];
    const uploader = async (path) => {
      try {
        const imgObj = await cloudinary.uploads(path, "foodbankImages");
        imagesUrl.push(imgObj.url);
      } catch (e) {
        console.log(e.message);
      }
    };

    const files = req.files;

    for (let file of files) {
      const { path } = file;
      await uploader(path);
      fs.unlinkSync(path); // to remove file
    }

    res.status(200).json({
      message: "images uploaded successfully",
      data: imagesUrl,
    });
  }

  static getAllmarket(req, res) {
    Market.findAll().then(markets => {
      
      return res.status(200).send({
        message: "Succesfully fetch market list",
        data: markets,
      });
    }).catch(e => console.log(e.message))
  }

}

export default MarketController;
