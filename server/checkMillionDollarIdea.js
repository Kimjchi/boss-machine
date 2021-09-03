const checkMillionDollarIdea = (req, res, next) => {
  let weeklyRevenue = 0;
  let numWeeks = 0;
  while (weeklyRevenue * numWeeks < 1000000) {
    weeklyRevenue = Math.floor(Math.random() * 123562);
    numWeeks = Math.floor(Math.random() * 104) + 6;
  }
  req.body['weeklyRevenue'] = weeklyRevenue;
  req.body['numWeeks'] = numWeeks;
  next();
};

// Leave this exports assignment so that the function can be used elsewhere
module.exports = checkMillionDollarIdea;
