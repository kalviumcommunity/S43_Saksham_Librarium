const router = require("express").Router();
const blog = require("../Modules/bookModal");

router.post("/", async (req, res) => {
    console.log(req.body);
    const { name, image, author, description, price } = req.body;

    try {
        const newBook = await blog.create({
            name,
            image,
            author,
            description,
            price
        });
        res.status(201).json(newBook);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});