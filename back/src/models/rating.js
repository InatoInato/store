import sequelize from "../config/db.js";
import { DataTypes } from "sequelize";

const Rating = sequelize.define('rating', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    rate: {type: DataTypes.STRING, allowNull: false}
})

export default Rating;