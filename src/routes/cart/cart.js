const express = require('express')
const router = express.Router();


router.get('/', (req, res) => {
    let sampleJson = [
        { itemNo : 1, item: 'Nike Shoe' },
        { itemNo : 2, item: 'Tommy Hilfiger Shirt' },
        { itemNo : 3, item: 'Calvin Klien Trousers' },
        { itemNo : 4, item: 'Men Dress Shirtt' },
        { itemNo : 5, item: 'Leather Handbagt' },
        { itemNo : 6, item: 'Sunglassest' },
        { itemNo : 7, item: 'Men Sweatert' },
        { itemNo : 8, item: 'High Heelst' },
        { itemNo : 9, item: 'Business Suitt' },
        { itemNo : 10, item: 'Designer Watcht' },
        { itemNo : 11, item: 'Silk Scarft' },
        { itemNo : 12, item: 'Denim Jackett' },
        { itemNo : 13, item: 'Cocktail Dresst' },
        { itemNo : 14, item: 'Running Shoest' },
        { itemNo : 15, item: 'Leather Wallett' },
        { itemNo : 16, item: 'Vintage Sunglassest' },
        { itemNo : 17, item: 'Cashmere Sweatert' }
    ]
    res.send({ data: sampleJson })
})


router.post('/deleteall', (req, res) => {
    res.send({ data: "Deleted all Items in Cart" })
})

router.get('/add/:id', (req, res) => {
    const id = req.params.id;
    res.send({ data: "Added "+ id +" to Cart" })
})


module.exports = router