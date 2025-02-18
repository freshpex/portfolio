AOS.init();

//  Work experience cards

const experiencecards = document.querySelector(".experience-cards");
const exp = [
  {
    title: "Junior Frontend Developer",
    cardImage: "assets/images/experience-page/retailloop.jpg",
    place: "Retailloop",
    time: "(January, 2024 - August, 2024)",
    desp: "<li> Developed and implemented new features for the Retailloop platform, enhancing the user experience and functionality.</li> <li> Assisted in the automation of inventory management, saving users time and money.</li>",
  },
  {
    title: "Open Source Contributor",
    cardImage: "assets/images/experience-page/github.jpg",
    place: "Github",
    time: "(December 2023 - present",
    desp: "<li> Created a travel planner app using React that allows users to plan their trips, find Attractions and hotels, and get directions on a map</li> <li> Developed online banking websites using Flask and Bootstrap that allow users to manage their </li>",
  },
  {
    title: "Teaching Assistant",
    cardImage: "assets/images/experience-page/kiboschool.jpg",
    place: "Kibo School",
    time: "(September - December, 2023)",
    desp: "<li>Assisted the Professor in teaching Web Foundation to undergraduate students. </li> <li>Mentored students and provided guidance on course material. </li>",
  },
  {
    title: "Software Engineer Intern",
    cardImage: "assets/images/experience-page/codeday.jpg",
    place: "CodeDay Labs",
    time: "(June - August, 2023)",
    desp: "<li> Added a triangle indicator to the avatars in Zulip. This made it easier to differentiate a bot, a guest user and a normal user.</li> <li>Contributing to an Open Source Project-Advance track </li>",
  },
];

const showCards2 = () => {
  let output = "";
  exp.forEach(
    ({ title, cardImage, place, time, desp }) =>
      (output += `        
    <div class="col gaap" data-aos="fade-up" data-aos-easing="linear" data-aos-delay="100" data-aos-duration="400"> 
      <div class="card card1">
        <img src="${cardImage}" class="featured-image"/>
        <article class="card-body">
          <header>
            <div class="title">
              <h3>${title}</h3>
            </div>
            <p class="meta">
              <span class="pre-heading">${place}</span><br>
              <span class="author">${time}</span>
            </p>
            <ol>
              ${desp}
            </ol>
          </header>
        </article>
      </div>
    </div>
      `)
  );
  experiencecards.innerHTML = output;
};
document.addEventListener("DOMContentLoaded", showCards2);

// // Volunteership Cards

// const volunteership = document.querySelector(".volunteership");
// const volunteershipcards = [
//   {
//     title: "GirlScript Summer Of Code 2020",
//     cardImage: "assets/images/experience-page/1.jpg",
//     description:
//       "Responsible for handling the projects GirlScript App and GirlScript Website Boilerplate.",
//   },
//   {
//     title: "StudentCode-in 2020",
//     cardImage: "assets/images/experience-page/2.jpg",
//     description:
//       "Responsible for handling open source contributions for the project Awesome Developer Portfolio.",
//   },
//   {
//     title: "PClub Summer Of Code 2020",
//     cardImage: "assets/images/experience-page/3.jpg",
//     description:
//       "Mentoring for the projects Deep Pixel, AutoVaidya, Just Resume and Doc2pen.",
//   },
//   {
//     title: "Hakin-Codes",
//     cardImage: "assets/images/experience-page/4.jpg",
//     description:
//       "Mentoring for the open source projects Deeppixel, Awesome Developer Portfolios and Doc2Pen.",
//   },
// ];

// const showCards = () => {
//   let output = "";
//   volunteershipcards.forEach(
//     ({ title, cardImage, description }) =>
//       (output += `        
//       <div class="card volunteerCard" data-aos="fade-down" data-aos-easing="linear" data-aos-delay="100" data-aos-duration="600" style="height: 550px;width:400px">
      
//       <img src="${cardImage}" height="250" width="65" class="card-img" style="border-radius:10px">
//       <div class="content">
//           <h2 class="volunteerTitle">${title}</h2><br>
//           <p class="copy">${description}</p></div>
      
//       </div>
//       `)
//   );
//   volunteership.innerHTML = output;
// };
// document.addEventListener("DOMContentLoaded", showCards);

// Hackathon Section

const hackathonsection = document.querySelector(".hackathon-section");
const mentor = [
  {
    title: "A2SV Hackathon 2024",
    subtitle: "Participant",
    image: "assets/images/experience-page/a2sv.png", // replace this with your image path
    desp: "Participated in the 2024 A2SV Hackathon, focusing on solving challenges that enhance accessibility and social impact through technology.",
    href: "https://hacks.a2sv.org//",
  },
  {
      title: "FCMB Hackathon 2024",
      subtitle: "Participant",
      image: "assets/images/experience-page/fcmb.png", // replace this with your image path
      desp: "Contributed to the 2024 FCMB Hackathon, tackling real-world problems with innovative solutions in the finance and banking sector.",
      href: "https://eventornado.com/submission/yieldmaster/",
  },
];

const showCards3 = () => {
  let output = "";
  mentor.forEach(
    ({ title, image, subtitle, desp, href }) =>
      (output += `  
      <div class="blog-slider__item swiper-slide">
        <div class="blog-slider__img">
            <img src="${image}" alt="">
        </div>
        <div class="blog-slider__content">
          <div class="blog-slider__title">${title}</div>
          <span class="blog-slider__code">${subtitle}</span>
          <div class="blog-slider__text">${desp}</div>
          <a href="${href}" class="blog-slider__button">Read More</a>   
        </div>
      </div>
      `)
  );
  hackathonsection.innerHTML = output;
};
document.addEventListener("DOMContentLoaded", showCards3);
