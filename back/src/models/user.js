import sequelize from "../config/db.js";
import { DataTypes } from "sequelize";

const User = sequelize.define('users', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    email: {type: DataTypes.STRING, unique: true},
    password: {type: DataTypes.STRING, unique: true},
    role: {type: DataTypes.STRING, defaultValue: "USER"}
})

export default User;