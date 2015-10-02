/*! 
 * numeral.js language configuration
 * language : indonesia (id)
 * author : Adam Draper : https://github.com/adamwdraper
 */
(function () {
    var language = {
        delimiters: {
            thousands: '.',
            decimal: ','
        },
        abbreviations: {
            thousand: 'k',
            million: 'm',
            billion: 'b',
            trillion: 't'
        },
        ordinal : function (number) {
            return number === '.';
        },
        currency: {
            symbol: 'Rp'
        }
    };

    // Node
    if (typeof module !== 'undefined' && module.exports) {
        module.exports = language;
    }
    // Browser
    //if (typeof window !== undefined && this.numeral && this.numeral.language) {
        this.numeral.language('id', language);
    //}
}());