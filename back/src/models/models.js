import User from './user.js';
import Basket from './basket.js';
import BasketDevice from './basketDevice.js';
import Device from './device.js';
import Type from './type.js';
import Brand from './brand.js';
import Rating from './rating.js';
import DeviceInfo from './deviceInfo.js';
import TypeBrand from './typeBrand.js';

User.hasOne(Basket);
Basket.belongsTo(User);

User.hasMany(Rating);
Rating.belongsTo(User);

Basket.hasMany(BasketDevice);
BasketDevice.belongsTo(Basket);

Type.hasMany(Device);
Device.belongsTo(Type);

Brand.hasMany(Device);
Device.belongsTo(Brand);

Device.hasMany(Rating);
Rating.belongsTo(Device);

Device.hasMany(BasketDevice);
BasketDevice.belongsTo(Device);

Device.hasMany(DeviceInfo);
DeviceInfo.belongsTo(Device);

Type.belongsToMany(Brand, {through: TypeBrand});
Brand.belongsToMany(Type, {through: TypeBrand});

const models = { User, Basket, BasketDevice, Device, Type, Brand, Rating, DeviceInfo, TypeBrand };
export default models;