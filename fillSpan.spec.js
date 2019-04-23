const $ = require("jquery");

require("./fillSpan");

describe("fillSpan()", () => {
    beforeEach(() => {
        document.body.innerHTML = `
        <button id="fill-span-button"></button>
        <span id="fill-span-span">No</span>
        `;
        HF.fillSpan();
    });

    test("replace inner HTML of the span", () => {
        const $buttons = $("#fill-span-button");
        const $spans = $("#fill-span-span");

        expect($spans.text()).toBe("No");
        $buttons.click();
        expect($spans.text()).toBe("Yes");
    });
    test("replace inner HTML of the span (snapshot)", () => {
        const $buttons = $("#fill-span-button");
        const $spans = $("#fill-span-span");

        expect($spans[0].outerHTML).toMatchInlineSnapshot(
            `"<span id=\\"fill-span-span\\">No</span>"`
        );
        $buttons.click();
        expect($spans[0].outerHTML).toMatchInlineSnapshot(
            `"<span id=\\"fill-span-span\\">Yes</span>"`
        );
    });
});
