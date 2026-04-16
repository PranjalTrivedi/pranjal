<?php
// Set the recipient email
$to = "pranjaltrivedi75@gmail.com";

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Sanitize inputs
    $name = strip_tags(trim($_POST["name"]));
    $email = filter_var(trim($_POST["email"]), FILTER_SANITIZE_EMAIL);
    $subject_line = strip_tags(trim($_POST["subject"]));
    $message = htmlspecialchars($_POST["message"]);
    
    // Capture Location Data
    $country = $_POST['country'] ?? 'N/A';
    $state = $_POST['state'] ?? 'N/A';
    $city = $_POST['city'] ?? 'N/A';
    $phone = $_POST['phone'] ?? 'N/A';

    $subject = "New Project Inquiry: " . $subject_line;

    // Premium UI Email Template
    $email_content = "
    <div style='font-family: Arial, sans-serif; background-color: #f4f7f9; padding: 40px;'>
        <div style='max-width: 600px; margin: 0 auto; background: #ffffff; border-radius: 12px; overflow: hidden; border: 1px solid #e0e0e0; box-shadow: 0 4px 10px rgba(0,0,0,0.05);'>
            <div style='background-color: #1a73e8; padding: 30px; text-align: center;'>
                <h2 style='color: #ffffff; margin: 0; font-size: 24px;'>New Project Lead</h2>
                <p style='color: #ffffff; opacity: 0.8; margin-top: 5px;'>Priority Submission</p>
            </div>
            
            <div style='padding: 30px; color: #3c4043;'>
                <p style='margin-bottom: 20px;'><strong>Lead Details:</strong></p>
                <table style='width: 100%; border-collapse: collapse;'>
                    <tr><td style='padding: 10px 0; border-bottom: 1px solid #eee; color: #70757a; font-size: 13px;'>NAME</td></tr>
                    <tr><td style='padding: 5px 0 15px; font-size: 16px; font-weight: bold;'>$name</td></tr>
                    
                    <tr><td style='padding: 10px 0; border-bottom: 1px solid #eee; color: #70757a; font-size: 13px;'>EMAIL</td></tr>
                    <tr><td style='padding: 5px 0 15px; font-size: 16px; color: #1a73e8;'>$email</td></tr>

                    <tr><td style='padding: 10px 0; border-bottom: 1px solid #eee; color: #70757a; font-size: 13px;'>PHONE & LOCATION</td></tr>
                    <tr><td style='padding: 5px 0 15px; font-size: 16px;'>$phone | $city, $state, $country</td></tr>
                </table>

                <div style='margin-top: 25px; background: #f8f9fa; padding: 20px; border-left: 4px solid #1a73e8; border-radius: 4px;'>
                    <p style='margin: 0; font-size: 12px; color: #70757a; text-transform: uppercase;'>Message Content</p>
                    <p style='margin-top: 10px; line-height: 1.6;'>$message</p>
                </div>
            </div>

            <div style='background: #f1f3f4; padding: 20px; text-align: center; font-size: 12px; color: #70757a;'>
                Sent via Pranjal Trivedi Portfolio System
            </div>
        </div>
    </div>";

    // Headers
    $headers = "MIME-Version: 1.0" . "\r\n";
    $headers .= "Content-type:text/html;charset=UTF-8" . "\r\n";
    $headers .= "From: Portfolio Portal <noreply@yourdomain.com>" . "\r\n";
    $headers .= "Reply-To: $email" . "\r\n";

    // Send
    if (mail($to, $subject, $email_content, $headers)) {
        http_response_code(200);
        echo "Thank you. Your message has been sent.";
    } else {
        http_response_code(500);
        echo "Oops! Something went wrong and we couldn't send your message.";
    }
} else {
    http_response_code(405);
    echo "Method Not Allowed";
}
?>