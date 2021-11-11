const Comment = require('../models/comment');

module.exports = {
    create: async (req, res) => {
        try {
            const comment = await Comment.create(req.body);

            res.status(201).send({
                error: false,
                message: 'Created new comment',
                category: comment
            });
        } catch (error) {
            res.send({
                error: true,
                message: error.message
            });
        }
    }
}