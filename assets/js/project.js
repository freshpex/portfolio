AOS.init();
/* Project Cards */

const projectcards = document.querySelector(".projectcards");

// Array of object for projects
const projects = [
  {
    title: "Construction Equipment Marketplace",
    cardImage: "assets/images/project-page/construction1.png",
    description: "E-commerce platform for construction equipment with advanced filtering, equipment comparison, and secure checkout.",
    tagimg: "https://cdn.iconscout.com/icon/free/png-512/react-1-282599.png",
    Previewlink: "https://tconstructor.onrender.com",
    Githublink: "https://github.com/freshpex/Construction-Company-Site-Template/tree/main",
  },
  {
    title: "Contractor Hiring Platform",
    cardImage: "assets/images/project-page/contractor.png",
    description: "Platform connecting contractors with clients, featuring project bidding, contractor profiles, and review system.",
    tagimg: "https://cdn.iconscout.com/icon/free/png-512/react-1-282599.png",
    Previewlink: "https://econstruction.onrender.com",
    Githublink: "https://github.com/freshpex/Construction-Website",
  },
  {
    title: "Fashion Designer",
    cardImage: "assets/images/project-page/fashion.png",
    description: "Elegant portfolio website showcasing fashion collections, lookbooks, and booking system for consultations.",
    tagimg: "https://cdn.iconscout.com/icon/free/png-512/react-1-282599.png",
    Previewlink: "https://johnfashion.vercel.app",
    Githublink: "https://github.com/freshpex/fashion-portfolio",
  },
  {
    title: "Global Parcel Tracker",
    cardImage: "assets/images/project-page/parcel1.png",
    description: "Real-time package tracking system with global shipping calculator and delivery status notifications.",
    tagimg: "https://cdn.iconscout.com/icon/free/png-512/react-1-282599.png",
    Previewlink: "https://par-eight.vercel.app",
    Githublink: "https://github.com/freshpex/parcel",
  },
  {
    title: "Express Shipping Solutions",
    cardImage: "assets/images/project-page/parcel2.png",
    description: "Comprehensive shipping management system with rate comparison, label generation, and customs documentation.",
    tagimg: "https://cdn.iconscout.com/icon/free/png-512/react-1-282599.png",
    Previewlink: "https://franch-express.onrender.com/",
    Githublink: "https://github.com/freshpex/Franch-Express-Courier",
  },
  {
    title: "Melodify - Music Streaming Platform",
    cardImage: "assets/images/project-page/music.png",
    description: "Spotify-inspired music streaming application with personalized playlists, artist profiles, and social features.",
    tagimg: "https://cdn.iconscout.com/icon/free/png-512/react-1-282599.png",
    Previewlink: "https://music-two-ecru.vercel.app",
    Githublink: "https://github.com/freshpex/music",
  },
  {
    title: "Influence Hub",
    cardImage: "assets/images/project-page/influencer.png",
    description: "Platform connecting brands with influencers, featuring campaign management, analytics, and payment processing.",
    tagimg: "https://cdn.iconscout.com/icon/free/png-512/react-1-282599.png",
    Previewlink: "https://influencer-gamma.vercel.app",
    Githublink: "https://github.com/freshpex/influencer-marketing",
  },
  {
    title: "Account Marketplace",
    cardImage: "assets/images/project-page/accounts.png",
    description: "Secure social media account marketplace with escrow system, verification process, and transaction management.",
    tagimg: "https://cdn.iconscout.com/icon/free/png-512/react-1-282599.png",
    Previewlink: "https://scottech.vercel.app/",
    Githublink: "https://github.com/freshpex/accountSalesFrontend",
  },
  {
    title: "Secure Online Banking Platform",
    cardImage: "assets/images/project-page/bankwebsite.png",
    description: "A full-featured banking platform built with Flask, featuring secure transactions, account management, and real-time balance updates.",
    tagimg: "https://th.bing.com/th?id=OIP.1NAnYkHapE24GONDztTQGQHaFj&w=288&h=216&c=8&rs=1&qlt=90&o=6&dpr=1.2&pid=3.1&rm=2",
    Previewlink: "https://bdclient.vercel.app/",
    Githublink: "https://github.com/freshpex/online-bank-of-bd-client-test/tree/master",
  },
  {
    title: "Utravel - Modern Flight Booking System",
    cardImage: "assets/images/project-page/p1.png", 
    description: "A React-based flight booking platform with real-time search, interactive booking flow, and responsive design for seamless user experience.",
    tagimg: "https://cdn.iconscout.com/icon/free/png-512/react-1-282599.png",
    Previewlink: "https://airplaneutravel.vercel.app/",
    Githublink: "https://github.com/freshpex/freshpex-airplane",
  },
  {
    title: "ML Stock Market Predictor",
    cardImage: "https://th.bing.com/th?q=Stock+Market+Line+Graph&w=120&h=120&c=1&rs=1&qlt=90&cb=1&dpr=1.4&pid=InlineBlock&mkt=en-US&cc=US&setlang=en&adlt=moderate&t=1&mw=247",
    description: "Machine learning-powered platform for stock market analysis and prediction using advanced algorithms.",
    tagimg: "https://th.bing.com/th/id/OIP.fvrf00-2StWdCIH8QSVfqwHaF7?w=213&h=180&c=7&r=0&o=5&dpr=1.2&pid=1.7",
    Previewlink: "https://prediction-z6zg.onrender.com/",
    Githublink: "https://github.com/freshpex/stock-prediction",
  },
  {
    title: "Digital Banking Solution",
    cardImage: "https://th.bing.com/th/id/OIP.zAAnpaDUPzK3uctbvLU82QHaEH?w=182&h=101&c=7&r=0&o=5&dpr=1.2&pid=1.7",
    description: "Modern banking platform with Flask backend, featuring secure authentication, transaction management, and real-time account updates.",
    tagimg: "https://th.bing.com/th?id=OIP.1NAnYkHapE24GONDztTQGQHaFj&w=288&h=216&c=8&rs=1&qlt=90&o=6&dpr=1.2&pid=3.1&rm=2",
    Previewlink: "https://bankiste.vercel.app/",
    Githublink: "https://github.com/freshpex/Bankist-Web-App",
  },
  {
    title: "Bank Website",
    cardImage: "assets/images/project-page/bankWeb.png",
    description: "Created a secure bank website using Flask for transactions and account management.",
    tagimg: "https://th.bing.com/th?id=OIP.1NAnYkHapE24GONDztTQGQHaFj&w=288&h=216&c=8&rs=1&qlt=90&o=6&dpr=1.2&pid=3.1&rm=2", // Bank tag image
    Previewlink: "https://banklinees.vercel.app",
    Githublink: "https://github.com/freshpex/Flask-Bank-line",
  },
  {
    title: "Eudaimonia - Student Wellness Platform",
    cardImage: "assets/images/project-page/eudaimonia.png",
    description: "Comprehensive wellness application designed to help university students maintain healthy lifestyles through personalized tracking and recommendations.",
    tagimg: "https://th.bing.com/th/id/OIP.VpPAZs4kqQUh4OvnQaSndgHaE8?w=273&h=183&c=7&r=0&o=5&dpr=1.2&pid=1.7",
    Previewlink: "https://eudaimonia.onrender.com/",
    Githublink: "https://github.com/iamfaqeehhokyky/Eudaimonia",
  },
  {
    title: "HealthCare Plus",
    cardImage: "assets/images/project-page/healthcare.png",
    description: "Comprehensive healthcare platform with appointment scheduling, patient records, and pharmacy management system.",
    tagimg: "https://cdn.iconscout.com/icon/free/png-512/react-1-282599.png",
    Previewlink: "https://youtu.be/E9DQf-_dwPw",
    Githublink: "https://youtu.be/E9DQf-_dwPw",
  },
  {
    title: "Resturant",
    cardImage: "assets/images/project-page/restaurant.png",
    description: "Modern restaurant platform featuring online ordering, table reservations, and real-time kitchen management.",
    tagimg: "https://cdn.iconscout.com/icon/free/png-512/react-1-282599.png",
    Previewlink: "https://timskitchen4u.vercel.app",
    Githublink: "https://github.com/freshpex/Test-Restuarant-App",
  },
  {
    title: "Cars Hub",
    cardImage: "assets/images/project-page/cars.png",
    description: "Advanced car dealership platform with vehicle listings, comparison tools, and financing calculator.",
    tagimg: "https://www.bing.com/th?id=OIP.sm2bWXumX-ih85YV7pEgYQHaEt&w=314&h=200&c=8&rs=1&qlt=90&o=6&dpr=1.2&pid=3.1&rm=2",
    Previewlink: "https://carzones.vercel.app",
    Githublink: "https://github.com/freshpex/cars",
  },
  {
    title: "Interactive Rewards Dashboard",
    cardImage: "assets/images/project-page/p2.png",
    description: "Dynamic rewards tracking system featuring real-time earnings updates, cashback history, and multiple redemption options.",
    tagimg: "https://th.bing.com/th/id/OIP.D2T6uVGU3Jp3is8cguPhNwHaFk?w=219&h=180&c=7&r=0&o=5&dpr=1.4&pid=1.7",
    Previewlink: "https://reward-beryl.vercel.app/",
    Githublink: "https://github.com/freshpex/Reward",
  },
  {
    title: "Smart Travel Planner Suite",
    cardImage: "assets/images/project-page/p3.png",
    description: "Comprehensive travel planning tool integrating multiple APIs for real-time hotel bookings, attraction discovery, and weather forecasting.",
    tagimg: "https://cdn.iconscout.com/icon/free/png-512/react-1-282599.png",
    Previewlink: "https://travel-planner-two.vercel.app/",
    Githublink: "https://github.com/freshpex/Travel-planner",
  },
  {
    title: "AI-Powered Tic Tac Toe",
    cardImage: "assets/images/project-page/tic-tac-toe.png",
    description: "Advanced implementation of the classic game using MiniMax Algorithm for unbeatable AI opponent.",
    tagimg: "https://cdn.iconscout.com/icon/free/png-512/react-1-282599.png",
    Githublink: "https://github.com/freshpex/minimax",
  }
];

// function for rendering project cards data
const showCards = () => {
  let output = "";
  projects.forEach(({ title, cardImage, Previewlink, Githublink }) => {
    output += `       
      <div class="column skill-card card" style="margin: 15px"data-aos="zoom-in-up" data-aos-easing="linear" data-aos-delay="300" data-aos-duration="600" >
        <div class="wrapper" style="background: url(${cardImage}) center / cover no-repeat; cursor: pointer;" onclick="window.location.href='${Previewlink}'">
        <div class="header">
        </div>
        <div class="data">
          <div class="content">
          <div class="title-div">
          <h1 class="title"><a href="#">${title}</a></h1>
          </div>
        <ul class="menu-content"><br>
            <li><a href="${Githublink}" class="social-icon"><svg xmlns="http://www.w3.org/2000/svg" width="30" height="25" viewBox="0 0 30 28" fill="none" stroke="#fff" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" class="feather feather-github"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg></a></li>
            <li><a href="${Previewlink}" class="social-icon"><svg xmlns="http://www.w3.org/2000/svg" width="30" height="25" viewBox="0 0 30 28" fill="none" stroke="#fff" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" class="feather feather-monitor"><rect x="2" y="3" width="20" height="14" rx="2" ry="2"></rect><line x1="8" y1="21" x2="16" y2="21"></line><line x1="12" y1="17" x2="12" y2="21"></line></svg></a></li>
            </ul>
          </div>
        </div>
        </div>
      </div>`;
  });
  projectcards.innerHTML = output;
};
document.addEventListener("DOMContentLoaded", showCards);

function myFunction() {
  // Declare variables
  var input, button, i, skillcard, card, title;
  input = document.getElementById("myInput").value;
  input = input.toUpperCase();
  skillcard = document.getElementsByClassName("skill-card");
  card = document.getElementsByClassName("card");
  title = document.getElementsByClassName("title");

  // Loop through all list items, and hide those who don't match the search query
  for (i = 0; i < button.length; i++) {
    if (
      button[i].innerHTML.toUpperCase().includes(input) ||
      title[i].innerHTML.toUpperCase().includes(input)
    ) {
      skillcard[i].style.display = "";
      card[i].style.display = "";
    } else {
      skillcard[i].style.display = "none";
      card[i].style.display = "none";
    }
  }
}
