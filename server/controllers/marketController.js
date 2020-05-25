import db from "./../models";
const { Market } = db;

 class MarketController {

  static addMarket(req, res) {
    const {
      name,
      description,
      address,
      longitude,
      latitude,
      // images,
    } = req.body;
    // const { userid } = req.decoded;

    Market.create({
      name,
      description,
      address,
      longitude,
      latitude,
      images:['sss'],
      userId: 2,
    }).then((market) => {
        return res.send({
          message: "successfully created new market",
          market,
        });
      })
      .catch((e) => res.send(e));
  }
}

export default MarketController;
