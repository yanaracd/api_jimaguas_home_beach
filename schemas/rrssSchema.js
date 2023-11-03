const mongoose = require("mongoose")

const rrssSchema = new mongoose.Schema(
    { href: String, title: String, d: String, img: Object },
    { collection: 'rrss' }
)

module.exports = {
    rrssSchema
}