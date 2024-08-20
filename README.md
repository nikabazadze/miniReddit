# MiniReddit

## Introduction
MiniReddit is a front-end clone of the popular social media site Reddit. It was developed as a final practice project in front-end development, utilizing HTML, CSS, JavaScript, React, and Redux. MiniReddit is a demonstration of front-end capabilities, functioning without a back-end server or database. Despite its front-end only nature, MiniReddit offers a complex and engaging user experience, mimicking the essential features of the original Reddit. This application serves as a testament to the skills I've acquired in front-end development and offers a comprehensive demonstration of them in action.

![MiniReddit Screenshot](/src/app-screenshot.png)

## Features
- **Subreddit Browsing:** Fetch and display subreddits.
- **Post Viewing:** View posts from different subreddits.
- **Comments Interaction:** Access comments for individual posts.
- **Responsive Design:** Adapts to various screen sizes for optimal user experience.
- **Search Functionality:** Filter posts based on titles.
- **Interactive Elements:** Upvote/downvote posts, expand post content, and hide posts.
- **User Post Creation**: Users can now create posts using text, image, or video content, a feature that was initially planned as a future improvement and has been successfully implemented.. Although these posts are not saved permanently (they will be lost after a page refresh), implementing this feature was a challenging and valuable learning experience. Media files are uploaded using AWS S3 bucket and pre-signed URLs, providing a practical introduction to handling file uploads in web applications. This feature enhances the interactive experience of the application and demonstrates the ability to integrate and utilize additional technologies.

## Live Demo
Visit the live version of MiniReddit [here](https://minireddit-app.netlify.app/).

## Technology Stack
- **Front-end Development:** HTML, CSS, JavaScript, React, Redux.
- **API:** Reddit JSON API for fetching subreddit, post, and comment data.
- **Deployment:** Hosted on Netlify.

## Project Structure
- `src`: Main directory containing the core files of the project.
  - `API`: Contains asynchronous functions for Reddit API communication.
  - `app`: Houses the `App.js`, `App.css`, and Redux `store.js`.
  - `components`: Includes reusable components like Header, LeftColumn, etc.
  - `features`: Contains Redux slices and respective React components and styles.
  - `utils`: Utility functions for data formatting and manipulation.

## Installation and Setup
- Clone the repository: `git clone https://github.com/yourusername/minireddit.git`
- Navigate to the project directory: `cd minireddit`
- Install dependencies: `npm install`
- Start the application: `npm start`

## Project Motivation
The genesis of MiniReddit was rooted in my desire to consolidate and apply the front-end development skills I had acquired. This project was not just about building an application; it was an endeavor to weave together various strands of my learning journey into a cohesive and functional whole. My objectives were multifaceted:

- **Practice with React:** To employ React in building a dynamic web application, reinforcing my understanding of its component-based architecture.

- **Data Management with Redux:** To utilize Redux for state management, ensuring a centralized and predictable state container for the app.

- **API Integration:** To incorporate a third-party API, in this case, the Reddit JSON API, and effectively fetch and manipulate external data.

- **Responsive Design Implementation:** To ensure accessibility across a range of devices, emphasizing adaptable and fluid design.

The complexity of MiniReddit was fittingly aligned with these goals, providing a comprehensive platform to apply my knowledge. More importantly, it was a journey of discovery, revealing the intricate interplay between different front-end technologies. The true value of this project lies in the practical insights it offered - insights into how disparate elements of front-end development harmonize to create a seamless user experience.

## Technical Challenges
Embarking on the MiniReddit project, I encountered a range of challenges that were both intellectually stimulating and immensely rewarding:

- **Integrating Front-End Technologies:** One of the most significant challenges was conceptualizing how to bring together various front-end technologies to build a cohesive application. Understanding the synergy between React and Redux, particularly in the context of state management and component structuring, was a pivotal aspect of this learning process.

- **Redux and React Interaction:** Grappling with the distinct roles of Redux and React, especially considering that React components can also manage state, was initially perplexing. The project enhanced my understanding of effectively leveraging Redux for global state management while utilizing React's local state capabilities where appropriate.

- **Componentization in React:** 'Thinking in React' and deciding when to abstract functionality into separate components was a learning curve. This aspect of development required iterative refinement, gradually leading to a more modular and reusable codebase.

- **Responsive Design Strategies:** Tailoring the application for smaller screens presented its own set of challenges. Implementing a 'Menu' component to accommodate content from the desktop layout and making various other adjustments underscored the importance of responsive design in enhancing user experience across devices.

- **API Data Consumption:** Working with the Reddit JSON API was initially daunting. Utilizing Redux Devtools was instrumental in managing and debugging the flow of data, deepening my understanding of data handling in a Redux-managed environment.

These challenges were not merely hurdles but stepping stones that significantly enhanced my comprehension of front-end development. They underscored the importance of understanding the interconnectivity of various technologies and their roles in building a functional web application. Completing MiniReddit was more than just an academic exercise; it was a practical exploration into the heart of front-end development, cementing a foundational understanding that theory alone could not have provided.

## Future Improvements
While MiniReddit has reached a significant milestone in its current state, the journey of improvement and enhancement is ongoing. Here are some ideas for future iterations:

1. **Dedicated Post Pages:** Implementing individual pages for each post would provide a more detailed view, akin to standard social network behavior. This would allow users to engage with posts and their comments in a more focused and immersive environment.

2. **Autoplay Videos in Viewport:** Introducing autoplay for videos as they appear in the viewport, with automatic pausing when they are no longer visible, would enrich the user experience, making the feed more dynamic and interactive.

3. **Extended Post Feed:** Currently limited to 25 posts per category or subreddit due to API constraints, the feed could be enhanced by fetching additional posts from various subreddits after the initial set. This would create a more diverse and engaging browsing experience.

4. ~~User Post Creation~~: Implemented as of 07/19/2024.

These improvements aim to not only enhance user engagement and interaction but also to push the boundaries of my front-end development skills, exploring new technologies and methodologies in the process.

## Contributing
As this is a practice project, contributions are not actively sought. However, suggestions and feedback are always welcome.

## License
[MIT License](LICENSE)
