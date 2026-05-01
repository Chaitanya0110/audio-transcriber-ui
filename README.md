AI Audio Transcriber UI 🎧
A modern, responsive React frontend designed for seamless audio file uploads and real-time transcript visualization. This application acts as the client-side interface for the AI Audio Transcriber API.

🚀 Features
Easy file selection for audio processing.

Real-time Processing Feedback: Visual indicators while the AI generates transcripts.

Clean UI: Minimalist design focused on readability.

Responsive Layout: Fully functional on mobile and desktop browsers.

🛠️ Tech Stack
Framework: React 18+

Build Tool: Vite

State Management: React Hooks

Styling: Custom CSS with a focus on UX

API Client: Axios for asynchronous backend communication

⚙️ Configuration & Environment Variables
To connect this UI to the backend service, you must configure a .env file in the root directory.

Create a .env file:

Code snippet
VITE_API_URL=https://your-backend-api-on-render.com
Important: The VITE_ prefix is required by Vite to expose variables to your client-side code.

💻 Local Development
Clone the repository:

Bash
git clone https://github.com/Chaitanya0110/audio-transcriber-ui.git
cd audio-transcriber-ui
Install dependencies:

Bash
npm install
Run the development server:

Bash
    npm run dev
    ```
    Access the app at `http://localhost:5173`.

## 🌐 Deployment
This frontend is optimized for deployment on **Netlify** or **Vercel**. When deploying, ensure the `VITE_API_URL` environment variable is set in the deployment dashboard to point to your live Render backend.
