# Frontend Mentor - QR Code Generator Component 

![Design preview for the Todo app
 coding challenge](./design/desktop-preview.jpg)

## Heya! 👋

Today's challenge was building the QR Code Component. Spoiler alert: it became more than just a simple component! :)

[Live Site](https://qr-code-generator-chi.vercel.app/)

## Technologies / Tools Used

* **Svelte**
* **Typescript**
* **SCSS**
* **QR API**
* **GSAP**
* **VanillaTilt**
* **Express**
* **MongoDB**
* **Mongoose**
* **Puppeteer**
* **Heroku**
* **Vite**

* **

## Thought Process

Nothing prepared me for what was about to unfold with this seemingly simple project :D

Initially, this was supposed to be a straightforward Newbie-level challenge from Frontend Mentor. As far as I can tell, this must've been the simplest and easiest design for a Frontend Mentor challenge. Including the project setup (files, folders, etc), finishing this project required less than 30 minutes.

I liked coding it because of the simple, but tasteful aesthetics the design contained.

Still, I wasn't satisfied with it.

It felt as if there was an opportunity to work on something even more interesting and challenging based on the idea proposed by this design. And the most interesting challenges appear when you wonder. So I did.

"What if" - this question, for me, is the Holy Grail of creative inquiry and idea generation.

The main premise started from this question: "What if you could dynamically generate a QR code and view it inside the card component?". Naturally, the challenge itself didn't account for such a scenario on the basis that the nature of the design was all static (including the QR image they provide for you)

I was more than intrigued by the possibility of developing a dynamic QR Code generator feature for this small project. After a simple search, I've discovered multiple API solutions that'd fit my needs. Truth be told, one of the most exciting aspects of being a developer for me is when you realize an idea you came up with can become a reality.

From this singular idea, a stream of ideas began flowing in my mind - "What other features could I add that'd make the experience even more interesting and useful for a user?"

I had to thread carefully so as to not end up developing a SaaS by accident :D
When I finished brainstorming the possible features and how to implement them, it boiled down to this list:

- On load, show the default QR Code and text from Frontend Mentor

- Add a form that'll allow users to submit a website's url to generate a QR Code for it

- Dynamically update the QR Code image every time the form is submitted with a correct url

- Dynamically update the card's text based on the website's page title and meta description / main headline

- Show a preview of the website for which they've generated the QR Code

With this list, I was ready to begin development.

## Development

From what started of as ~25 minutes project, it ended up into a min full-stack project that spanned across hours and used multiple technologies (some of which I was either completely unfamiliar with or was still learning)

I decided not to go overboard by using React - the more lightweight alternative for me was using Svelte, which has become my favorite frontend library at the moment. Coupled with Vite, I knew the production speed would be a lot faster (even on my rather slow laptop)

Therefore, I initialized a Vite Svelte-TS project using the Git Bash and NPM.

The implementation of the design itself was straightforward and didn't require much hassle. Neither was difficult to implement the initial feature - generating a QR code based on the website link provided by the user.

The real challenge began when I realized I'd need a Web Scrapper to get the data from the website provided by the user. After doing some research, I've settled on Puppeteer which basically allows you to run a headless version of the Chrome browser using Chromium. 

The twist was that I had to use Node.js for this.

Although I had worked with Node.js in the past, I was still reluctant to actually implement Puppeteer because: 
 1. I was completely unfamiliar with it 
 2. I wasn't confident in my backend skills with Node and Express

But the excitement of working on a creative project had gotten the best of me and I decided to push past my reluctance and doubts.

Fortunately, the documentation for Puppeteer was quite comprehensive and it provided me with everything I needed for this project. After I made sure that the Node.js / Express server (running locally at that time) could successfully access any given valid URL and scrap for data and also generate a screenshot of the website, I moved to the next step.

For this feature to work, of course I had to connect the fronend of my project with its backend. For simplicity's sake, I decided to just use the Fetch API.

This is when I ran into some annoying CORS issues, which I managed to solve after a bit of hassle.

Even though I should've foreseen it sooner, only later it dawned on me that I'd need a way to allow the project's frontend to access the newly generated data after the POST request to the Node server was successful. Obviously, one could say that the project had already grown far too much beyond its initial scope. While that may be true, I could never stop halfway through on a project that I had committed to so much.

Welcome... 
MongoDB! (and Mongoose)

Yes, after creating a Node / Express server that runs a headless browser in the background for web scrapping, I went ahead and implemented a MongoDB database and used Mongoose to connect to the database and generate a Schema and Model for the data that'd be generated by Puppeteer. I did some research to freshen up my memory on the methods that I'd need to use to update the database upon a 200 POST request and also to retrieve the data from the database and make it accessible to the frontend by means of GET request.

Returning to our good ol' frontend, I realized the component's logic had become one big clutter. 
I could barely make my way through it, let alone another developer that'd be reading my code. 

Since code readability and maintanability are two of my "dev tenets" that I try to uphold at all times, I couldn't simply brush off that amalgament of a code residing inside my project and just call it a day. On top of that, the fact that my project used Typescript meant I had even more capabilities for refactoring my code and ensuring a failproof structure for the logic and data of my project.

When I had begun the refactoring process, I gave myself one free ticket to a headache-filled hour - it wasn't so much as trying to refactor a considerable amount of code as it was trying to analyze and focus on the logic side of the process WHILST also coding. That's why it's important to allocate time beforehand for thinking through the logical structure of your app and also before making any changes. Thinking and coding simultaneously do work, but not when the thinking turns into analyzing. That's when you take a step back and ponder on the project, reflecting from all angles.

After quite a bit of hassle, I ended up with a refactored version of the code that I was satisftied with and still allowed for a successful implementation of all the required features - the main App.svelte file was clean, through and through.

With the frontend architecture refactored and all the features working both on the frontend and backend, I decided it's time to make the project go live.

Oh, how wrong I was to hope for a butter smooth finish.

To host the frontend of my project, I used Vercel. No errors were encountered and Vercel quickly created a build using Vite (as its the bundler that I've added into my project) and deployed the site live. 

The big headache came through when I attempted to deploy my app's backend. For that, I went with the most known solution - Heroku. 
At first, the errors were caused by package.json, which prevented Heroku from starting the server. Fixing this issue only led to the discovery of another issue. This time it was caused by Puppeteer.

Perhaps the most irritating aspect about the Puppeteer errors were that I wasn't even aware they were Puppeteer errors only until later on. 

Every time I made a POST request to my Heroku Node / Express server, it errored out saying it was a CORS issue. I spent more than an hour to no avail trying to fix an issue that, in fact, didn't exist. Only after carefully reviewing the Heroku logs and researching more about Puppeteer operating in the Heroku environment, I discovered it required some extra configuration.

It was an incredible moment of relief when I saw the live versions of my app's frontend and backend successfully communicating between one another and the app working as expected.

To be frank, this project feels far from finished. But I probably say this about all the projects I work on, so perhaps the takeaway here is to know when to say "stop!" :)

All in all, I still enjoyed a lot the process of building this project and getting to dive in, improve on my existing skills, learn new ones, and continue my growth as a frontend developer.

Thank you for taking the time to check out my project - I appreciate you a lot! :)
 
* **

You can join this and many other challenges on [Frontend Mentor](https://www.frontendmentor.io/)

## My work

You can find more challenges that I've completed [here](https://www.frontendmentor.io/profile/Remus432)