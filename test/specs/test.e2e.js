const { expect } = require('@wdio/globals')
const Flow = require('../pageobjects/flow')

// describe('run flow1', () => {
//     it('running flow 1', async () => {
//         await Flow.runFlowOne();
//     })
// })

// describe('run flow2', () => {
//     it('running flow 2', async () => {
//         await Flow.runFlowTwo();
//     })
// })

describe('run flow3', () => {
    it('running flow 3', async () => {
        await Flow.runFlowThree();
    })
})