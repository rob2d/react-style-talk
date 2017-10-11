import React, { PureComponent } from 'react'
import pure from 'recompose/pure'
import injectSheet from 'react-jss'
import { PresentationSlide } from 'modules/presentation'
import StepEnums from './../../constants/StepEnums'
import getListItemSlideRules from 'tools/slide-styles/getListItemSlideRules'


const styleSheet = {
    alwaysWinLoseQ : {
        fontSize : '40pt'
    }
};

class SlideWhatIsJSS extends PureComponent {
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
            <li className={classes.listItem1}>
                CSS in JS
            </li>
            <li className={classes.listItem2}>
                JavaScript API to communicate directly with CSSOM
            </li>
            </PresentationSlide>
        );
    }
}

export default injectSheet(styleSheet)(SlideWhatIsJSS);