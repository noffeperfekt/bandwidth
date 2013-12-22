/*
 * Bandwith
 * @author kristofer- @ bitbucket
 * @version 0.0.1
 * @description Test your bandwidth by downloading an image.
 * @dependencies jQuery >2.0
 *
 * Usage:
 * set attribute data-bandwidth="yourfile.jpg"
 * check bandwidth:
 * $('img').bandwidth();
 *
 * Options:
 * @param - args
 *  {
 *      callback:   function,
 *      setImage:   true/false //if true then the original src will bechanged to the tested one
 *  }
 */

/*globals jQuery*/
/*jslint white: true, browser: true */
(function ($) {
    "use strict";
    /* @class Represents a test result set.
     * @param mbps      - megabits per second
     * @param kbps      - kilobits per second
     * @param bps       - bits per second
     * @param duration  - how long did it take to download the bits
     * @param bits      - the number of bits to be downloaded
     */
    function BandwidthResult(mbps, kbps, bps, duration, bits) {
        this.mbps = mbps;
        this.kbps = kbps;
        this.bps = bps;
        this.duration = duration;
        this.bits = bits;
    }
    $.fn.bandwidth = function (args) {
        var self = this[0],
            imageAddr = $(self).data("bandwidth") + "?n=" + Math.random(),
            startTime,
            downloadSize,
            endTime,
            result = new BandwidthResult();
        /* 5.
         * @description Writes attribute to element
         * @param result - instance of bandwidthResult
         */
        function returnResult(result) {
            if (args) {
                // Set source
                if (args.setImage) {
                    $(self).attr('src', imageAddr);
                }
                // Run callback
                if (args.callback) {
                    args.callback(result);
                }
            }
            // set data attribute
            else {
                $(self).attr("data-bandwidth", JSON.stringify(result));
                return result;
            }
        }
        /* 4.
         * @description Runs when image is loaded
         */
        function onImageLoad() {
            endTime = (new Date()).getTime();
            result.duration = (endTime - startTime) / 1000;
            result.bits = downloadSize * 8;
            result.bps = (result.bits / result.duration).toFixed(2);
            result.kbps = (result.bps / 1024).toFixed(2);
            result.mbps = (result.kbps / 1024).toFixed(2);
            $(self).trigger('bandwidth',returnResult(result));
        }
        /* 3.
         * @description Runs when gotten file-size
         * @param size  - filesize
         */
        function getImage(size,url) {
            downloadSize = size;
            var download = new Image();
            download.onload = onImageLoad;
            startTime = (new Date()).getTime();
            download.src = url;
        }
        /* 2.
         * @description Get file size
         * @param url   - test-file url
         * @param call  - callback function tat shall recieve byte-size
         */
        function getFileSize(url, call) {
            var xhr = new XMLHttpRequest();
            xhr.open("HEAD", url, true); // Notice "HEAD" instead of "GET",
            //  to get only the header
            xhr.onreadystatechange = function () {
                if (this.readyState === this.DONE) {
                    var byteSize = parseInt(xhr.getResponseHeader("Content-Length"), 10);
                    call(byteSize,url);
                }
            };
            xhr.send();
        }
        /* 1.
         * @description - initialize plugin
         */
        function init(url) {
            getFileSize(url, getImage);
        }
        /*
         * @constructor
         */
        init(imageAddr);
    };

}(jQuery));
