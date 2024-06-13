import React from 'react';
import Episodelg from './Episodelg';
import Episodesm from './Episodesm';
import './index.css';


export default function Episode({ seriesId, showName , numberOfSeasons , popularity , status }) {


    return (
        <div>
            <Episodelg seriesId={seriesId} showName={showName} numberOfSeasons={numberOfSeasons} popularity={popularity}/>
            <Episodesm seriesId={seriesId} showName={showName} numberOfSeasons={numberOfSeasons} popularity={popularity} status={status}/>
        </div>
    );
}


