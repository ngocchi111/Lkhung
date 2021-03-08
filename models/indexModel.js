const {db} = require('../dal/db');
const { ObjectId, Int32} = require('mongodb');

exports.lKhung= async () =>
{
    const lKhungCollection = db().collection('Lkhung');
    const lKhung = await lKhungCollection.findOne();
    return lKhung;
}

exports.updata=async(id,obj)=>{
    const lKhungCollection = db().collection('Lkhung');
    const old ={_id :ObjectId(id)};
    await lKhungCollection.deleteOne(old);
    await lKhungCollection.insertOne(obj);
    return true;
}