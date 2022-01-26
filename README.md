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

Yes, after creating a Node / Express server that runs a headless browser in the background for web scrapping, I went ahead and implemented a MongoDB database and used Mongoose to connect to the database and generate a Schema and Model for the data that'd be generated by Puppeteer.





 
* **

You can join this and many other challenges on [Frontend Mentor](https://www.frontendmentor.io/)

## My work

You can find more challenges that I've completed [here](https://www.frontendmentor.io/profile/Remus432)