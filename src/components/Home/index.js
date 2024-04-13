import { useState, React } from "react";
import Slider from "react-slick";
import { v4 as uuidv4 } from "uuid";
import { IoSearch } from "react-icons/io5";

import LeftBar from "../LeftBar";
import AnimationCard from "../AnimationCard";
import SlickCards from "../SlickCards";
import TryThisCards from "../TryThisCards";
import Footer from "../Footer";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import "./index.css";

const forYouCardsList = [
  {
    id: uuidv4(),
    name: "Writing Buddy",
    title: "By @GengarGhast",
    description: "I will hel you. tell me how can I help you.",
    followers: "33.2k",
    imageUrl:
      "https://characterai.io/i/200/static/avatars/uploaded/2022/11/1/jN7L5f1Km0PE0HNAKJezNV6gRvOHC6jgYmgO8ovM9JY.webp?webp=true&amp;anim=0",
  },
  {
    id: uuidv4(),
    name: "Writing Assistant",
    title: "By @GengarGhast",
    description: "I will hel you. tell me how can I help you.",
    followers: "44.2k",
    imageUrl:
      "https://characterai.io/i/200/static/avatars/uploaded/2022/12/10/0bt5LY4lkgU-fCpMAKyNFIGklAv-kZF0pCZe2P8wuhw.webp?webp=true&amp;anim=0",
  },
  {
    id: uuidv4(),
    name: "Writing Collaborator",
    title: "By @FullMoonChat",
    description: "I will hel you. tell me how can I help you.",
    followers: "34.2k",
    imageUrl:
      "https://characterai.io/i/200/static/avatars/uploaded/2022/11/20/Uxd-GODZGxPHO4GTJ-M_6p9QFMFqzGn3iGvpEOKrwpg.webp?webp=true&amp;anim=0",
  },
  {
    id: uuidv4(),
    name: "Storyteller",
    title: "By @jvictorcosta",
    description: "I will hel you. tell me how can I help you.",
    followers: "22.2k",
    imageUrl:
      "https://characterai.io/i/200/static/avatars/uploaded/2022/11/14/qIvZdR-8Tgf1ogqDrIJdD_EYO8xCJuQwo5sIdNZHkks.webp?webp=true&amp;anim=0",
  },
  {
    id: uuidv4(),
    name: "ContinueWriteAi",
    title: "By @YiRen",
    description: "I will hel you. tell me how can I help you.",
    followers: "19.2k",
    imageUrl:
      "https://characterai.io/i/200/static/avatars/uploaded/g1HmyuGuPfTMyUsaKAtwXsWBDguLGcFaZY-iPAEnay4.webp?webp=true&amp;anim=0",
  },
  {
    id: uuidv4(),
    name: "Creative",
    title: "By @lars",
    description: "Creative!",
    followers: "15.2k",
    imageUrl:
      "https://characterai.io/i/200/static/avatars/uploaded/2022/10/26/wQYGO1CyR5H5O56pyEqxLq3Vdhh8_mkHq8-BbHa9IcU.webp?webp=true&amp;anim=0",
  },
];

const featuredCardsList = [
  {
    id: uuidv4(),
    name: "Character Assistance",
    title: "By @landon",
    description: "Your AI work/Study buddy",
    followers: "124.2m",
    imageUrl:
      "https://characterai.io/i/200/static/avatars/uploaded/2022/10/19/UHMcO-dD720KcZuxmWjNnuDzYGrhjrulXic0c-nZWBY.webp?webp=true&amp;anim=0",
  },
  {
    id: uuidv4(),
    name: "ltoshi Rin",
    title: "By @MilkMilks",
    description: "He only loves soccer...and you.",
    followers: "129.4m",
    imageUrl:
      "https://characterai.io/i/200/static/avatars/uploaded/2023/2/6/6uC5oMKpqXhMR3g7l5qKJCNPNAYs7sMe4aH0Jtgm794.webp?webp=true&amp;anim=0",
  },
  {
    id: uuidv4(),
    name: "Zero Two",
    title: "By @XOMU",
    description: "I will hel you. tell me how can I help you.",
    followers: "57.2m",
    imageUrl:
      "https://characterai.io/i/200/static/avatars/uploaded/2022/10/6/XEuYFfBedAIUYYKG09lLK3IlOrFiy2yJ08teobJmCvU.webp?webp=true&amp;anim=0",
  },
  {
    id: uuidv4(),
    name: "Novel Writing AI",
    title: "By @Yassu",
    description: "I am novel writing assistance. I will expose your ideas.",
    followers: "52.3m",
    imageUrl:
      "https://characterai.io/i/200/static/avatars/NovelWritingAI.png?webp=true&amp;anim=0",
  },
  {
    id: uuidv4(),
    name: "High-Fantasy RPG",
    title: "By @Tarquin",
    description: "A High-Fantasy Text-Based Adventure game.",
    followers: "25.2m",
    imageUrl:
      "https://characterai.io/i/200/static/avatars/uploaded/2022/10/9/kOzn1SdDN1BEZFxhVSE-sRFybKkxMgY6MF7k58Feku4.webp?webp=true&amp;anim=0",
  },
  {
    id: uuidv4(),
    name: "AlbertEinstein",
    title: "By @User123547",
    description: "Hello I'm Einstein and I was born in 14, 1879.",
    followers: "6.6m",
    imageUrl:
      "https://characterai.io/i/200/static/avatars/AlbertEinstein4.png?webp=true&amp;anim=0",
  },
];

const tryThisCardsList = [
  {
    id: uuidv4(),
    title: "Practice a new language",
    subTitle: "with HyperGlot",
    thumbnail:
      "https://characterai.io/i/80/static/avatars/Polyglot.png?webp=true&amp;anim=0",
  },
  {
    id: uuidv4(),
    title: "Plane a trip",
    subTitle: "with TripPlanner",
    thumbnail:
      "https://characterai.io/i/80/static/avatars/uploaded/2022/11/1/8vQT3XDnPkEHhafVac-ldiQCljC3kImrE9TiEXcIjKQ.webp?webp=true&amp;anim=0",
  },
  {
    id: uuidv4(),
    title: "Practice Interviewing",
    subTitle: "with Interviewer",
    thumbnail:
      "https://characterai.io/i/80/static/avatars/uploaded/2023/1/30/gAKz4DRFDqYfmS2_7cQNq-anu45jPPLaFZPNxjpqAGI.webp?webp=true&amp;anim=0",
  },
  {
    id: uuidv4(),
    title: "Write a story",
    subTitle: "with Creative Writer",
    thumbnail:
      "https://characterai.io/i/80/static/avatars/uploaded/2022/10/19/UHMcO-dD720KcZuxmWjNnuDzYGrhjrulXic0c-nZWBY.webp?webp=true&amp;anim=0",
  },
  {
    id: uuidv4(),
    title: "Brainstorm Ideas",
    subTitle: "with Brainstormer",
    thumbnail:
      "https://characterai.io/i/80/static/avatars/uploaded/2023/1/30/OpqG-QJWMMyTmkL9gI9496fevfGeJjfNj5aoyGtLqtQ.webp?webp=true&amp;anim=0",
  },
  {
    id: uuidv4(),
    title: "Play a game",
    subTitle: "with Text Adventure Game",
    thumbnail:
      "https://characterai.io/i/80/static/avatars/TextAdventure3.png?webp=true&amp;anim=0",
  },
  {
    id: uuidv4(),
    title: "Get book recommendation",
    subTitle: "with Librarian Linda",
    thumbnail:
      "https://characterai.io/i/80/static/avatars/LibrarianLinda.png?webp=true&amp;anim=0",
  },
  {
    id: uuidv4(),
    title: "Help me make a decision",
    subTitle: "with DecisionHelper",
    thumbnail:
      "https://characterai.io/i/80/static/avatars/uploaded/2023/1/30/D1Dar3krrm79DrKNlUiMoGJmcxSSEFvxbzY7f-D8Bk4.webp?webp=true&amp;anim=0",
  },
];

const buttonList = [
  {
    id: uuidv4(),
    text: "Helpers",
  },
  {
    id: uuidv4(),
    text: "Anime Game Characters",
  },

  {
    id: uuidv4(),
    text: "Game",
  },
  {
    id: uuidv4(),
    text: "Anime",
  },
  {
    id: uuidv4(),
    text: "Game Characters",
  },
  {
    id: uuidv4(),
    text: "Comedy",
  },
  {
    id: uuidv4(),
    text: "VTubers",
  },
  {
    id: uuidv4(),
    text: "Books",
  },
  {
    id: uuidv4(),
    text: "Images Generating",
  },
  {
    id: uuidv4(),
    text: "Discussion",
  },
  {
    id: uuidv4(),
    text: "Language Learning",
  },
  {
    id: uuidv4(),
    text: "Religion",
  },
  {
    id: uuidv4(),
    text: "Animals",
  },
  {
    id: uuidv4(),
    text: "philosophy",
  },
  {
    id: uuidv4(),
    text: "politics",
  },
];

const designationCardsList = [
  {
    id: uuidv4(),
    name: "Psycologist",
    title: "By @Blazeman28",
    description: "Some one who helps with life difficulties",
    followers: "124.2m",
    imageUrl:
      "https://characterai.io/i/200/static/avatars/uploaded/Bx_uFQ2fP4WCGERxXIMk7iRy7IJbuR_Pz8jlisG07gg.webp?webp=true&amp;anim=0",
  },
  {
    id: uuidv4(),
    name: "Creative Helper",
    title: "By @Zuizike",
    description: "I help with creative writing!",
    followers: "133.4m",
    imageUrl:
      "https://characterai.io/i/200/static/avatars/uploaded/2022/10/19/UHMcO-dD720KcZuxmWjNnuDzYGrhjrulXic0c-nZWBY.webp?webp=true&amp;anim=0",
  },
  {
    id: uuidv4(),
    name: "Are-you-feeling-okay",
    title: "By @summeriscoming",
    description: "If you're feeling bad, chat with me",
    followers: "57.2m",
    imageUrl:
      "https://characterai.io/i/200/static/avatars/AreYouFeelingOk.png?webp=true&amp;anim=0",
  },
  {
    id: uuidv4(),
    name: "Ella-Dating coach",
    title: "By @",
    description: "Hi I am dating coach",
    followers: "52.3m",
    imageUrl:
      "https://characterai.io/i/200/static/avatars/Heart.png?webp=true&anim=0",
  },
  {
    id: uuidv4(),
    name: "High-Fantasy RPG",
    title: "By @Tarquin",
    description: "A High-Fantasy Text-Based Adventure game.",
    followers: "25.2m",
    imageUrl:
      "https://characterai.io/i/200/static/avatars/uploaded/2022/10/9/kOzn1SdDN1BEZFxhVSE-sRFybKkxMgY6MF7k58Feku4.webp?webp=true&amp;anim=0",
  },
  {
    id: uuidv4(),
    name: "AlbertEinstein",
    title: "By @User123547",
    description: "Hello I'm Einstein and I was born in 14, 1879.",
    followers: "6.6m",
    imageUrl:
      "https://characterai.io/i/200/static/avatars/AlbertEinstein4.png?webp=true&amp;anim=0",
  },
];

const settings = {
  dots: false,
  slidesToShow: 8,
  slidesToScroll: 3,
  arrows: false,
  infinite: false,
  speed: 500,
  className: "mr-2 mt-4",
  variableWidth: true,
};

const Home = () => {
  const [searchText, setSearchText] = useState("");
  const [activeButtonId, updateActiveButtonId] = useState(buttonList[0].id);

  const onChangeSearchText = (event) => setSearchText(event.target.value);
  const onSelectButton = (id) => updateActiveButtonId(id);

  const renderUserProfileView = () => (
    <div className="d-flex justify-content-between align-items-center">
      <div className="d-none d-md-block ">
        <div className="d-flex align-items-center ">
          <p className="user-profile-char-p">A</p>
          <p className="user-name-p">Aswini Botla</p>
        </div>
      </div>
      <div className="input-container ml-auto">
        <button type="button" className="search-icon-btn">
          <IoSearch />
        </button>
        <input
          type="text"
          placeholder="Search for Characters"
          value={searchText}
          className="search-input"
          onChange={onChangeSearchText}
        />
      </div>
    </div>
  );

  const renderButtonSlider = () => (
    <Slider {...settings}>
      {buttonList.map((each) => {
        const { id, text } = each;
        const onClickButton = () => onSelectButton(id);

        return (
          <div key={id} className="btn-slider-bg">
            <button
              type="button"
              className={`item-select-btn ${
                activeButtonId === each.id ? "active" : null
              }`}
              onClick={onClickButton}
            >
              {text}
            </button>
          </div>
        );
      })}
    </Slider>
  );

  function Home() {
    return (
      <div className="home-content">
        <div className="container mt-3">
          <p className="welcome-p d-none d-md-block">Welcome back,</p>
          {renderUserProfileView()}

          <AnimationCard />

          <p className="content-title">For you</p>
          <SlickCards cardList={forYouCardsList} />

          <p className="content-title">Try these</p>
          <TryThisCards cardList={tryThisCardsList} />

          <p className="content-title">Featured</p>
          <SlickCards cardList={featuredCardsList} />

          {/* Buttons slider */}
          {renderButtonSlider()}

          <SlickCards cardList={designationCardsList} />

          <Footer />
        </div>
      </div>
    );
  }

  return (
    <div className="home-bg">
      <LeftBar />
      {Home()}
    </div>
  );
};

export default Home;
