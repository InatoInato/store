import sequelize from "../config/db.js";
import { DataTypes } from "sequelize";

const BasketDevice = sequelize.define('basket_device', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
})

export default BasketDevice;