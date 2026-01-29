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
Create marketing asset image creation. User should be able to upload up to 3 pictures with each max size is 5MB. When the project is created, user should get several ideas on how these 3 image should be merged/combined. User will choose the idea and then the selected idea should be used as the prompt to generate new image. Generate the idea by using gemini api. For generating image, use the selected idea and gemini nano banana to generate the image.

Use React, Tailwind CSS V4, and Vite.

The process is as follows:
1.  **Analyze**: The user will upload 1 to 3 photos. You must analyze them for:
    *   Key subjects (people, objects, scenery).
    *   Dominant colors and lighting.
    *   Artistic style and mood.

2.  **Inspire**: Based on the photos, suggest 5 distinct, creative "Remix Ideas". The idea should help user to create a new image by combining the uploaded images and create professional marketing assets.

3.  **Generate**: Based on the photos, use the selected idea as prompt for combining the images.
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
```
