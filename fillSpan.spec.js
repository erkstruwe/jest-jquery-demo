const $ = require("jquery");

require("./fillSpan");

describe("fillSpan()", () => {
    beforeEach(() => {
        document.body.innerHTML = `
            <button id="fill-span-button"></button>
            <span id="fill-span-span">No</span>
        `;
        HF.fillSpan();
        this.$buttons = $("#fill-span-button");
        this.$spans = $("#fill-span-span");
    });

    test("replace inner HTML of the span", () => {
        expect(this.$spans.text()).toBe("No");
        this.$buttons.click();
        expect(this.$spans.text()).toBe("Yes");
    });
    test("replace inner HTML of the span (snapshot)", () => {
        expect(this.$spans[0].outerHTML).toMatchInlineSnapshot(
            `"<span id=\\"fill-span-span\\">No</span>"`
        );
        this.$buttons.click();
        expect(this.$spans[0].outerHTML).toMatchInlineSnapshot(
            `"<span id=\\"fill-span-span\\" style=\\"overflow: hidden;\\">Yes</span>"`
        );
    });
    test("slides up", () => {
        jest.spyOn($.fn, 'slideUp').mockReturnThis();
        this.$buttons.click();
        expect($.fn.slideUp).toHaveBeenCalledTimes(1)
        expect($.fn.slideUp.mock.instances[0]).toEqual(this.$spans)
    });
});
