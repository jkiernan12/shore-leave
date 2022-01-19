<div id="top"></div>
<!--
*** Thanks for checking out the Best-README-Template. If you have a suggestion
*** that would make this better, please fork the repo and create a pull request
*** or simply open an issue with the tag "enhancement".
*** Don't forget to give the project a star!
*** Thanks again! Now go create something AMAZING! :D
-->



<!-- PROJECT SHIELDS -->
<!--
*** I'm using markdown "reference style" links for readability.
*** Reference links are enclosed in brackets [ ] instead of parentheses ( ).
*** See the bottom of this document for the declaration of the reference variables
*** for contributors-url, forks-url, etc. This is an optional, concise syntax you may use.
*** https://www.markdownguide.org/basic-syntax/#reference-style-links
-->
[![Contributors][contributors-shield]][contributors-url]
[![Issues][issues-shield]][issues-url]



<!-- PROJECT LOGO -->
<br />
<div align="center">
  <a href="https://github.com/jkiernan12/rancid-tomatillo">
    <img src="./src/logo.svg" alt="Logo" width="80" height="80">
  </a>

<h3 align="center">Shore Leave</h3>

  <p align="center">
    Find things to do on aquatic adventures 🌊 😎
    <br />
    <a href="https://shore-leave.herokuapp.com/"><strong>View demo</strong></a>
    <br />
  </p>
</div>



<!-- TABLE OF CONTENTS -->
<details>
  <summary>Table of Contents</summary>
  <ol>
    <li>
      <a href="#about-the-project">About The Project</a>
      <ul>
        <li><a href="#built-with">Built With</a></li>
      </ul>
    </li>
    <li>
      <a href="#getting-started">Getting Started</a>
      <ul>
        <li><a href="#prerequisites">Prerequisites</a></li>
        <li><a href="#installation">Installation</a></li>
      </ul>
    </li>
    <li><a href="#usage">Usage</a></li>
    <li><a href="#roadmap">Roadmap</a></li>
    <li><a href="#contributing">Contributing</a></li>
    <li><a href="#license">License</a></li>
    <li><a href="#contact">Contact</a></li>
    <li><a href="#acknowledgments">Acknowledgments</a></li>
  </ol>
</details>



<!-- ABOUT THE PROJECT -->
## About The Project

![overview](https://user-images.githubusercontent.com/73560269/150039728-18e256fb-7735-4304-a58e-e21730608458.gif)

Boating is fun, but sometimes you need a break on land, which is where **Shore Leave** comes in! The app prioritizes finding destinations that are within a user's travel time/distance constraints. Boaters typically only have human-powered transport while on land, and these options are presented in-app, expanding the potential travel radius.

This project uses React, React Router, Cypress and data pulled from two RESTful APIs ([FourSquare's Places API](https://developer.foursquare.com/docs/places-api-overview) and [Marina.com's API](https://marinas.com/developers/api_documentation)) to gather and display data. Trips are saved via localStorage for later viewing.

This project was crafted as part of the curriculum for [Turing School of Software and Design](https://turing.edu/). You can view the project spec [here](https://frontend.turing.edu/projects/module-3/showcase.html).

<p align="right">(<a href="#top">back to top</a>)</p>



### Built With

* [React.js](https://reactjs.org/)
* [React Router](https://reactrouter.com/)
* [Cypress](https://www.cypress.io/)
* [Leaflet](https://leafletjs.com/)
* [React Leaflet](https://react-leaflet.js.org/)
* HTML, CSS, JS

<p align="right">(<a href="#top">back to top</a>)</p>



<!-- GETTING STARTED -->
## Getting Started

This project is deployed [here](https://shore-leave.herokuapp.com/) on Heroku, but if you'd like to interact with it on your local machine, follow the instructions below.

### Installation

1. Clone the repo
   ```sh
   git clone git@github.com:jkiernan12/shore-leave.git
   ```
2. Install NPM packages
   ```sh
   npm install
   ```
3. Deploy the project on your machine
   ```sh
   npm start
   ```
4. Create an .env in the project's root directory, get an [API key from FourSquare](https://developer.foursquare.com/docs/places-api-getting-started), and update the .env with your key values
   ```sh
   REACT_APP_FSQ_KEY=YOUR_KEY_HERE
   REACT_APP_FSQ_SESSION=YOUR_SESSION_TOKEN_HERE

<p align="right">(<a href="#top">back to top</a>)</p>



<!-- USAGE EXAMPLES -->
## Usage

Select the 'New Trip' button, scroll through the map to find the marina you'd be visiting. Select a marina and a date for your trip and hit the 'Save' button. Then you can search for various destinations around the marina within a certain travel-time radius. View all saved trips on the main page of the application.

<details>
<summary>Main Page</summary>
<br>
<img src='https://user-images.githubusercontent.com/73560269/150039728-18e256fb-7735-4304-a58e-e21730608458.gif' />
</details>

<details>
<summary>Edit Trip Page</summary>
<br>
<img src='https://user-images.githubusercontent.com/73560269/150039758-09f5e51f-6352-4fc3-ad85-e19804fd247e.gif' />

</details>

<p align="right">(<a href="#top">back to top</a>)</p>


## Future Updates 
I was able to accomplish a lot for this project, especially considering we were given five days to work on it. There are definitely a few additionally thing sI would like to incorporate: 
* Incorporate the [TravelTime API](https://docs.traveltime.com/api/overview/introduction) to get accurate results. 
* Refine the map experience (add visible radius, change markers, zoom map according to selected marina)
* Create a backend to handle users and persist trips 
* Improved accessibility experience
* Utilizing Sass to DRY up styling
<!-- CONTACT -->
## Contributors

**John Kiernan**: [GitHub](https://github.com/jkiernan12) | [LinkedIn](https://www.linkedin.com/in/johnfkiernan/) | [jkiernan12@yahoo.com](mailto:jkiernan12@yahoo.com)

<p align="right">(<a href="#top">back to top</a>)</p>


<!-- MARKDOWN LINKS & IMAGES -->
<!-- https://www.markdownguide.org/basic-syntax/#reference-style-links -->
[contributors-shield]: https://img.shields.io/github/contributors/jkiernan12/rancid-tomatillo.svg?style=for-the-badge
[contributors-url]: https://github.com/jkiernan12/rancid-tomatillo/graphs/contributors
[forks-shield]: https://img.shields.io/github/forks/jkiernan12/rancid-tomatillo.svg?style=for-the-badge
[forks-url]: https://github.com/jkiernan12/rancid-tomatillo/network/members
[stars-shield]: https://img.shields.io/github/stars/jkiernan12/rancid-tomatillo.svg?style=for-the-badge
[stars-url]: https://github.com/jkiernan12/rancid-tomatillo/stargazers
[issues-shield]: https://img.shields.io/github/issues/jkiernan12/rancid-tomatillo.svg?style=for-the-badge
[issues-url]: https://github.com/jkiernan12/rancid-tomatillo/issues
[license-shield]: https://img.shields.io/github/license/jkiernan12/rancid-tomatillo.svg?style=for-the-badge
[license-url]: https://github.com/jkiernan12/rancid-tomatillo/blob/master/LICENSE.txt
[linkedin-shield]: https://img.shields.io/badge/-LinkedIn-black.svg?style=for-the-badge&logo=linkedin&colorB=555
[linkedin-url]: https://linkedin.com/in/johnfkiernan
[product-screenshot]: images/screenshot.png