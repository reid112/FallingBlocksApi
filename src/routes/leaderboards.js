const express = require('express');
const router = express.Router();
const Score = require('../models/score');

// GET - get the top 5 leaderboard scores
router.get("/", async (req, res) => {
  try {
    var scores = await Score.find({}).sort({score: -1}).limit(5);
    res.json(scores);
  } catch (e) {
    res.json({error : "Error", status : 500});
    console.log(e);
  }
});

// POST - save a new score
router.post("/", async (req, res) => {
    try {
      const score = {
          name: req.body.name,
          score: req.body.score
      }

      Score.create(score, function(err, score) {
        if (err){
            console.log(err);
            res.send(err)
        } else {
            res.json({success : "Success", status : 200});
        }
      });
    } catch (e) {
      res.json({error : "Error", status : 500});
      console.log(e);
    }
  });

module.exports = router;