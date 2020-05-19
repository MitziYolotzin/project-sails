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

/* eslint-disable indent */
module.exports = {


    friendlyName: 'List',


    description: 'List item.',


    inputs: {

    },


    exits: {
        success: {}
    },
    //Entry
    //@param {Object} inputs //application entry
    fn: async function(inputs, exits) {
        //get all elmentes

        let item = globalItems;

        // All done.
        return exits.success(items);

    }


};