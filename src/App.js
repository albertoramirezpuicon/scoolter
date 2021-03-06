import { useState, useEffect } from 'react';
import './App.css';
import "video-react/dist/video-react.css";
import { Player, ControlBar } from 'video-react';
import { 
  Scoolterheader, ScoolterIncludesHeader, ScoolterFirstRowFlex, ScoolterSecondRowFlex, ScoolterTouristicPlaceCollection, 
  ScoolterTourismHeader, Scooltercontact1200, 
  Scooltermobileheader, Scooltermobileincludes, Scooltermobilefooter, Scooltermobilesocial, Scooltermobiletourismheader,
} from './ui-components';
import {
  Navigation
} from './local-components';

function getWindowDimensions() {
  const { innerWidth: width, innerHeight: height } = window;
  return {
    width,
    height
  };
}

function App(props) {
  const [windowDimensions, setWindowDimensions] = useState(getWindowDimensions());

  useEffect(() => {
    function handleResize() {
      setWindowDimensions(getWindowDimensions());
    }

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  var qtyItems = windowDimensions.width/320;

  let languageStoredInLocalStorage = localStorage.getItem("language");
  let [language, setLanguage] = useState(
    languageStoredInLocalStorage ? languageStoredInLocalStorage : "English"
  );

  let content = {
    English: {
      footer: {
        label: "Contact us"
      }
    },
    Castellano: {
      footer: {
        label: "Contáctanos"
      }
    }
  }

  language === "Castellano"
  ? (content = content.Castellano)
  : (content = content.English);

  if (windowDimensions.width < 800) {
    return (
      <div>
        <Scooltermobileheader />
        <Player playsInline muted loop={true} autoPlay src="https://a360data.s3.us-east-2.amazonaws.com/SCOOLTER_edit.webm">
          <ControlBar disableCompletely={true} />
        </Player>
        <Scooltermobilesocial />
        <Scooltermobileincludes />
        <Scooltermobiletourismheader />
        <ScoolterTouristicPlaceCollection itemsPerPage={qtyItems}/>
        <iframe
          title="ScoolterPeruLocation"
          width="100%"
          height="450"
          loading="lazy"
          allowfullscreen
          referrerpolicy="no-referrer-when-downgrade"
          src="https://www.google.com/maps/embed/v1/place?key=AIzaSyAP7hfbLnZ8ZMdUVzgIP89ahLfbe65lRwE&q=Scoolter+Peru,Lima+Peru">
        </iframe>
        <Scooltermobilefooter />
      </div>
    );
  } else {
    return (
      <div>
        <Scoolterheader gap={"400px"} />
        <Player playsInline muted loop={true} autoPlay src="https://a360data.s3.us-east-2.amazonaws.com/SCOOLTER_edit.webm">
          <ControlBar disableCompletely={true} />
        </Player>
        <ScoolterIncludesHeader />
        <ScoolterFirstRowFlex />
        <ScoolterSecondRowFlex />
        <ScoolterTourismHeader />
        <ScoolterTouristicPlaceCollection itemsPerPage={qtyItems} />
        <iframe
          title="ScoolterPeruLocation"
          width="100%"
          height="450"
          loading="lazy"
          allowfullscreen
          referrerpolicy="no-referrer-when-downgrade"
          src="https://www.google.com/maps/embed/v1/place?key=AIzaSyAP7hfbLnZ8ZMdUVzgIP89ahLfbe65lRwE&q=Scoolter+Peru,Lima+Peru">
        </iframe>
        <p>{language} / {content.footer.label}</p>
        <Scooltercontact1200 />
        <Navigation language={language} handleSetLanguage={language => {
          setLanguage(language);
          storeLanguageInLocalStorage(language);
        }}
        />
      </div>
    );
  }
  
  function storeLanguageInLocalStorage(language) {
    localStorage.setItem("language", language);
  }
}

export default App;
