const gots = require('../gots.json')

class Got {
    constructor(got) {
        this.characters = got.characters
        this.quotes = got.quotes
        this.houses = got.houses
    }

    static showAll() {
        return gots.characters
    }

    static show(name) {
        const got = gots.find((got) => got.characters.toLowerCase() == characters)
    
    if (got) {
        return new Got(got)
    } else {
        throw 'This got does not exist'
    }
    }
}

module.exports = Got