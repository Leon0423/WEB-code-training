const express = require("express");
const bodyParser = require("body-parser");
const nodemailer = require("nodemailer");
const path = require("path");

const app = express();
const port = process.env.PORT || 3000;

// 解析 JSON 和 URL 編碼的請求體
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// 提供靜態文件
app.use(express.static(path.join(__dirname, "public")));

// 聯繫表單提交處理
app.post("/contact", (req, res) => {
	const { name, email, message } = req.body;

	// 使用 nodemailer 發送電子郵件
	const transporter = nodemailer.createTransport({
		service: "gmail",
		auth: {
			user: "your-email@gmail.com",
			pass: "your-email-password",
		},
	});

	const mailOptions = {
		from: email,
		to: "your-email@gmail.com",
		subject: `聯繫表單提交來自 ${name}`,
		text: `姓名: ${name}\n電子郵件: ${email}\n訊息: ${message}`,
	};

	transporter.sendMail(mailOptions, (error, info) => {
		if (error) {
			console.error("Error sending email:", error);
			res.status(500).send("發送郵件時發生錯誤");
		} else {
			console.log("Email sent:", info.response);
			res.status(200).send("郵件已成功發送");
		}
	});
});

// 啟動伺服器
app.listen(port, () => {
	console.log(`Server is running on port ${port}`);
});
