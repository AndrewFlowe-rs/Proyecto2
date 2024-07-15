const { Op } = require("sequelize");
const db = require("../database/models");

module.exports = async (req) => {
  const dataOrder = await db.Order.findAll({
    where: {
      [Op.and]: [
        {
          userId: req.query.userId,
        },
        {
          state: req.query.state || "pending",
        },
      ],
    },
    include: [
      {
        association: "products",
        through: {
          attributes: ["quantity"],
        },
      },
    ],
  });
  return dataOrder; 
};