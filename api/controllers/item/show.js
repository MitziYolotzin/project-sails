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


    friendlyName: 'Show',


    description: 'Show item.',


    inputs: {
        id: {
            type: 'number',
            required: true
        }
    },


    exits: {
        success: {},
        error: {
            responseType: 'notFound'
        }
    },


    fn: async function(inputs, exits) {

        //get ID /words/12
        let id = inputs.id;

        //get element
        let item = globalItems.filter(item => parseInt(item.id) === parseInt(id));
        //search positive
        if (item.length > 0) {
            return exits.success(item);
        } else {
            return exits.error();

        }

    }


};