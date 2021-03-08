const { ObjectId } = require('mongodb');
const { render } = require('../app');
const indexModel = require('../models/indexModel');

exports.get = async (req,res) => {
    res.render('tittle/main', await indexModel.lKhung());
}

exports.update = async (req,res) => {
    const id= req.body.id;
    const lKhung = {
        document : req.body.document,
    }
    await indexModel.updata(id,lKhung);
    res.redirect('back');
}
