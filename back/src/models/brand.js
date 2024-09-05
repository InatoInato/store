import sequelize from "../config/db.js";
import { DataTypes } from "sequelize";

const Brand = sequelize.define('brand', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    name: {type: DataTypes.STRING, unique: true, allowNull: false}
})

export default Brand;