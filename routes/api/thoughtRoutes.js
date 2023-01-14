// /api/thoughts
// GET to get all thoughts
// GET to get a single thought by its _id
//  POST to create a new thought (don't forget to push the created thought's _id to the associated user's thoughts array field)
// PUT to update a thought by its _id
// DELETE to remove a thought by its _id

// /api/thoughts/:thoughtId/reactions
// POST to create a reaction stored in a single thought's reactions array field
// DELETE to pull and remove a reaction by the reaction's reactionId value

const router = require('express').Router();
const {
    // getThoughts,
    // getSingleThought,
    createThought,
    // updateThought,
    // deleteThought,
    // addReaction,
    // deleteReaction,
} = require('../../controllers/thoughtController');

router.route('/')
// .get(getThoughts)
.post(createThought)

// router.route('/:thoughtId')
// .get(getSingleThought)
// .put(updateThought)
// .delete(deleteThought)

// // router.route('/:thoughtId/reactions/:reactionId')
// router.route('/:thoughtId/reactions')
// .post(addReaction)
// .delete(deleteReaction)

module.exports = router;