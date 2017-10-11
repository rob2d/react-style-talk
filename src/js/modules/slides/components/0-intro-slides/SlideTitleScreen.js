import React, { PureComponent } from 'react'
import pure from 'recompose/pure'
import injectSheet from 'react-jss'
import { PresentationSlide } from 'modules/presentation'
import StepEnums from './../../constants/StepEnums'

const Authors = {
    [StepEnums.JSTGP] : 'Douglas Crockford',
    'myself' : 'Robert Concepcion III'
};


function isTargetedStep (currentStepNumber) {
    switch(currentStepNumber) {
        case StepEnums.JSSIRTGP : 
        case StepEnums.JSTGP :
            return true;
        default : 
            return false;
    }
};


const styleSheet = {
    headerText : {
        fontSize  : '50pt',
        textAlign : 'justify'
    },
    authorText : {
        textAlign  : 'left',
        fontSize   : '20pt',
        textIndent : '32px',
        paddingBottom : '40px',
        opacity    : ({ currentStepNumber })=> (
           isTargetedStep(currentStepNumber) ? 1 : 0
        ),
        transition : 'opacity 0.35s ease-in 2s'
    },
    stylesInReactText : {
        color : ({ currentStepNumber })=>{
            if(currentStepNumber == StepEnums.JSTGP) {
                return '#FFFFFF';
            } else {
                return '#000000';
            }
        },
        textDecoration : ({ currentStepNumber })=>{
            switch(currentStepNumber) {
                case StepEnums.JSSIRTGP :
                    return 'none';                
                case StepEnums.JSTGP :  
                    return 'line-through';
                default : 
                   return 'none';
            }
        },
        transition : 'color 0.25s ease-in 0.25s'
    },
    bookImage : {
        width : 'auto',
        height : ({ currentStepNumber })=>{
            if(currentStepNumber == StepEnums.JSTGP) {
                return '400px';
            } else {
                return '0px';
            }
        },
        marginBottom : ({ currentStepNumber })=>{
            if(currentStepNumber == StepEnums.JSTGP) {
                return '96px';
            } else {
                return '0px';
            }
        },
        transition : `height 0.75s ease-out 1.5s, 
                        margin-bottom 0.75s ease-in 1.25s,
                        opacity 0.25s ease-in 2s`
    }
};

class SlideTitleScreen extends PureComponent {
    render () {
        const { classes, currentStepNumber } = this.props;

        const authorText = Authors[currentStepNumber] || Authors.myself;

        return ( 
        <PresentationSlide 
            {...this.props}
            data-x={'0'}
            data-z={'0'}
            data-scale={'1'}>
            <p className={classes.headerText}>
                JavaScript <span className={classes.stylesInReactText}>
                Styles in React:</span> The Good Parts
            </p>
            <p className={classes.authorText}>
                By {authorText}
            </p>
            <img src="/img/slides/jstgp_vs_js.jpg" className={classes.bookImage} />
        </PresentationSlide>
    );
    }
}

export default injectSheet(styleSheet)(SlideTitleScreen);