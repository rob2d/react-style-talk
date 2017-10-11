import React, { PureComponent } from 'react'
import pure from 'recompose/pure'
import injectSheet from 'react-jss'
import { PresentationSlide } from 'modules/presentation'
import StepEnums from './../../constants/StepEnums'

const styleSheet = {
    cssLogo : { 
        margin : '0 auto'
    },
    cssFinalSolution : {
        width : '1100px',
        height : 'auto',
        opacity : ({ currentStepNumber,stepNumber })=> (
            currentStepNumber == stepNumber ? 1 : 0
        ),
        transition : 'opacity 0.5s 2s'
    }
};

class SlideIsCSSTheFinalSolution extends PureComponent {
    componentWillUpdate(newProps, newState) {
        if(newProps.currentStepNumber == newProps.stepNumber && !this.isSlideActive) {
            this.isSlideActive = true;
            const bg = document.querySelector('#background');
            bg.classList.add('black');
        }
        else if(newProps.currentStepNumber != newProps.stepNumber && this.isSlideActive) {
            this.isSlideActive = false;
            const bg = document.querySelector('#background');
            bg.classList.remove('black');
        }
    }
    render () {
        console.log('renderered CSS Slide');
        const { classes, ...props } = this.props;

        return (
            <PresentationSlide 
                data-x={'15000'}
                data-y={'1000'}
                data-scale={'2'}
                data-rotate-x={'270'}
                data-rotate-z={'180'}
                {...props}
            >
               {/*<img className={classes.cssLogo} src="/img/logos/css3.png" />*/undefined}
                <img className={classes.cssFinalSolution} src="/img/slides/css-all-your-based.png" />
            </PresentationSlide>
        );
    }
}

export default injectSheet(styleSheet)(SlideIsCSSTheFinalSolution);