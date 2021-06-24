const Comment = require('../models/CommentModel');

exports.addNewComment = async (req, res) => {
    const newComment = new Comment(req.body);
    newComment.save().then(doc => res.send(doc))
    .catch(err => res.status(400).json({failed: err}))
}

exports.getPostComment = async (req, res) => {
    const postID = req.params.id;
    try {
        const comments = await Comment.find({postID: postID});
        res.status(200).json({data: {comments: comments}})
    }catch(err){
        res.status(300).json({data: {comments: []}})
    }
}