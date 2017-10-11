import React, { PureComponent } from 'react'
import pure from 'recompose/pure'
import injectSheet from 'react-jss'
import { PresentationSlide } from 'modules/presentation'
import StepEnums from './../../constants/StepEnums'
import getListItemSlideRules from 'tools/slide-styles/getListItemSlideRules'


const styleSheet = {
    jssLogo : { 
        margin : '0 auto'
    }
};

class SlideShinyTechSavesTheDay extends PureComponent {
    render () {
        const { classes, ...props } = this.props;

        return (
            <PresentationSlide 
                data-x={'18000'}
                data-y={'1000'}
                data-z={'1800'}
                data-scale={'2'}
                data-rotate-x={'270'}
                data-rotate-y={'180'}
                {...props}
            >    
               <img className={classes.cssLogo} src="/img/logos/jss.png" />
            </PresentationSlide>
        );
    }
}

export default injectSheet(styleSheet)(SlideShinyTechSavesTheDay);