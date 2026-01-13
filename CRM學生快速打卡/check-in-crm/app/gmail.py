import os
import base64
from email.mime.text import MIMEText
from email.mime.multipart import MIMEMultipart

from google.oauth2.credentials import Credentials
from googleapiclient.discovery import build


async def send_welcome_email(to_email: str, name: str | None = None) -> bool:
    """
    Send a welcome email using Gmail API.

    Args:
        to_email: Recipient email address
        name: Optional recipient name

    Returns:
        True if email sent successfully, False otherwise
    """
    try:
        client_id = os.getenv("GMAIL_CLIENT_ID")
        client_secret = os.getenv("GMAIL_CLIENT_SECRET")
        refresh_token = os.getenv("GMAIL_REFRESH_TOKEN")
        gmail_user = os.getenv("GMAIL_USER")

        if not all([client_id, client_secret, refresh_token, gmail_user]):
            print("Gmail credentials not configured, skipping email")
            return False

        credentials = Credentials(
            token=None,
            refresh_token=refresh_token,
            token_uri="https://oauth2.googleapis.com/token",
            client_id=client_id,
            client_secret=client_secret,
        )

        service = build("gmail", "v1", credentials=credentials)

        greeting = f"親愛的 {name}" if name else "親愛的朋友"

        html_content = f"""
        <!DOCTYPE html>
        <html>
        <head>
            <meta charset="UTF-8">
            <style>
                body {{
                    font-family: 'Microsoft JhengHei', Arial, sans-serif;
                    line-height: 1.8;
                    color: #333;
                    max-width: 600px;
                    margin: 0 auto;
                    padding: 20px;
                }}
                .header {{
                    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
                    color: white;
                    padding: 30px;
                    text-align: center;
                    border-radius: 10px 10px 0 0;
                }}
                .content {{
                    background: #f9f9f9;
                    padding: 30px;
                    border-radius: 0 0 10px 10px;
                }}
                .button {{
                    display: inline-block;
                    background: #667eea;
                    color: white;
                    padding: 12px 30px;
                    text-decoration: none;
                    border-radius: 5px;
                    margin-top: 20px;
                }}
                .footer {{
                    text-align: center;
                    margin-top: 20px;
                    color: #666;
                    font-size: 12px;
                }}
            </style>
        </head>
        <body>
            <div class="header">
                <h1>華語文教學系</h1>
                <h2>國際與文化組</h2>
            </div>
            <div class="content">
                <p>{greeting}，您好！</p>

                <p>感謝您對華語文教學系國際與文化組的關注與支持！</p>

                <p>我們很高興您今天參加了我們的活動。華語文教學系致力於培養優秀的華語教學人才，
                結合語言學、文化研究與教學方法，為學生提供全方位的學習體驗。</p>

                <p>如果您想了解更多關於我們系所的資訊，歡迎下載我們的簡介手冊：</p>

                <p style="text-align: center;">
                    <a href="#" class="button">下載系所簡介 (PDF)</a>
                </p>

                <p>如有任何問題，歡迎隨時與我們聯繫！</p>

                <p>祝您學習愉快！</p>

                <p>華語文教學系 國際與文化組 敬上</p>
            </div>
            <div class="footer">
                <p>此郵件由系統自動發送，請勿直接回覆。</p>
            </div>
        </body>
        </html>
        """

        message = MIMEMultipart("alternative")
        message["to"] = to_email
        message["from"] = gmail_user
        message["subject"] = "華語文教學系國際與文化組歡迎您！"

        text_part = MIMEText(
            f"{greeting}，您好！\n\n感謝您對華語文教學系國際與文化組的關注與支持！\n\n華語文教學系 國際與文化組 敬上",
            "plain",
            "utf-8"
        )
        html_part = MIMEText(html_content, "html", "utf-8")

        message.attach(text_part)
        message.attach(html_part)

        raw_message = base64.urlsafe_b64encode(message.as_bytes()).decode("utf-8")

        service.users().messages().send(
            userId="me",
            body={"raw": raw_message}
        ).execute()

        print(f"Email sent successfully to {to_email}")
        return True

    except Exception as e:
        print(f"Failed to send email to {to_email}: {e}")
        return False
