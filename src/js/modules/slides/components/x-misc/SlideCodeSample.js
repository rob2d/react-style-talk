import React, { PureComponent } from 'react'
import pure from 'recompose/pure'
import injectSheet from 'react-jss'
import { PresentationSlide } from 'modules/presentation'
import StepEnums from './../../constants/StepEnums'

const styleSheet = {
    codeSample : {
        fontFamily      : '"Inconsolata"', //TODO : install font
        fontSize        : '18pt',
        margin          : '16px',
        backgroundColor : 'rgb(0,0,0)',
        color           : '#00FF00',
        padding         : '16px',
        textShadow      : '1px 1px 1px rgba(0,0,0,0.5)',
        opacity         : ({ currentStepNumber, stepNumber })=> {
            if(currentStepNumber >= stepNumber - 1 && currentStepNumber <= stepNumber + 1) {
                return 1;
            } else {
                return 0;
            }
        },
        transition : 'opacity 0.25s ease-out'
    }
};

class SlideCodeSample extends PureComponent {
    render () {
        const { classes, ...props } = this.props;

        return (
            <PresentationSlide 
                data-x={'11000'}
                data-y={!props.alternate ? '5000' : '10000'}
                data-scale={'3'}
                data-rotate-z={!props.alternate ? '90' : '90'}
                {...props}
            >
                <div className={`${classes.codeSample} ${classes.inlineStyleCode}`}>
                    {this.props.codeSample}
                </div>
            </PresentationSlide>
        );
    }
}

export default injectSheet(styleSheet)(SlideCodeSample);