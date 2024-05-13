# electron-web-browser
Simple Electron web browser supports popups and google search as default

# Intro
This is a simple web browser using electron js and it's using pure javascript, it's support search in the web url like modern browsers<br>it has url validation with or without http/https and if no url entered the text will be searched using google search enginge.
<br><br>
# Exporting App
to export the app, you need to change `PROD` from `false` to `true` inside ` main.js ` file 

# Development 
All funcitons are exists in the file  `renderer.js` and evethhing is commented to make it easy to understand and modify <br><br>

### Getting started 
to get started runnuing the app, you need to install dependencies<br>
`npm install`  OR  `yarn`<br>
after installation you can run `npm start` <br><br>

# Building the app 
To build the app, you need to update the details inside the `package.json` under `build` section, update the details and then run <br>`npx electron-builder`
