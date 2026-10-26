const Got = require('../model/GotModel')

const index = async (req, res) => {
    try {
        const gots = await Got.showAll()
        res.status(200).send(gots)
    } catch (err) {
        res.status(500).send({error: err})
    }
}



module.exports = {index}