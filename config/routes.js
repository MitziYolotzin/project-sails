/* eslint-disable indent */
/**
 * Route Mappings
 * (sails.config.routes)
 *
 * Your routes tell Sails what to do each time it receives a request.
 *
 * For more information on configuring custom routes, check out:
 * https://sailsjs.com/anatomy/config/routes-js
 */

module.exports.routes = {

    /***************************************************************************
     *                                                                          *
     * Make the view located at `views/homepage.ejs` your home page.            *
     *                                                                          *
     * (Alternatively, remove this and add an `index.html` file in your         *
     * `assets` directory)                                                      *
     *                                                                          *
     ***************************************************************************/

    '/': { view: 'pages/homepage' },

    'GET /controller/:id': 'TestController.test'

    // 'GET /controller': {
    //     controller: 'Test',
    //     action: 'test'
    // }



    //    'GET /example': function(req, res) {
    //        return res.json({ message: 'ok' });
    //    },

    //    'POST /create': function(req, res) {
    //       let title = req.body.title;
    //        let body = req.body.body;

    //       return res.json({
    //           title: title,
    //            body: body
    //       });
    //   },
    //    'DELETE /delete': function(req, res) {
    //       return res.json({ message: 'DELETE' });
    //   },
    ///   'PUT /update': function(req, res) {
    //       return res.json({ message: 'UPDATED' });
    //   }



    /***************************************************************************
     *                                                                          *
     * More custom routes here...                                               *
     * (See https://sailsjs.com/config/routes for examples.)                    *
     *                                                                          *
     * If a request to a URL doesn't match any of the routes in this file, it   *
     * is matched against "shadow routes" (e.g. blueprint routes).  If it does  *
     * not match any of those, it is matched against static assets.             *
     *                                                                          *
     ***************************************************************************/


};