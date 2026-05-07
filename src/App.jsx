import { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import "./App.css";

import Header from "./components/Header";
import HomePage from "./pages/HomePage";
import RosterPage from "./pages/RosterPage";
import DiscogPage from "./pages/DiscogPage";
import AboutPage from "./pages/AboutPage";
import ContactPage from "./pages/ContactPage";
import Footer from "./components/Footer";

function App() {
  const allCountries = [
    { name: "Afghanistan" },
    { name: "Åland Islands" },
    { name: "Albania" },
    { name: "Algeria" },
    { name: "American Samoa" },
    { name: "Andorra" },
    { name: "Angola" },
    { name: "Anguilla" },
    { name: "Antarctica" },
    { name: "Antigua and Barbuda" },
    { name: "Argentina" },
    { name: "Armenia" },
    { name: "Aruba" },
    { name: "Australia" },
    { name: "Austria" },
    { name: "Azerbaijan" },
    { name: "Bahamas" },
    { name: "Bahrain" },
    { name: "Bangladesh" },
    { name: "Barbados" },
    { name: "Belarus" },
    { name: "Belgium" },
    { name: "Belize" },
    { name: "Benin" },
    { name: "Bermuda" },
    { name: "Bhutan" },
    { name: "Bolivia" },
    { name: "Bosnia and Herzegovina" },
    { name: "Botswana" },
    { name: "Bouvet Island" },
    { name: "Brazil" },
    { name: "British Indian Ocean Territory" },
    { name: "Brunei Darussalam" },
    { name: "Bulgaria" },
    { name: "Burkina Faso" },
    { name: "Burundi" },
    { name: "Cambodia" },
    { name: "Cameroon" },
    { name: "Canada" },
    { name: "Cape Verde" },
    { name: "Cayman Islands" },
    { name: "Central African Republic" },
    { name: "Chad" },
    { name: "Chile" },
    { name: "China" },
    { name: "Christmas Island" },
    { name: "Cocos (Keeling) Islands" },
    { name: "Colombia" },
    { name: "Comoros" },
    { name: "Congo" },
    { name: "Congo, The Democratic Republic of The" },
    { name: "Cook Islands" },
    { name: "Costa Rica" },
    { name: "Cote D'ivoire" },
    { name: "Croatia" },
    { name: "Cuba" },
    { name: "Curaçao" },
    { name: "Cyprus" },
    { name: "Czech Republic" },
    { name: "Denmark" },
    { name: "Djibouti" },
    { name: "Dominica" },
    { name: "Dominican Republic" },
    { name: "Ecuador" },
    { name: "Egypt" },
    { name: "El Salvador" },
    { name: "Equatorial Guinea" },
    { name: "Eritrea" },
    { name: "Estonia" },
    { name: "Ethiopia" },
    { name: "Falkland Islands (Malvinas)" },
    { name: "Faroe Islands" },
    { name: "Fiji" },
    { name: "Finland" },
    { name: "France" },
    { name: "French Guiana" },
    { name: "French Polynesia" },
    { name: "French Southern Territories" },
    { name: "Gabon" },
    { name: "Gambia" },
    { name: "Georgia" },
    { name: "Germany" },
    { name: "Ghana" },
    { name: "Gibraltar" },
    { name: "Greece" },
    { name: "Greenland" },
    { name: "Grenada" },
    { name: "Guadeloupe" },
    { name: "Guam" },
    { name: "Guatemala" },
    { name: "Guernsey" },
    { name: "Guinea" },
    { name: "Guinea-bissau" },
    { name: "Guyana" },
    { name: "Haiti" },
    { name: "Heard Island and Mcdonald Islands" },
    { name: "Holy See (Vatican City State)" },
    { name: "Honduras" },
    { name: "Hong Kong" },
    { name: "Hungary" },
    { name: "Iceland" },
    { name: "India" },
    { name: "Indonesia" },
    { name: "Iran, Islamic Republic of" },
    { name: "Iraq" },
    { name: "Ireland" },
    { name: "Isle of Man" },
    { name: "Israel" },
    { name: "Italy" },
    { name: "Jamaica" },
    { name: "Japan" },
    { name: "Jersey" },
    { name: "Jordan" },
    { name: "Kazakhstan" },
    { name: "Kenya" },
    { name: "Kiribati" },
    { name: "Korea, Democratic People's Republic of" },
    { name: "Korea, Republic of" },
    { name: "Kuwait" },
    { name: "Kyrgyzstan" },
    { name: "Lao People's Democratic Republic" },
    { name: "Latvia" },
    { name: "Lebanon" },
    { name: "Lesotho" },
    { name: "Liberia" },
    { name: "Libyan Arab Jamahiriya" },
    { name: "Liechtenstein" },
    { name: "Lithuania" },
    { name: "Luxembourg" },
    { name: "Macao" },
    { name: "Macedonia, The Former Yugoslav Republic of" },
    { name: "Madagascar" },
    { name: "Malawi" },
    { name: "Malaysia" },
    { name: "Maldives" },
    { name: "Mali" },
    { name: "Malta" },
    { name: "Marshall Islands" },
    { name: "Martinique" },
    { name: "Mauritania" },
    { name: "Mauritius" },
    { name: "Mayotte" },
    { name: "Mexico" },
    { name: "Micronesia, Federated States of" },
    { name: "Moldova, Republic of" },
    { name: "Monaco" },
    { name: "Mongolia" },
    { name: "Montenegro" },
    { name: "Montserrat" },
    { name: "Morocco" },
    { name: "Mozambique" },
    { name: "Myanmar" },
    { name: "Namibia" },
    { name: "Nauru" },
    { name: "Nepal" },
    { name: "Netherlands" },
    { name: "New Caledonia" },
    { name: "New Zealand" },
    { name: "Nicaragua" },
    { name: "Niger" },
    { name: "Nigeria" },
    { name: "Niue" },
    { name: "Norfolk Island" },
    { name: "Northern Mariana Islands" },
    { name: "Norway" },
    { name: "Oman" },
    { name: "Pakistan" },
    { name: "Palau" },
    { name: "Palestinian Territory, Occupied" },
    { name: "Panama" },
    { name: "Papua New Guinea" },
    { name: "Paraguay" },
    { name: "Peru" },
    { name: "Philippines" },
    { name: "Pitcairn" },
    { name: "Poland" },
    { name: "Portugal" },
    { name: "Puerto Rico" },
    { name: "Qatar" },
    { name: "Reunion" },
    { name: "Romania" },
    { name: "Russia" },
    { name: "Rwanda" },
    { name: "Saint Helena" },
    { name: "Saint Kitts and Nevis" },
    { name: "Saint Lucia" },
    { name: "Saint Pierre and Miquelon" },
    { name: "Saint Vincent and The Grenadines" },
    { name: "Samoa" },
    { name: "San Marino" },
    { name: "Sao Tome and Principe" },
    { name: "Saudi Arabia" },
    { name: "Senegal" },
    { name: "Serbia" },
    { name: "Seychelles" },
    { name: "Sierra Leone" },
    { name: "Singapore" },
    { name: "Slovakia" },
    { name: "Slovenia" },
    { name: "Solomon Islands" },
    { name: "Somalia" },
    { name: "South Africa" },
    { name: "South Georgia and The South Sandwich Islands" },
    { name: "Spain" },
    { name: "Sri Lanka" },
    { name: "Sudan" },
    { name: "Suriname" },
    { name: "Svalbard and Jan Mayen" },
    { name: "Eswatini" },
    { name: "Sweden" },
    { name: "Switzerland" },
    { name: "Syrian Arab Republic" },
    { name: "Taiwan (ROC)" },
    { name: "Tajikistan" },
    { name: "Tanzania, United Republic of" },
    { name: "Thailand" },
    { name: "Timor-leste" },
    { name: "Togo" },
    { name: "Tokelau" },
    { name: "Tonga" },
    { name: "Trinidad and Tobago" },
    { name: "Tunisia" },
    { name: "Turkey" },
    { name: "Turkmenistan" },
    { name: "Turks and Caicos Islands" },
    { name: "Tuvalu" },
    { name: "Uganda" },
    { name: "Ukraine" },
    { name: "United Arab Emirates" },
    { name: "United Kingdom" },
    { name: "United States" },
    { name: "United States Minor Outlying Islands" },
    { name: "Uruguay" },
    { name: "Uzbekistan" },
    { name: "Vanuatu" },
    { name: "Venezuela" },
    { name: "Vietnam" },
    { name: "Virgin Islands, British" },
    { name: "Virgin Islands, U.S." },
    { name: "Wallis and Futuna" },
    { name: "Western Sahara" },
    { name: "Yemen" },
    { name: "Zambia" },
    { name: "Zimbabwe" }
  ];

  const artists = [
    {
      name: "David Dahlgren",
      image: "",
      bio: "Born and raised in Stockholm city, David Dahlgren has been producing music for more than a decade and now manages his own label; Millenial Muzik Sweden. Without feeling the boundaries and restraints imposed by the general public, he has continued to pursue and perfect his own sound and learned how to utilize his knowledge to assist other like-minded artist to publish whatever music feels right and true. The roster now consists of the following artists; Stereokanal, Gabri di Ella, Démodé, sebftw, The CD.",
      links: {
        spotify: "https://open.spotify.com/artist/4cF4K3dPgXyYh2rLTdBUF8",
        appleMusic:
          "https://music.apple.com/se/artist/david-dahlgren/1089139308",
      },
      releases: [
        {
          releaseName: "My Idle Fantasy",
          releaseDate: "2020-05-25",
          tracks: [
            {
              id: 1,
              name: "The Ridgens",
              length: "6:17",
            },
            {
              id: 2,
              name: "Tumble",
              length: "6:05",
            },
          ],
          artwork: "/cover_art/My_Idle_Fantasy.jpg",
          links: {
            spotify:
              "https://open.spotify.com/album/2r0KXMot1mTA8zRBVPmy0s?si=L0QzwUhnRmiIsv6R3ILBQQ",
            appleMusic: "",
          },
        },
        {
          releaseName: "Stage 1: Out of the Loop",
          releaseDate: "2020-07-10",
          tracks: [
            {
              id: 1,
              name: "Instigation",
              length: "4:19",
            },
            {
              id: 2,
              name: "Guidance",
              length: "6:31",
            },
          ],
          artwork: "/cover_art/Out_of_the_Loop.jpg",
          links: {
            spotify:
              "https://open.spotify.com/album/2U7Q9HkQ9IjhTKmumeI349?si=su0kOdh0QQSedxjgR5iOOw",
            appleMusic: "",
          },
        },
        {
          releaseName: "Stage 2: Reality",
          releaseDate: "2020-12-24",
          tracks: [
            {
              id: 1,
              name: "Reality",
              length: "7:40",
            },
            {
              id: 2,
              name: "Together Inside",
              length: "5:42",
            },
          ],
          artwork: "/cover_art/Reality.jpg",
          links: {
            spotify:
              "https://open.spotify.com/album/347XtVfaHKchFln7HdfdC9?si=Z33KY_twSGWzymrlf2Q7YQ",
            appleMusic: "",
          },
        },
        {
          releaseName: "Rejekt Muzik I",
          releaseDate: "2021-08-6",
          tracks: [
            {
              id: 1,
              name: "Attenzione",
              length: "6:03",
            },
            {
              id: 2,
              name: "B.S",
              length: "7:12",
            },
            {
              id: 3,
              name: "Tell Me Something",
              length: "7:52",
            },
          ],
          artwork: "/cover_art/Rejekt_Muzik_I.jpg",
          links: {
            spotify:
              "https://open.spotify.com/album/5Y7pTkQOTNm8YJBFcfOkh3?si=JWD_6o7qTG-nvUIA_deoPQ",
            appleMusic: "",
          },
        },
        {
          releaseName: "Forever Lost",
          releaseDate: "2022-05-6",
          tracks: [
            {
              id: 1,
              name: "Forever Lost",
              length: "6:05",
            },
          ],
          artwork: "/cover_art/Forever_Lost.jpg",
          links: {
            spotify:
              "https://open.spotify.com/album/4tS1FhmDrnULoCTxKIybYe?si=zj7o0NDPTICDePxJuDOhOw",
            appleMusic: "",
          },
        },
        {
          releaseName: "Slope",
          releaseDate: "2024-04-26",
          tracks: [
            {
              id: 1,
              name: "Slope",
              length: "4:12",
            },
          ],
          artwork: "/cover_art/Slope.jpg",
          links: {
            spotify:
              "https://open.spotify.com/album/6IwJjVUY443GsxNOgb1nAx?si=0H24VFwTRwGYJj2M_jN1HQ",
            appleMusic: "",
          },
        },
      ],
    },
    {
      name: "Démodé",
      image: "",
      bio: "French speaking sister-duo Démodé, currently based in Stockholm, have been dropping hidden gems for a couple of years with their collaborators and producers Stereokanal. Their style influenced by the French pop of the 60’s and 70’s, Démodé have found their formula. “Aujourd’hui” (translated to English as ‘Today’) is a refreshing electronic pop-song, with lyrics delivered in a semi-poetic and semi-serious way and a catchy chorus which makes you want to put it on repeat.",
      links: {
        spotify: "https://open.spotify.com/artist/7w9jRE80UvciUoLcE8tb32",
        appleMusic:
          "https://music.apple.com/se/artist/d%C3%A9mod%C3%A9/486374910",
      },
      releases: [
        {
          releaseName: "Noir",
          releaseDate: "2023-04-5",
          tracks: [
            {
              id: 1,
              name: "Noir",
              length: "2:02",
            },
          ],
          artwork: "/cover_art/Noir.jpg",
          links: {
            spotify:
              "https://open.spotify.com/album/4ZdNXpd7q7UDkYcMfEypSk?si=JzJEHQ6DR8GEKhFxp5svSw",
            appleMusic: "",
          },
        },
        {
          releaseName: "Aujourd'hui - La Version Française",
          releaseDate: "2024-02-29",
          tracks: [
            {
              id: 1,
              name: "Aujourd'hui - La Version Française",
              length: "3:01",
            },
          ],
          artwork: "/cover_art/Aujourd'hui.jpg",
          links: {
            spotify:
              "https://open.spotify.com/album/2wTq9sIzkCNHHI5oQRu21B?si=FQiLIc-WR6uutpO64CzSgw",
            appleMusic: "",
          },
        },
      ],
    },
    {
      name: "Gabri di Ella",
      image: "",
      bio: "Gabri di Ella moves in a poetic and electronic landscape. Inspired from different surroundings her artistry also extends to picture collages. Gabri di Ella is based in Frankfurt am Main and Stockholm. “Manchmal comme une poète la la la ” Gabri di Ella appeared for the first time on the track “Die Stadt” in collaboration with Stereokanal. Followed by her first solo release “Wo ist der Regen”. Lately she has started a musical collaboration with the long time friend and mystery producer Sonny Pop. First up from their sessions was ”A bientôt bis bald my love” and now also “Luftballons” …More to come…",
      links: {
        spotify: "https://open.spotify.com/artist/3mlnGitI1ZS8W3oSBW5fir",
        appleMusic:
          "https://music.apple.com/se/artist/gabri-di-ella/1685410732",
      },
      releases: [
        {
          releaseName: "Wo ist der Regen?",
          releaseDate: "2023-05-10",
          tracks: [
            {
              id: 1,
              name: "Wo ist der Regen?",
              length: "3:23",
            },
          ],
          artwork: "/cover_art/Wo_ist_der_Regen.jpg",
          links: {
            spotify:
              "https://open.spotify.com/album/0blpjgwy7JlvcL5T6qroJs?si=V3OYrcfSTTuB3It87I5UXg",
            appleMusic: "",
          },
        }
      ],
    },
    {
      name: "sebftw",
      image: "",
      bio: "Bio here",
      links: {
        spotify: "https://open.spotify.com/artist/0HRYvHH0N5oc3t5ju67Yyk",
        appleMusic: "https://music.apple.com/se/artist/sebftw/1564746394",
      },
      releases: [
        {
          releaseName: "Bladeswarm / Mystfest89",
          releaseDate: "2021-04-30",
          tracks: [
            {
              id: 1,
              name: "Bladeswarm",
              length: "6:53",
            },
            {
              id: 2,
              name: "Mystfest89",
              length: "6:33",
            },
          ],
          artwork: "/cover_art/Bladeswarm_Mystfest89.jpg",
          links: {
            spotify:
              "https://open.spotify.com/album/74u5D6fA94DtVCQBuWtDKC?si=0Y9c8rZ4R3Spd8XV_9yglg",
            appleMusic: "",
          },
        },
      ],
    },
    {
      name: "Stereokanal",
      image: "",
      bio: "Millenial Muzik Swedens founder David Dahlgren and Swedish underground legend Seb Roc first collaborated in music during the summer of 2019, and by May the following year they were set to release their first joint project under the name 'Stereokanal'. Since then they have continually released music as a duo, as well as producing other artitst in several genres, alltough they surely have their own sound.. ",
      links: {
        spotify: "https://open.spotify.com/artist/5d0Rt8UAMxi1ZQT58Ttpuj",
        appleMusic: "https://music.apple.com/se/artist/stereokanal/1512937484",
        youTube: "https://www.youtube.com/@StereoKanalofficial",
      },
      releases: [
        {
          releaseName: "Messina",
          releaseDate: "2020-05-29",
          tracks: [
            {
              id: 1,
              name: "Messina",
              length: "6:20",
            },
            {
              id: 2,
              name: "Messina - Dub mix",
              length: "6:20",
            },
          ],
          artwork: "/cover_art/Messina.jpg",
          links: {
            spotify:
              "https://open.spotify.com/album/3IFXRYACZC8b0JBMsEAkqY?si=dlgXGR-xTfa4gGiJjP9p5g",
            appleMusic: "",
          },
        },
        {
          releaseName: "Messina (Radio Edit)",
          releaseDate: "2020-07-2",
          tracks: [
            {
              id: 1,
              name: "Messina - Radio Edit",
              length: "3:32",
            },
          ],
          artwork: "/cover_art/Messina_Radio.jpg",
          links: {
            spotify:
              "https://open.spotify.com/album/0Fi4beIipz3BbazNcSlrZX?si=LdW9ildLQ1Sug2ct7Ov-ZQ",
            appleMusic: "",
          },
        },
        {
          releaseName: "Messina Remixes",
          releaseDate: "2021-05-13",
          tracks: [
            {
              id: 1,
              name: "Messina - Yourhighness Barbarella 03:30 AM Dub",
              length: "7:22",
            },
            {
              id: 2,
              name: "Messina - Toranoko Remix",
              length: "8:51",
            },
            {
              id: 3,
              name: "Messina - Afterburner Edit",
              length: "3:37",
            },
          ],
          artwork: "/cover_art/Messina_Remixes.jpg",
          links: {
            spotify:
              "https://open.spotify.com/album/4ymxIGGyUwNv2enrUFnhoq?si=NrAgCAQYRG-FqbHMhlO5-g",
            appleMusic: "",
          },
        },
        {
          releaseName: "Die Stadt",
          releaseDate: "2021-07-8",
          tracks: [
            {
              id: 1,
              name: "Die Stadt (featuring Dabri di Ella)",
              length: "4:28",
            },
          ],
          artwork: "/cover_art/Die_Stadt.jpg",
          links: {
            spotify:
              "https://open.spotify.com/album/5D4tI6Y7LdEDR0a8VC5J6K?si=9OmOXFhcSVKeF7QNvxWKoA",
            appleMusic: "",
          },
        },
        {
          releaseName: "L'enfant Lumière",
          releaseDate: "2021-07-22",
          tracks: [
            {
              id: 1,
              name: "L'enfant Lumière",
              length: "2:56",
            },
          ],
          artwork: "/cover_art/L'enfant_Lumière.jpg",
          links: {
            spotify:
              "https://open.spotify.com/album/5jHrml0dCZJB6ZZnKDzOVz?si=zMfS-1wUSWmenpXaksuz_w",
            appleMusic: "",
          },
        },
        {
          releaseName: "L'enfant Lumière - Seb Roc Remix",
          releaseDate: "2021-08-5",
          tracks: [
            {
              id: 1,
              name: "L'enfant Lumière - Seb Roc Remix",
              length: "4:51",
            },
          ],
          artwork: "/cover_art/L'enfant_Remix_Cover.jpg",
          links: {
            spotify:
              "https://open.spotify.com/album/3dYzdPI164HFgajLejU5DW?si=rkiRBSsLS1K4xkoTP2aRFw",
            appleMusic: "",
          },
        },
        {
          releaseName: "So.. what did you guys say you were doin'..?",
          releaseDate: "2022-02-2",
          tracks: [
            {
              id: 1,
              name: "So.. what did you guys say you were doin'..?",
              length: "5:31",
            },
          ],
          artwork: "/cover_art/So...jpg",
          links: {
            spotify:
              "https://open.spotify.com/album/3aeE2cRhY8Hwf9RCQ86KN7?si=CQFsuYfsTmu1vyhsBivoTw",
            appleMusic: "",
          },
        },
        {
          releaseName: "Zling Mai",
          releaseDate: "2024-05-24",
          tracks: [
            {
              id: 1,
              name: "Zling Mai",
              length: "5:30",
            },
          ],
          artwork: "/cover_art/Zling_Mai.jpg",
          links: {
            spotify:
              "https://open.spotify.com/album/3mlbqWPyjbpxsHzias3sJ5?si=9gG4o9lvR4eKGHRHgOh58g",
            appleMusic: "",
            youTube: "https://www.youtube.com/watch?v=PLdjgWZ3RJc",
          },
        },
      ],
    },
    {
      name: "The CD",
      image: "",
      bio: "The CD consists of two naturally gifted persons who, through life, has found that letting go or giving up on their true passion is never going to be an option. Having been friends for years, C and D have been working together spontaneously, releasing music when the timing seems to be just right, collaborating with other like-minded individuals. Their first single “Two of Us” is a joint project that merged the sketches of two songs in the making, resulting in a throwback production and vocal performance inspired by the late 90’s and early 00’s underground pop scene.",
      links: {
        spotify: "https://open.spotify.com/artist/5d0Rt8UAMxi1ZQT58Ttpuj",
        appleMusic: "https://music.apple.com/se/artist/the-cd/1724709944",
      },
      releases: [
        {
          releaseName: "Two of Us",
          releaseDate: "2024-02-14",
          tracks: [
            {
              id: 1,
              name: "Two of Us",
              length: "3:27",
            },
            {
              id: 2,
              name: "Two of Us - Naked Version",
              length: "3:27",
            },
          ],
          artwork: "/cover_art/Two_of_Us.jpg",
          links: {
            spotify:
              "https://open.spotify.com/album/0Z1vGw3FDCiGw4PbZaQbZX?si=8KakoPZZS4uyBhUGOUsZAw",
            appleMusic: "",
          },
        },
      ],
    },
  ];

  return (
    <>
      <BrowserRouter>
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<HomePage />}></Route>
            <Route
              path="/roster"
              element={<RosterPage artists={artists} />}
            ></Route>
            <Route
              path="/discography"
              element={<DiscogPage artists={artists} />}
            ></Route>
            <Route path="/about" element={<AboutPage />}></Route>
            <Route path="/contact" element={<ContactPage allCountries={allCountries}/>}></Route>
          </Routes>
        </main>
        <footer>
        <Footer />
        </footer>
      </BrowserRouter>
    </>
  );
}

export default App;
