const models = require('../models/algo_model.js');

const algoController = {};

algoController.createAlgo = async (req, res, next) => {
  try {
    console.log(req.body)
    let newAlgo = await models.Algo.create(req.body); //creates new algo with schema from the request body//////////////////////needs data sanitization!!!!!!!!!!///////////////////////////
    //console.log(newAlgo)
    return res.status(201).json({ new_algo: newAlgo }); //returns the newly created object back to the front end directly
  } catch {
    return res.status(400).send('Create algo failed!');
  };
};

algoController.getOneAlgo = async (req, res, next) => {
  try {
    let retrievedAlgo;
    if (req.query.id) {
      retrievedAlgo = await models.Algo.find({ _id: req.query.id })//if an id is provided find Algo by id
    } else {
      retrievedAlgo = await models.Algo.find(req.query)//if no id then find algo by text search
    };
    res.locals.retrievedAlgo = retrievedAlgo;
    return next();
  } catch (error) {
    return res.status(400).send(`Failed to retrieve algo! ${error}`);
  };
};

algoController.getAllAlgos = async (req, res, next) => {
  try {
    res.locals.allAlgos = await models.Algo.find({}).sort({ _id: -1 }); //retrieve all algos, sorts by most recent, and stores in locals
    return next(); //send the algos to frontend via router
  } catch (error) {
    return res.status(400).send(`Failed to get all algos${error}`);
  };
};
algoController.updateAlgo = async (req, res, next) => {
  try {
    await models.Algo.updateOne({ _id: req.query.id }, req.body);//update algo
    res.locals.updatedAlgo = await models.Algo.find({ _id: req.query.id })
    return next(); //send the updated algo to frontend via router
  } catch (error) {
    return res.status(400).send(`Failed to update algo!${error}`);
  };
};
algoController.deleteAlgo = async (req, res, next) => {
  try {
    await models.Algo.findOneAndDelete({ _id: req.params.id });//deletes algo via ID
    return res.status(201).send('algo deleted!');//sends string as a response directly to front end.
  } catch (error) {
    return res.status(400).send(`Failed to delete algo! ${error}`);
  };
};

module.exports = algoController;