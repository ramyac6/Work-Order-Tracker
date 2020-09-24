## [Video Demo](https://www.youtube.com/watch?v=lr7C8syLaHE&feature=emb_title)

## Inspiration
Having submitted many work orders for my terrible dorm room, I've been quite interested in how work orders are processed, specifically on the management side. How is it that a worker can show up the next day with exactly the right tools for the job? For this hackathon, I decided to create a mock version of a work order manager with a customer side user interface.
## What it does
Workder allows customers to fill out work orders and track them in real time. They fill out a form that then gets sent to FireStore where an optimized query takes place to determine the appropriate worker to send for the job. Then the worker is notified of the work order via SMS and the customer sees this information in real-time.
## How I built it
Workder is built with a React Native framework with several other APIs.
Firebase was used for user authentication (and a failed attempt at hosting)
FireStore was used as a realtime database for data management
Stores Data and User Information.
GitHub was used for file management.
Netlify was attempted to be used for hosting.
Radar.io was used to target workers who were closest to the job.
## Challenges I ran into
React Native is one of those tools where a lot of APIs don't really have support so everything is community made and with that comes it's own challenges. For example, I was using a dropdown component that was 4 years out of date and it had a bug where the entire app would not connect because some module was missing, but there wasn't any documentation on it. After hunting around, there was a stack overflow post saying to change the import statement to say v2 and everything fixed itself. That entire issue took an unhappy 3 hours to track down.
Another fun problem is that React Native is constantly changing and features that I may have used a year ago are now deprecated and held up by community remakes. Navigation between screens was something that I had to relearn from scratch as the update from v4 to v5 completely rewrote how navigation was done.
Deploying things that are still in beta is hard. React Native offers support for Web, but that doesn't mean there's good documentation on how to deploy it. After several failed attempts at Firebase hosting, I went with Netlify which is hopefully loaded and working by the time you see this.
## Accomplishments that I'm proud of
FireStore works! I've used FireStore before, but only to query the user's name so that it could be displayed. I learned how to query a database and how to return values from it to display in my app. Coming from no database background, this was pretty fun.
## What I learned
The values and perils of community built libraries.
## What's next for Workder
- Better integration with Radar.io
  - Real-time tracking of workers as they arrive
- Worker user interface so that they aren't reliant on text messages alone
- Admin user interface to see all the datas
- Ability to submit invoices through the app
- Actual deployment!
