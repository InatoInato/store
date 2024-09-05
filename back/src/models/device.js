import sequelize from "../config/db.js";
import { DataTypes } from "sequelize";

const Device = sequelize.define('device', {
    id: {type: DataTypes.STRING, primaryKey: true},
    name: {type: DataTypes.STRING, unique: true, allowNull: false},
    price: {type: DataTypes.INTEGER, unique: true, allowNull: false},
    rating: {type: DataTypes.INTEGER, unique: true, allowNull: false},
    img: {type: DataTypes.STRING, unique: true}
})

export default Device;