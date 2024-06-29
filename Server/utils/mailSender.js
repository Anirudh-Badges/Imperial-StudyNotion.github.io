const nodemailer = require("nodemailer");

const mailSender = async () => {
    try{
            let transporter = nodemailer.createTransport({
                host:process.env.MAIL_HOST,
                auth:{
                    user: process.env.MAIL_USER,
                    pass: process.env.MAIL_PASSWORD,
                }
            })


            let info = await transporter.sendMail({
                from: 'StudyNotion',
                to:'',
                subject: '',
                html: '',
            })
            console.log("Message info:", info);
            return info;
    }
    catch(error) {
        console.log(error.message);
    }
}

module.exports = mailSender;