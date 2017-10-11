import React, { PureComponent } from 'react'
import pure from 'recompose/pure'
import injectSheet from 'react-jss'
import { PresentationSlide } from 'modules/presentation'
import StepEnums from './../../constants/StepEnums'
import createListItemSlideRules from 'tools/slide-styles/getListItemSlideRules'

const STEP_COUNT = 6;

const getListItemRules = (itemNumber)=> {
    const isPro = itemNumber < 5;
    const isCon = itemNumber >= 5;
    const listItemRules = createListItemSlideRules(itemNumber, Steps.SLIDE_START);
    
    return Object.assign({}, listItemRules, 
    {
        fontSize : ({ currentStepNumber, ...props })=> (
            (currentStepNumber < Steps.PRO_CON_SPLIT) ? '18pt' : '14pt'
        ),
        transition : listItemRules.transition + 
                        ', font-size 0.35s ease-in'
    })
};

const styleSheet = {

};

class SlideCSSProsCons extends PureComponent {
    render () {
        const { classes, ...props } = this.props;

        return (
            <PresentationSlide 
                data-x={'18000'}
                data-y={'1000'}
                data-scale={'2'}
                data-rotate-x={'180'}
                data-rotate-z={'180'}
                {...props}
            >
                <p className={classes.title}>
                    Modern Apps are Dynamic
                </p>
                <li>
                    Pseudoselectors do not take into account
                    all scenarios
                </li>
                <li>
                    <pre>
                    
                    </pre>
                </li>
            </PresentationSlide>
        );
    }
}

export default injectSheet(styleSheet)(SlideCSSProsCons);