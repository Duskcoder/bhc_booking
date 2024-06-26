const MessageModel = require("../model/messageModel");
const CustomError = require("../utils/customError");
const path = require("path");

class Message {
  createMessage = async function (req, res, next) {
    try {
      const messageData = req.body;
      if (req.file) {
        const files = req.file.filename;
        messageData.images = path.join(files);
      }

      messageData.ConversationId = req.body.conversationId;
      messageData.sender = req.body.sender;
      messageData.text = req.body.text;

      const message = new MessageModel({
        converSationId: messageData.ConversationId,
        sender: messageData.sender,
        text: messageData?.text,
        images: messageData.images,
      });

      res.status(201).json({ success: true, message });
    } catch (error) {
      return next(new CustomError(error.message, 500));
    }
  };

  getAllMessagewithConvrsationId = async (req, res, next) => {
    try {
      const messages = await MessageModel.find({
        conversationId: req.paramd.id,
      });
      res.status(200).json({ success: true, messages });
    } catch (error) {
      return next(new CustomError("Something went wrong", 500));
    }
  };
}



module.exports = Message