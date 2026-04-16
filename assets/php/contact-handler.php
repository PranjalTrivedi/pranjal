<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Collect and sanitize input data
    $name = strip_tags(trim($_POST["name"]));
    $email = filter_var(trim($_POST["email"]), FILTER_SANITIZE_EMAIL);
    $subject_line = strip_tags(trim($_POST["subject"]));
    $message = htmlspecialchars($_POST["message"]);
    
    // Location Data (from your dropdowns)
    $country = $_POST['country'] ?? 'Not Specified';
    $province = $_POST['state'] ?? 'Not Specified';
    $city = $_POST['city'] ?? 'Not Specified';
    $phone = $_POST['phone'] ?? 'Not Specified';

    // Recipient Email
    $to = "pranjaltrivedi75@gmail.com";
    $subject = "New Project Inquiry: " . $subject_line;

    // Premium HTML Email Template
    $email_content = "
    <html>
    <head>
        <style>
            body { font-family: 'Google Sans', Roboto, Arial, sans-serif; background-color: #f8f9fa; color: #3c4043; padding: 20px; }
            .container { max-width: 600px; background: #ffffff; border-radius: 16px; overflow: hidden; border: 1px solid #e0e0e0; margin: 0 auto; box-shadow: 0 4px 12px rgba(0,0,0,0.05); }
            .header { background-color: #1a73e8; color: #ffffff; padding: 30px; text-align: center; }
            .content { padding: 30px; line-height: 1.6; }
            .field-label { font-size: 12px; font-weight: bold; color: #70757a; text-transform: uppercase; letter-spacing: 0.5px; margin-bottom: 4px; }
            .field-value { font-size: 16px; color: #202124; margin-bottom: 20px; padding-bottom: 10px; border-bottom: 1px solid #f1f3f4; }
            .message-box { background: #f8f9fa; padding: 20px; border-radius: 8px; border-left: 4px solid #1a73e8; margin-top: 10px; }
            .footer { background: #f1f3f4; padding: 15px; text-align: center; font-size: 12px; color: #70757a; }
        </style>
    </head>
    <body>
        <div class='container'>
            <div class='header'>
                <h2 style='margin:0;'>New Project Inquiry</h2>
                <p style='margin:5px 0 0; opacity:0.9;'>Submitted via pranjaltrivedi.ca</p>
            </div>
            <div class='content'>
                <div class='field-label'>Full Name</div>
                <div class='field-value'>$name</div>

                <div class='field-label'>Email Address</div>
                <div class='field-value'><a href='mailto:$email' style='color:#1a73e8; text-decoration:none;'>$email</a></div>

                <div class='field-label'>Phone & Location</div>
                <div class='field-value'>$phone ($city, $province, $country)</div>

                <div class='field-label'>Subject</div>
                <div class='field-value'>$subject_line</div>

                <div class='field-label'>Message</div>
                <div class='message-box'>$message</div>
            </div>
            <div class='footer'>
                This is an automated delivery from your professional portfolio system.
            </div>
        </div>
    </body>
    </html>";

    // Email Headers
    $headers = "MIME-Version: 1.0" . "\r\n";
    $headers .= "Content-type:text/html;charset=UTF-8" . "\r\n";
    $headers .= "From: Project Portal <noreply@pranjaltrivedi.com>" . "\r\n";
    $headers .= "Reply-To: $email" . "\r\n";

    // Send Email
    if (mail($to, $subject, $email_content, $headers)) {
        // Success redirect
        header("Location: thank-you.html");
    } else {
        echo "Error: Unable to send message.";
    }
}
?>