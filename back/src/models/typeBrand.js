import sequelize from "../config/db.js";
import { DataTypes } from "sequelize";

const TypeBrand = sequelize.define('type_brand', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true}
})

export default TypeBrand;