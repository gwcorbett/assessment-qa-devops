const {shuffleArray} = require('./utils')

describe('shuffleArray should', () => {
    test('shuffleArray should return an array', () =>{
        let shuffleArray = shuffleArray(testData.array)
        expect(shuffleArray).toBe([])
    })
})

    test('shuffleArray items should be shuffled', () =>{
        let shuffleArray = shuffleArray(testShuffle.array)
        expect(shuffleArray).toBe([].random)
    })
