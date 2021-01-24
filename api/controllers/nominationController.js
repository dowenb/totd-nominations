const mongoose = require('mongoose');
const nomination = mongoose.model('nomination');

exports.list_all_nominations = (req, res) => {
  nomination.find({}, (err, nominations) => {
    if (err) res.send(err);
    res.json(nominations);
  });
};

exports.create_a_nomination = (req, res) => {
  const newNomination = new nomination(req.body);
  newNomination.save((err, nomination) => {
    if (err) res.send(err);
    res.json(nomination);
  });
};

exports.read_a_nomination = (req, res) => {
  nomination.findById(req.params.nominationId, (err, nomination) => {
    if (err) res.send(err);
    res.json(nomination);
  });
};

exports.update_a_nomination = (req, res) => {
  nomination.findOneAndUpdate(
    { _id: req.params.nominationId },
    req.body,
    { new: true },
    (err, nomination) => {
      if (err) res.send(err);
      res.json(nomination);
    }
  );
};

exports.delete_a_nomination = (req, res) => {
  nomination.deleteOne({ _id: req.params.nominationId }, err => {
    if (err) res.send(err);
    res.json({
      message: 'nomination successfully deleted',
     _id: req.params.nominationId
    });
  });
};