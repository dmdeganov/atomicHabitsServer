const User = require("../models/User");
const asyncWrapper = require("../middlewares/asyncWrapper");
const { createCustomError } = require("../errors/custom-error");

const getHello =(req, res, next) =>{
  res.status(200).json('hello');
}

const getUserData = asyncWrapper(async (req, res, next) => {
  console.log('getUserData')
  const { email } = req.body;
  console.log(email)
  let user = await User.findOne({email});
  console.log(user)
  if (!user) {
    return next(createCustomError("User is not found", 404));
  }
  res.status(200).json(user);
})

const editHabits = asyncWrapper(async (req, res, next) => {
  const { id: id } = req.params;
  const { habits } = req.body;
  console.log(id, habits)
  const updatedUser = await User.findOneAndUpdate(
    { _id: id },
    { habits },
    {
      new: true,
      runValidators: true,
    }
  );
  if (!updatedUser) {
    return next(createCustomError("User is not found", 404));
  }
  res.status(201).json(updatedUser);
})

const editData = asyncWrapper(async (req, res, next) => {
  const { id: id } = req.params;
  const { data } = req.body;
  const updatedUser = await User.findOneAndUpdate(
    { _id: id },
    { data },
    {
      new: true,
      runValidators: true,
    }
  );
  if (!updatedUser) {
    return next(createCustomError("User is not found", 404));
  }
  res.status(201).json(updatedUser);
})


module.exports = {
  getUserData,
  editHabits,
  editData,
  getHello
};
