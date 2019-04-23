const $ = require('jquery')

require('./fillSpan')

describe('fillSpan()', () => {
    beforeEach(() => {
        document.body.innerHTML = `
        <button id="fill-span-button"></button>
        <span id="fill-span-span">No</span>
        `
        HF.fillSpan()
    })

    test('replace inner HTML of the span', () => {
        const $button = $('#fill-span-button')
        const $span = $('#fill-span-span')

        expect($span.text()).toBe('No')
        $button.click()
        expect($span.text()).toBe('Yes')
    })
})
