import i18n from "i18next";
import XHR from "i18next-xhr-backend";

// See https://www.i18next.com/ for a LOT of documentation.

i18n
    .use(XHR)
    .init({
        fallbackLng	: 'de',

        // Have a common namespace used around the full app
        ns: ['common'],
        defaultNS: 'common',

        debug: false,
        wait: true,

        interpolation: {
            // not needed for react.
            escapeValue: false,
            formatSeparator: ',',
            format: function(value, format, lng) {
                if (format === 'uppercase') return value.toUpperCase();
                return value;
              }
            }
    });

export default i18n;