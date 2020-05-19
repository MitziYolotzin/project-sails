/* eslint-disable indent */
/**
 * WordController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */

// eslint-disable-next-line camelcase
const global_words = [{
        id: 1,
        text: 'hola',
        length: 4
    },
    {
        id: 2,
        text: 'hallo',
        length: 5
    },
    {
        id: 3,
        text: 'hello',
        length: 3
    }
];

module.exports = {

    list: function(req, res) {
        //get elements
        // eslint-disable-next-line camelcase
        let words = global_words; //ORM

        //return elements
        return res.status(200).json(words);
    },

    show: function(req, res) {
        //get ID /words/12
        let id = req.params.id;

        //get element
        // eslint-disable-next-line camelcase
        let word = global_words.filter(word => parseInt(word.id) === parseInt(id));

        if (word) {
            return res.json(word);
        } else {
            return res.status(404).json({ error: 'Element not found' });
        }

        //return 
        //return res
        //not found
    },

    store: function(req, res) {
        //get elements, get data of req
        let word = {
            //attribute id
            //get num int, of random number function, get range 1000 numbers for generate id random
            id: parseInt(Math.random() * 10000),
            text: req.body.text,
            length: req.body.text.length
        };
        //insert data in persistent system, insert in list

        // eslint-disable-next-line camelcase
        global_words.push(word); //ORM

        //return obj, with status 201
        return res.status(201).json(word);
    }

};