# Workshop: Building a Image Editing App For Social Media

Welcome to this workshop! Today, you will learn how to build a prototype for an AI-powered Image Editing App For Social Media using Google AI Studio and Cloud Run.

**Goal:** Create an AI assistant that takes up to 3 input photos, analyzes them for style and content, suggests creative transformation ideas, and generates a final image prompt (or image) based on your choice.

## Prerequisites

- A Google Account.
- Access to [Google AI Studio](https://aistudio.google.com/).
- Credits for using Google Cloud Platform and Gemini.

---

## Step 1: Get Your API Key

To use Gemini models, you need an API key.

1. Go to [Google AI Studio](https://aistudio.google.com/).
2. Click on the **"Get API key"** button in the bottom-left corner.
3. Click **"Create API key"** (you can create it in a new or existing project). Make sure to select the project that has the credits.

## Step 2: Create The Application

1. On the AI Studio home screen, click **Home** then **Build AI Apps**.
2. In the Model dropdown on the right, ensure you are using **Gemini 3 Flash Preview**.
3. Create the app by using the following prompt and click build.

```text
Build a modern, professional, and visually stunning "Marketing Asset Creator" app.

**Core Functionality:**
1.  **Upload**: Allow users to upload up to 3 images (max 5MB each) via a sleek drag-and-drop zone.
2.  **Analysis & Inspiration**: When images are uploaded, use the Gemini API to analyze them and generate 5 distinct, creative "Remix Ideas" for combining them into a professional marketing asset.
3.  **Generation**: Allow the user to select an idea. Use the selected idea as a prompt to generate the final merged image using `gemini nano banana`.

**Design & UI Requirements (Critical):**
- **Frameworks**: Use React, Tailwind CSS V4, and Vite.
- **Visual Style**: Create a **premium, polished interface**. Use a dark theme with glassmorphism (translucency), subtle gradients, and rounded corners.
- **Typography**: Use modern sans-serif fonts (e.g., Inter or Roboto) for a clean look.
- **Interactions**: Add smooth transitions and hover effects. Use loading skeletons or spinners while the AI is thinking.
- **Layout**: Ensure it looks professional, with a sidebar or clean centered layout for the results.

**System Instructions for the AI:**
1.  **Analyze**: Identify key subjects, dominant colors, and lighting in the user's photos.
2.  **Inspire**: Suggest 5 ideas. Each idea should have a catchy Title and a descriptive "visual prompt" text.
    *   *Example Idea*: "Neon Cyberpunk Blend - Merge the subject with a futuristic city background using high contrast neon lighting."
3.  **Generate**: Output the selected idea to the image generation model.
```

## Step 3: Deploy to Cloud Run

1. Click **"Deploy App"** icon on the top-right of the code editor.
2. Select Google Cloud Project where you have credits.
3. Click **"Deploy App"**.
4. Access the app by clicking the URL provided.

## Challenges

1. Look at the prompt used to generate the ideas and the final image. Can you improve it?
2. Check the model used for generating the ideas and the final image. Is it Gemini 3 Flash Preview? How much does it cost to use it?
3. We are actually building a frontend application and then deploy it to Cloud Run. The API_KEY is there in the code. Is it secure to have it there? How can we make it more secure? What else we can do to make it more production ready?
