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
    youAreTheBrowser : {
        display : 'inline-block',
        width : '300px',
        height : 'auto',
        opacity : ({ currentStepNumber })=> (
            currentStepNumber == StepEnums.BROWSER_PLAYS_WHERES_WALDO ? 1 : 0
        ),
        transition : 'opacity 0.25s ease-in',
    },
    playingWheresWaldo : {
        display : 'inline-block',
        opacity : ({ currentStepNumber })=> (
            currentStepNumber == StepEnums.BROWSER_PLAYS_WHERES_WALDO ? 1 : 0
        ),
        transition : 'opacity 0.25s ease-in 3s',
        width : '300px',
        height : 'auto'
    }
};

class SlideBrowserMustFindWaldo extends PureComponent {
    render () {
        const { classes, ...props } = this.props;

        return (
            <PresentationSlide 
                data-x={'18000'}
                data-y={'8000'}
                data-z={'1800'}
                data-scale={'2'}
                data-rotate-x={'270'}
                data-rotate-y={'180'}
                {...props}
            >
                <img className={classes.youAreTheBrowser} src="img/slides/youarethebrowser.jpg"/>
                <img className={classes.playingWheresWaldo} src="img/slides/playingwhereswaldo.jpg"/>
            </PresentationSlide>
        );
    }
}

export default injectSheet(styleSheet)(SlideBrowserMustFindWaldo);