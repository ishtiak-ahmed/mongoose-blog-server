const express = require('express');
const router = express.Router();

const commentController = require('../controllers/commentControllers');

router.route('/getAllComments/:id').get(commentController.getPostComment);
router.route('/addNewComment').post(commentController.addNewComment);
// router.route('/deletePost').delete(postController.deletePost);
// router.route('/updatePost').patch(postController.updatePost);

module.exports = router;