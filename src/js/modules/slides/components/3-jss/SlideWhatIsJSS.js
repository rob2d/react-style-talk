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
    listItem : {
    },
    list : {
        position : 'relative',
        listStyleType : 'none',
        padding : '16px'
    }
};

class SlideWhatIsJSS extends PureComponent {
    render () {
        const { classes, ...props } = this.props;

        return (
            <PresentationSlide 
                data-x={'40000'}
                data-y={'8000'}
                data-scale={'3'}
                data-rotate-x={'270'}
                data-rotate-y={'180'}
                {...props}
            >
            <ul>
                <li className={classes.listItem}>
                    CSS in JS
                </li>
                <li className={classes.listItem}>
                    JavaScript API to communicate directly with CSSOM
                </li>
            </ul>
            </PresentationSlide>
        );
    }
}

export default injectSheet(styleSheet)(SlideWhatIsJSS);