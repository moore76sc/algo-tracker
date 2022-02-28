const express = require('express');
const router = express.Router();
const algoController = require ('../controllers/algo_controller.js')


router.get('/one', algoController.getOneAlgo, (req, res) => {
  return res.status(201).json({entries: res.locals.retrievedAlgo})
});

router.get('/all', algoController.getAllAlgos, (req, res) => {
  return res.status(201).json({entries: res.locals.allAlgos})
});

router.post('/', algoController.createAlgo);

router.put('/', algoController.updateAlgo, (req, res) => {
  return res.status(201).json({entries: res.locals.updatedAlgo});
});

router.delete('/:id', algoController.deleteAlgo);




module.exports = router

