const ConversationModel = require("../model/conversationModel");
const CustomError = require("../utils/customError");

class Conversation {
  createConversation = async (req, res, next) => {
    try {
      const { groupTitle, userId } = req.body;

      const conversation = await ConversationModel.create({
        members: [userId, "admin"],
        groupTitle: groupTitle,
      });

      return res.status(201).json({ success: true, conversation });
    } catch (error) {
      next(new CustomError(error.message, 500));
    }
  };

  getConversationAdmin = async (req, res, next) => {
    const admin = req.user._id;

    try {
      const conversation = await ConversationModel.find({
        members: { $in: ["admin"] },
      }).sort({ updatedAt: -1, createdAt: -1 });
      res.status(200).json({ success: true, conversation });
    } catch (error) {
      next(new CustomError("Something went wrong", 500));
    }
  };

  getAdminConversation = async (req, res, next) => {
    const user = req.user._id;
    try {
      const conversation = await ConversationModel.find({
        members: { $in: [user.toString()] },
      }).sort({ updatedAt: -1, createdAt: -1 });

      res.status(200).json({ conversation });
    } catch (error) {
      next(new CustomError("Something went wrong", 500));
    }
  };
}

module.exports = Conversation;
