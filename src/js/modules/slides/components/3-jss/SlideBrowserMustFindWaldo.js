import React, { PureComponent } from 'react'
import pure from 'recompose/pure'
import injectSheet from 'react-jss'
import { PresentationSlide } from 'modules/presentation'
import StepEnums from './../../constants/StepEnums'
import getListItemSlideRules from 'tools/slide-styles/getListItemSlideRules'


const styleSheet = {
    alwaysWinLoseQ : {
        fontSize : '40pt'
    },
    hardToFindHim : {
        display : 'inline-block',
        width : 'auto',
        height : '800px',
        opacity : ({ currentStepNumber })=> (
            currentStepNumber == StepEnums.BROWSER_MUST_FIND_WALDO ? 1 : 0
        ),
        transition : 'opacity 0.25s ease-in',
    }
};

class SlideBrowserMustFindWaldo extends PureComponent {
    render () {
        const { classes, ...props } = this.props;

        return (
            <PresentationSlide 
                data-x={'18000'}
                data-y={'10000'}
                data-z={'1800'}
                data-scale={'2'}
                data-rotate-x={'270'}
                data-rotate-y={'180'}
                {...props}
            >
            <img 
                className={classes.hardToFindHim} 
                src="img/slides/findspecificwaldo.png"
            />
            </PresentationSlide>
        );
    }
}

export default injectSheet(styleSheet)(SlideBrowserMustFindWaldo);