import './App.css';
import "video-react/dist/video-react.css";
import { Player } from 'video-react';
import { 
  Scoolterheader, ScoolterIncludesHeader, ScoolterFirstRowFlex, ScoolterSecondRowFlex, ScoolterTouristicPlaceCollection, ScoolterTourismHeader, Scooltercontact1200 
} from './ui-components';

function App() {
  return (
    <div>
      <Scoolterheader />
      <Player playsInline muted autoPlay controls={false} src="https://a360data.s3.us-east-2.amazonaws.com/SCOOLTER_edit.webm" /> 
      <ScoolterIncludesHeader />
      <ScoolterFirstRowFlex />
      <ScoolterSecondRowFlex />
      <ScoolterTourismHeader />
      <ScoolterTouristicPlaceCollection />
      <iframe
        title="ScoolterPeruLocation"
        width="100%"
        height="450"
        loading="lazy"
        allowfullscreen
        referrerpolicy="no-referrer-when-downgrade"
        src="https://www.google.com/maps/embed/v1/place?key=AIzaSyAP7hfbLnZ8ZMdUVzgIP89ahLfbe65lRwE&q=Scoolter+Peru,Lima+Peru">
      </iframe>
      <Scooltercontact1200 />
    </div>
    
  );
}

export default App;
