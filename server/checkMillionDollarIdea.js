const checkMillionDollarIdea = (req, res, next) => {
  let weeklyRevenue = req.body['weeklyRevenue'];
  let numWeeks = req.body['numWeeks'];
  try {
    weeklyRevenue = Number(weeklyRevenue);
    numWeeks = Number(numWeeks);
    if (!numWeeks || !weeklyRevenue || weeklyRevenue * numWeeks < 1000000) {
        res.status(400).send();
      } else {
        req.body['weeklyRevenue'] = weeklyRevenue;
        req.body['numWeeks'] = numWeeks;
        next();
      }
  } catch(e) {
    res.status(400).send(e);
  }
};

// Leave this exports assignment so that the function can be used elsewhere
module.exports = checkMillionDollarIdea;
