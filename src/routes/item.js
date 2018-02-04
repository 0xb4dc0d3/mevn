const express = require('express');
const router = express.Router();

const Item = require('../models/items');

// /item/483dmd3e93djddd
router.get('/:id', (req, res, next) => {
    Item.findById(req.params.id, function (err, item) {
        res.json(item);
    })
});

//get data /item - GET
router.get('/',(req, res) => {
    Item.find(function (err, items) {
        if (err) { throw err; } else{
            res.json(items);
        }
    })
});

//add data - /item - POST
router.post('/', (req, res) => {
    const item = new Item(req.body);
    item.save().then(item => {
        res.status(200).json({item: 'Item added'});
    }).catch(err => {
        res.status(400).send({item: 'Error ;('});
    });
});

//update data - /item/perro - PUT
router.put('/:id', (req, res, next) => {
    Item.findById(req.params.id, function (err, item) {
        if (!item) {
            return next(new Error('Error updating data, item not found.'));
        } else {
            item.name = req.body.name;
            item.price = req.body.price;
            item.save().then(item => {
                res.json('Update completed');
            }).catch(err => {
               res.status(400).send('Error updating');
            });
        }
    })
});

//delete data - /item/perro - DELETE
router.delete('/:id', (req, res, next) => {
   Item.findByIdAndRemove(req.params.id, function (err, item) {
       if (err) {
           res.json(err);
       } else {
           res.json('Item deleted.');
       }
   })
});

module.exports = router;