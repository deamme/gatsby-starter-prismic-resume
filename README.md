# Gatsby Starter: Resume/CV Site with Prismic
This project is part of a YouTube series that's about building a Resume/CV site using Gatsby, Prismic and Netlify from scratch. You can check out the following series here:

https://www.youtube.com/watch?v=9eCOcJZR578&list=PLy3RjrA8UIYJZ08w6bmSDNX10ysI8JuDk

Feel free to Subscribe too :heart:

[Preview site (deployed with Netlify)](https://compassionate-morse-5204bf.netlify.com/)

## Guide
### Project setup
- Fork this repo and clone it to your computer
- Create a `.env` file in the project
- Go to Prismic and get your API KEY - Watch https://youtu.be/2hCm0RwQrWU?list=PLy3RjrA8UIYJZ08w6bmSDNX10ysI8JuDk&t=130
- Copy and paste it into the newly created file - should look something like `API_KEY=PC5XSkxWNMJBQURLbkFCbFFn...`

### Prismic repo setup
- Create a new Prismic repository
- Go to `gatsby-config.js` file and edit the value of `repositoryName` to your Prismic repo name

### Prismic custom types
- Create a new single custom type called `Homepage`
- Go to `config/homepage.json` in your project and copy everything in that file
- Go to your newly created custom type and paste everything into the JSON Editor on the right side

### Publish site from Prismic
- Go to content tab
- Click on the item in the table
- Go populate the content like so https://youtu.be/El0qhYe6Js8?list=PLy3RjrA8UIYJZ08w6bmSDNX10ysI8JuDk&t=199
- And like so https://youtu.be/ZiJ6w_qN_bo?list=PLy3RjrA8UIYJZ08w6bmSDNX10ysI8JuDk&t=39
- Save and publish your site

### Preview site
- You can now do `npm install`
- And then `npm run dev`
- Preview your site

### Setup Prismic trigger to Netlify
- Watch the following: https://youtu.be/ZiJ6w_qN_bo?list=PLy3RjrA8UIYJZ08w6bmSDNX10ysI8JuDk&t=396

## Credits
- [Gatsby Prismic Starter by LekoArts](https://github.com/LekoArts/gatsby-starter-prismic)
- [Standard Resume](https://standardresume.co/)
- [Thanks to Ryan Tsao for the styling of link tags inspiration](https://ryantsao.com/blog/virtual-css-with-styletron)

## Socials
- Twitter: https://twitter.com/deamlabs
- YouTube: https://www.youtube.com/user/DeamMe
- SoundCloud: https://soundcloud.com/deam
