import Sequelize from "sequelize";
const sequelize = new Sequelize("creditmountaindb", "root", "", { dialect: "mysql", host: "localhost", logging: false });
// const sequelize = new Sequelize("collegemgmtsystem", "root", "", { dialect: "mysql", host: "localhost" });

export default sequelize;
