/**
 * @file
 * @author elinberg@gmail.com (Eric Linberg)
 * Renders html from given data structure.
 *
 * I chose to use an array of objects as the data structure as I feel that
 * it is more expressive then using an array of arrays and using indexes to
 * differentiate between the data elements. It's also more consistent with the
 * json data you would normally receive from the back end.
 */

var app = (function() {

    "use strict";

    return {
        data: [

            {
                "headerContent": "headerContent1",
                "footerContent": "footerContent1"
            },
            {
                "headerContent": "headerContent1",
                "footerContent": "footerContent1",
                "bodyContent": "bodyContent1"
            },
            {
                "headerContent": "headerContent1",
                "footerContent": "footerContent2",
                "bodyContent": "bodyContent2"
            },
            {
                "headerContent": "headerContent2",
                "footerContent": "footerContent1",
                "bodyContent": "bodyContent3",
                "advertisement": "advertisement1"
            }

        ],

        /**
         * Renders data into html based on the index of the data element
         *
         * @param {int} index
         *
         */
        Render: function(index) {
            var content = this.data[index];
            var advertisement = content.advertisement ? content.advertisement : '';
            var header = content.headerContent ? content.headerContent : '';
            var footer = content.footerContent ? content.footerContent : '';
            var body = content.bodyContent ? content.bodyContent : '';
            document.querySelector('#header').innerHTML = header;
            document.querySelector('#footer').innerHTML = footer;
            document.querySelector('#body').innerHTML = body;
            document.querySelector('#advertisement').innerHTML = advertisement;

        }
    }

}());
