import React from 'react';
import './simpleStory.css'


type LevelType = 'Simple' | 'Medium' | 'Hard'

type SimpleStoryProps = {
    levelType : LevelType
    color?: string
}

type ImageObject = {
    [key in LevelType]: string;
};

const SimpleStory : React.FC<SimpleStoryProps> = ( {levelType, color = 'black'} ) => {


    const imageByLevel: ImageObject = {
        Simple: 'https://ih1.redbubble.net/image.1945691679.5388/st,small,507x507-pad,600x600,f8f8f8.jpg',
        Medium: 'https://miro.medium.com/max/1400/0*QApnBmO4I59ZGan7',
        Hard : 'https://ih1.redbubble.net/image.2366429407.6011/st,small,507x507-pad,600x600,f8f8f8.jpg',
    }



    return (
        <div className={'simple-story'}>
            <div className={''}>
                Hello I am <strong style={{color}}>{levelType}</strong>
            </div>
            <div>
                <img className={'simple-story__img'} alt={'dog'} src={imageByLevel[levelType]}/>
            </div>
        </div>
    );
};

export default SimpleStory;
