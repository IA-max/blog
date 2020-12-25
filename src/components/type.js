import React from 'react';
import Typing from 'react-typing-animation';

const AnimatedTypingComponent = () => (
    <Typing>
        <div>
            Hello 👋, I'm
            <Typing.Delay ms={1000}/> Max.
            <Typing.Delay ms={3000}/>
            <Typing.Backspace count={8}/>
            <Typing.Delay ms={0}/>'d love Design.
            <Typing.Delay ms={2000}/>
            <Typing.Backspace count={7}/>
            <Typing.Delay ms={0}/>programming.
        </div>
    </Typing>
);

export default AnimatedTypingComponent;