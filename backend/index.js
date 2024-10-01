import express from "express";
import cors from "cors";
import nodemailer from "nodemailer";
import dotenv from "dotenv";
dotenv.config();

const app = express();
// https://project-e4dd-p8mg.vercel.app/
app.use(
  cors({
    origin: ["https://project-e4dd-p8mg.vercel.app/"],
    methods: ["POST", "GET"],
    credentials: true,
  })
);
app.use(express.json());

const Router = express.Router();

Router.get("/", async (req, res) => {
  res.send("Hello World");
});

Router.post("/sendMail", async (req, res) => {
  const {
    firstName,
    lastName,
    email,
    phone,
    message,
    preferredDate,
    preferredTime,
  } = req.body;

  console.log(req.body);
  if (
    !firstName ||
    !lastName ||
    !email ||
    !phone ||
    !message ||
    !preferredDate ||
    !preferredTime
  ) {
    return res.json({
      success: false,
      message: "Please fill all fields",
    });
  }

  try {
    const response = await sendMail(
      firstName,
      lastName,
      email,
      phone,

      message,
      preferredDate,
      preferredTime,
      res
    );
  } catch (error) {
    return res.json({ success: false, message: "error" });
  }
});

// Create a transporter object using SMTP transport
const transporter = nodemailer.createTransport({
  host: process.env.MAIL_HOST, // you can use any email service provider like Outlook, Yahoo, etc.
  port: process.env.MAIL_PORT,

  auth: {
    user: process.env.MAIL_USER, // your email
    pass: process.env.MAIL_PASS, // your email password (you may need to generate an app-specific password if using Gmail)
  },
});

// Function to send email
const sendMail = async (
  firstName,
  lastName,
  email,
  phone,
  message,
  pd,
  pt,
  res
) => {
  console.log(email);
  try {
    console.log(email);
    const mailOptions = {
      from: process.env.MAIL_USER, // Owner's email (your email)
      to: process.env.MAIL_USER, // Owner's email (your email)
      replyTo: email, // Customer's email to reply back to
      subject: "New Contact Request", // Email subject
      text: `You have received a new message from ${firstName} ${lastName}.\n\n
      Contact Details:\n
      Email: ${email}\n
      Phone: ${phone}\n
      Preferred Date: ${pd}\n
      Preferred Time: ${pt}\n\n
      Message:\n${message}`, // Email body with customer details
    };

    const mailOptionsToCustomer = {
      from: process.env.MAIL_USER, // Owner's email (your email)
      to: email, // Customer's email
      subject: "Confirmation: We Received Your Message", // Subject line for confirmation
      text: `Dear ${firstName} ${lastName},\n\n
      Thank you for reaching out to us. We have received your message and will get back to you shortly.\n\n
      Here is a summary of your message:\n
      Phone: ${phone}\n
      Preferred Date: ${pd}\n
      Preferred Time: ${pt}\n
      Message: ${message}\n\n
      Best regards,\nE4dd`, // Email body for confirmation
    };

    // Send the email
    const info = await transporter.sendMail(mailOptions);
    console.log("Email sent: " + info.response);
    const info2 = await transporter.sendMail(mailOptionsToCustomer);
    console.log("email 2 ", info2.response);
    return res.json({
      success: true,
      data: { info1: info.response, info2: info2.response },
    });
  } catch (error) {
    console.log("Error occurred:", error);
    return res.json({ success: false, message: "error occured" });
  }
};

// Example usage
app.use("/", Router);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`server is running at port at ${PORT}`));
