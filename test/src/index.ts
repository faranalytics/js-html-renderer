/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */

import { Template, doctype, html, head, body, ul, li } from "js-html-renderer";

const $the_time_is = Symbol('the_time_is');
const $greetings_fragment = Symbol('greetings_fragment');

const greetings = ['Hello', 'Saluton'];

const template: Template = doctype()(
    html()(
        head()(

        ),
        body()(
            $greetings_fragment
        )
    )
);

const greetings_fragment = ul({ id: 'greetings' })(
    greetings.map(
        (greeting: string) => li()(greeting)
    )
);

const result = template.render(
    {
        [$greetings_fragment]: greetings_fragment,
        [$the_time_is]: new Date().toUTCString()
    }
);

console.log(result);
