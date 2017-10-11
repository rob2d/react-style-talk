import React, { PureComponent } from 'react'
import pure from 'recompose/pure'
import injectSheet from 'react-jss'
import { PresentationSlide } from 'modules/presentation'
import StepEnums from './../../constants/StepEnums'
import getListItemSlideRules from 'tools/slide-styles/getListItemSlideRules'


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

class SlideSoWhatAboutCSS extends PureComponent {
    render () {
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
               <img className={classes.cssLogo} src="/img/logos/css3.png" />
            </PresentationSlide>
        );
    }
}

export default injectSheet(styleSheet)(SlideSoWhatAboutCSS);