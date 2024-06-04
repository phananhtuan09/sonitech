'use server';

import nodemailer from 'nodemailer';
import hbs from 'nodemailer-express-handlebars';
import path from 'path';

const templatesDir = path.resolve('src/templates/emails');
// Create a transporter using SMTP, Gmail in this case
const transporter = nodemailer.createTransport({
  service: 'gmail',
  host: 'smtp.gmail.com',
  port: 465,
  secure: true,
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_APP_PASSWORD,
  },
  tls: {
    rejectUnauthorized: false, // Warning: This also bypasses the security checks and is not recommended for production
  },
});

// Configure Handlebars options
const handlebarsOptions = {
  viewEngine: {
    extName: '.handlebars',
    partialsDir: templatesDir,
    defaultLayout: false,
  },
  viewPath: templatesDir,
  extName: '.handlebars',
};

transporter.use('compile', hbs(handlebarsOptions));

export default transporter;
