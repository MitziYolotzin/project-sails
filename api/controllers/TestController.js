/* eslint-disable indent */
/**
 * TestController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */

module.exports = {
    test: function(req, res) {
        return res.json({ message: 'Respuesta controller' });
    }
};