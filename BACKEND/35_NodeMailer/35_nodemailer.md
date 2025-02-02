1. Open Postman

2. Create a New Request
   - Click on "New Request".
   - Select "POST" as the request type.
   - Enter the URL: http://localhost:3000/send-email

3. Set Headers
   - Go to the "Headers" tab.
   - Add the following key-value pair:
     ```
     Key: Content-Type
     Value: application/json
     ```

4. Add JSON Body
   - Go to the "Body" tab.
   - Select "raw" and choose JSON format.
   - Enter the following JSON data:
    json
    ```
    {
       "to": "recipient@example.com",
       "subject": "Test Email",
       "text": "Hello, this is a test email from my Node.js app!"
    }
    ```
   - Replace "recipient@example.com" with the actual recipient's email.

5. Send the Request
   - Click "Send".
   - If successful, you will receive the response:
     ```
     Email sent successfully
     ```
   - If there's an error, Postman will display the error message.

6. Check Your Email
   - If the email is sent successfully, check the recipient's inbox or spam folder.

✅ Step-by-Step Fix
1️⃣ Use an "App Password" Instead of Your Email Password
Google doesn't allow direct login via scripts anymore. Instead, you must use an App Password.

How to Generate an App Password?
Go to Google App Passwords
Sign in to your Google account.
Select "Mail" as the app.
Select "Other (Custom Name)" and type "NodeMailer".
Click Generate and copy the 16-character password.
Replace 'Gaurav@2005' in your code with this new App Password.

To create App Password or Less Secure Password:-
1) Open Gmail
2) Open Manage Google Account
3) Enable 2FA
4) Then Search "App passwords" (in Gmail at "Manage Google Account")
5) Write App Name (ANY NAME)
6) pass is Created