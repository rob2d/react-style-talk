import React, { PureComponent } from 'react'
import pure from 'recompose/pure'
import injectSheet from 'react-jss'
import { PresentationSlide } from 'modules/presentation'
import StepEnums from './../../constants/StepEnums'
import createListItemSlideRules from 'tools/slide-styles/getListItemSlideRules'


const Steps = {
    SLIDE_START : StepEnums.JSS_BENEFITS
};

const getListItemRules = (itemNumber)=> {
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
    list : {
        position : 'relative',
        listStyleType : 'none',
        padding : '16px'
    },
    fontSize : '20pt',
    prosList : {
        margin : '16px auto'
    },
    listItem1 : getListItemRules(1),
    listItem2 : getListItemRules(2),
    listItem3 : getListItemRules(3),
    listItem4 : getListItemRules(4),
    formattedCode : {
        textAlign : 'left',
        fontSize : '20pt'
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
            <div className={classes.prosWrapper}>
                <ul className={`${classes.list} ${classes.prosList}`}>
                    <li className={classes.listItem1}>
                       Attach and detach sheets easily to CSSOM
                    </li>
                    <li className={classes.listItem2}>
                        Uses Cache-ing to rebuild sheets
                    </li>
                    <li className={classes.listItem3}>
                        Allows for function values (+Cache-ing)<br/><br/>
                        <pre className={classes.formattedCode}>
                        {`playingWheresWaldo : {
    opacity : ({ currentStepNumber })=> (
        currentStepNumber == BROWSER_PLAYS_WHERES_WALDO ? 1 : 0
    ),
    transition : 'opacity 0.25s ease-in 3s',
    //...
}`}
                        </pre>
                    </li>
                    <li className={classes.listItem4}>
                        Pseudo-selectors, Theme-ing, Plugins and More
                    </li>
                </ul>   
            </div>         
            </PresentationSlide>
        );
    }
}

export default injectSheet(styleSheet)(SlideBrowserMustFindWaldo);