const asyncHandler = require("express-async-handler");

// @desc    Get goals
// @route   GET /api/goals
// @access  Private
const getGoals = asyncHandler(async (req, res) => {
  res.status(200).json({ success: true, msg: "Get goals" });
});

// @desc    Set goal
// @route   POST /api/goals
// @access  Private
const setGoal = asyncHandler(async (req, res) => {
  if (!req.body.text) {
    res.status(400);
    throw new Error("Please add a text field");
  }
  res.status(200).json({ success: true, msg: "Set goal" });
});

// @desc    Update goals
// @route   PUT /api/goal/:id
// @access  Private
const updateGoal = asyncHandler(async (req, res) => {
  res.status(200).json({ success: true, msg: `Update goal #${req.params.id}` });
});

// @desc    Delete goals
// @route   DELETE /api/goal/:id
// @access  Private
const deleteGoal = asyncHandler(async (req, res) => {
  res.status(200).json({ success: true, msg: `Delete goal #${req.params.id}` });
});

module.exports = {
  getGoals,
  setGoal,
  updateGoal,
  deleteGoal,
};
