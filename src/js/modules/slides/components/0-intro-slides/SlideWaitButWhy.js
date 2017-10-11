import React, { PureComponent } from 'react'
import pure from 'recompose/pure'
import injectSheet from 'react-jss'
import { PresentationSlide } from 'modules/presentation'
import StepEnums from './../../constants/StepEnums'

const styleSheet = {
    waitBut : {
        fontSize : '32pt'
    },
    why : {
        fontSize : '36pt'
    }
};

function SlideWaitButWhy ({ classes, ...props }) {
    return (
        <PresentationSlide 
            data-x={'8000'}
            data-y={'0'}
            data-scale={'2'}
            data-rotate-y={'90'}
            {...props}
        >
            <p className={classes.waitBut}>Wait, but...🤔</p>
            <p className={classes.why}>... why?</p>
        </PresentationSlide>
    );
}

export default injectSheet(styleSheet)(SlideWaitButWhy);