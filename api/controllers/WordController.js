/* eslint-disable indent */
/**
 * WordController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */

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
        let words = global_words; //ORM

        //return elements
        return res.status(200).json(words)
    }

};