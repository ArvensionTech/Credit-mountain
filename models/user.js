import Sequelize from "sequelize";
import sequelize from "../config/database.js";

const User = sequelize.define("user", {
  email: {
    type: Sequelize.STRING,
    allowNull: false,
    unique: true,
    validate: {
      isEmail: true,
    },
  },
  name: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  password: {
    type: Sequelize.STRING,
    allowNull: false,
  },
});

const Child = sequelize.define("child", {
  name: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  age: {
    type: Sequelize.INTEGER,
    validate: {
      isNumeric: true,
    },
  },
});

const CreditCard = sequelize.define("credit_card", {
  type: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  cardNmber: {
    type: Sequelize.STRING,
    isCreditCard: true,
    allowNull: false,
  },
  securityCode: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  expirationDate: {
    type: Sequelize.DATEONLY,
    allowNull: false,
  },
  monthlyLimit: {
    type: Sequelize.FLOAT,
    allowNull: false,
  },
});

const CreditCardCharge = sequelize.define("credit_card_charge", {
  amount: {
    type: Sequelize.FLOAT,
    allowNull: false,
  },
  paymentGatewayKey: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  paymentGatewaySecret: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  paymentGatewayLink: {
    type: Sequelize.STRING,
    allowNull: false,
  },
});

User.hasMany(Child, { onDelete: "cascade" });
Child.belongsTo(User);
Child.hasMany(CreditCard, { onDelete: "cascade" });
User.hasMany(CreditCard, { onDelete: "cascade" });
CreditCard.belongsTo(Child);
CreditCard.belongsTo(User);
CreditCard.hasOne(CreditCardCharge);
CreditCardCharge.belongsTo(CreditCard);

export { User, Child, CreditCard, CreditCardCharge };
