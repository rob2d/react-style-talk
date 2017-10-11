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
    desperationScene : {
        opacity : ({ currentStepNumber })=> (
            currentStepNumber == StepEnums.DO_WE_ALWAYS_WIN_LOSE ? 1 : 0
        ),
        transition : 'opacity 1.25s ease 0.5s'
    }
};

class SlideSoDoWeAlwaysNeedToLose extends PureComponent {
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
            <div className={classes.desperationScene}>
                <img src='img/slides/desperation_scene.jpg'/>
                <p className={classes.alwaysWinLoseQ}>
                    Are we doomed as devs to always win-lose?
                </p>
            </div>
            </PresentationSlide>
        );
    }
}

export default injectSheet(styleSheet)(SlideSoDoWeAlwaysNeedToLose);