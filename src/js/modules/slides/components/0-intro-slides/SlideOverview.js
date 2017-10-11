import React, { PureComponent } from 'react'
import pure from 'recompose/pure'
import injectSheet from 'react-jss'
import { PresentationSlide } from 'modules/presentation'
import StepEnums from './../../constants/StepEnums'
import getListItemSlideRules from 'tools/slide-styles/getListItemSlideRules'

const Authors = {
    [StepEnums.JSTGP] : 'Douglas Crockford',
    'myself' : 'Robert Concepcion III'
};

const getListItemRules = (slideNumber)=> {
    return getListItemSlideRules(slideNumber, StepEnums.OVERVIEW)
};

const styleSheet = {
    title : { fontSize : '32pt' },
    listItem1 : getListItemRules(1),
    listItem2 : getListItemRules(2),
    listItem3 : getListItemRules(3),
    listItem4 : getListItemRules(4),
    listItem5 : getListItemRules(5),
    list : {
        listStyleType : 'none',
    }
};

class SlideOverview extends PureComponent {
    render () {
        const { classes, containerClass, currentStepNumber, stepNumber } = this.props;

        const authorText = Authors[currentStepNumber] || Authors.myself;

        return ( 
            <PresentationSlide
                data-x={'2000'}
                data-y={'0'}
                data-scale={'1'}
                data-rotate-y={'90'}
                stepSpanCount={4}
                containerClass={containerClass}
                data-transition-duration={(stepNumber >= StepEnums.OVERVIEW) ? 0 : undefined}
                {...this.props}
            >
                <p className={classes.title}>Overview</p>
                <ul className={classes.list}>
                    <li className={classes.listItem1}>
                        Styling solutions in React
                    </li>
                    <li className={classes.listItem2}>
                        Problems and Approaches to Inline Styles
                    </li>
                    <li className={classes.listItem3}>
                        CSS Benefits and the Workflow Issues Involved
                    </li>
                    <li className={classes.listItem4}>
                        An Alternative Approach known as JSS
                    </li>
                    <li className={classes.listItem5}>
                        ... And Beyond!  🚀
                    </li>
                </ul>
            </PresentationSlide>
    );
    }
}

export default injectSheet(styleSheet)(SlideOverview);