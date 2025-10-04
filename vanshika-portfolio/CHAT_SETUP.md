# Live Chat Setup Guide

This guide will help you set up a live chat widget on your portfolio so recruiters can message you directly.

## Option 1: Tawk.to (Recommended - Free)

### Step 1: Create Account
1. Go to [tawk.to](https://www.tawk.to/)
2. Click "Sign Up" and create a free account
3. Verify your email address

### Step 2: Get Your Credentials
1. After logging in, go to "Administration" → "Channels" → "Chat Widget"
2. You'll see your Property ID and Widget ID
3. Copy these values

### Step 3: Update Your Code
1. Open `src/App.tsx`
2. Replace `YOUR_TAWK_PROPERTY_ID` with your actual Property ID
3. Replace `YOUR_TAWK_WIDGET_ID` with your actual Widget ID

### Step 4: Customize (Optional)
1. In Tawk.to dashboard, go to "Administration" → "Channels" → "Chat Widget"
2. Customize the widget appearance, colors, and messages
3. Set up your availability hours
4. Add a welcome message for recruiters

## Option 2: Crisp (Alternative)

### Step 1: Create Account
1. Go to [crisp.chat](https://crisp.chat/)
2. Sign up for a free account
3. Verify your email

### Step 2: Get Your Website ID
1. After logging in, go to "Settings" → "Website" → "Setup"
2. Copy your Website ID

### Step 3: Update Your Code
1. Open `src/App.tsx`
2. Change the provider to "crisp"
3. Replace `YOUR_CRISP_WEBSITE_ID` with your actual Website ID

## Option 3: Intercom (Professional)

### Step 1: Create Account
1. Go to [intercom.com](https://www.intercom.com/)
2. Sign up for a free account
3. Create a new app

### Step 2: Get Your App ID
1. In your Intercom dashboard, go to "Settings" → "Installation"
2. Copy your App ID

### Step 3: Update Your Code
1. Open `src/App.tsx`
2. Change the provider to "intercom"
3. Replace `YOUR_INTERCOM_APP_ID` with your actual App ID

## Testing Your Chat

1. Run your development server: `npm run dev`
2. Open your portfolio in a browser
3. Look for the chat widget (usually bottom-right corner)
4. Test sending a message from another browser/device

## Pro Tips for Recruiters

1. **Set up auto-responses** for when you're not available
2. **Customize the welcome message** to be professional and friendly
3. **Include your availability hours** in the chat widget
4. **Test on mobile devices** to ensure it works well on all platforms
5. **Consider adding a "Contact Me" section** in your portfolio that mentions the chat feature

## Troubleshooting

- If the chat widget doesn't appear, check the browser console for errors
- Make sure you've replaced the placeholder credentials with real ones
- Verify your chat service account is active
- Test in an incognito/private browser window

## Security Notes

- Never commit your real credentials to version control
- Consider using environment variables for production
- Regularly check your chat service dashboard for messages
