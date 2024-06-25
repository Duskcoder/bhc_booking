const nodemailer = require("nodemailer");

const sendMail = async (options) => {
  const transporter = nodemailer.createTransport({
    host: process.env.STEP_HOST,
    port: process.env.STEP_PORT,
    service: process.env.STEP_SERVICE,
    auth: {
      user: process.env.STEP_GMAIL,
      pass: process.env.STEP_PASSWORD,
    },
    secure: false,
    requireTLS: true,
  });

  const emailOptions = {
    from: `BHC support<BHC@school.com>`,
    to: options.email,
    subject: options.subject,
    text: options.message,
    html:options.html
  };

  await transporter.sendMail(emailOptions);
};

module.exports = sendMail;
