/* eslint-disable indent */

const globalItems = [{
        id: 1,
        text: 'itemOne',
        length: 4
    },
    {
        id: 2,
        text: 'itemTwo',
        length: 5
    },
    {
        id: 3,
        text: 'itemThree',
        length: 3
    }
];


module.exports = {


    friendlyName: 'Store',


    description: 'Store item.',


    inputs: {
        text: {
            type: 'string',
            require: true
        }
    },


    exits: {
        success: {},
        error: {
            requestType: 'notFound'
        }
    },


    fn: async function(inputs, exits) {

        //get elements, get data of req
        let item = {
            //attribute id
            //get num int, of random number function, get range 1000 numbers for generate id random
            id: parseInt(Math.random() * 10000),
            text: inputs.text,
            length: inputs.text.length
        };
        //insert data in persistent system, insert in list

        globalItems.push(item); //ORM

        //return obj, with status 201
        return exits.success(item);
    }

};