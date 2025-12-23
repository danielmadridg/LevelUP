# Setup Instructions

## 1. Firebase Admin Keys (Server-Side)

Since you switched to Firebase for the backend/auth database, you need to provide NextAuth with "Admin" access.

1.  Go to **Firebase Console** -> **Project Settings** -> **Service Accounts**.
2.  Click **Generate new private key**.
3.  This will download a `.json` file.
4.  Open it.
5.  Update your `c:\ALL\Coding\levelup1\.env` file with values from that JSON:

```env
FIREBASE_PROJECT_ID="your-project-id"
FIREBASE_CLIENT_EMAIL="firebase-adminsdk-xxxxx@your-project.iam.gserviceaccount.com"
FIREBASE_PRIVATE_KEY="-----BEGIN PRIVATE KEY-----\nYourVeryLongKey...\n-----END PRIVATE KEY-----\n"
```

**Important**: The Private Key often has `\n` characters. When pasting into Netlify Environment Variables, you might need to preserve the newlines or replace them manually.

## 2. Netlify Environment Variables

Go to **Netlify Site Settings > Environment Variables** and **DELETE** `DATABASE_URL`.
**ADD** or **UPDATE** these:

- `AUTH_SECRET`: (Random string)
- `AUTH_GOOGLE_ID`: (Your Client ID)
- `AUTH_GOOGLE_SECRET`: (Your Client Secret)
- `FIREBASE_PROJECT_ID`: (From JSON)
- `FIREBASE_CLIENT_EMAIL`: (From JSON)
- `FIREBASE_PRIVATE_KEY`: (From JSON - Copy exact content including dashes)

## 3. Google Cloud Console (OAuth)

Your redirects remain the same:

- `https://levelupa.netlify.app/api/auth/callback/google`
- `http://localhost:3000/api/auth/callback/google`

## 4. Deploy

Once you update the Env Vars on Netlify, trigger a deploy manually or push a commit. The build command `npm run build` will now work without Prisma.
