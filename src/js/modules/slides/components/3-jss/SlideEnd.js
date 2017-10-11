import React, { PureComponent } from 'react'
import pure from 'recompose/pure'
import injectSheet from 'react-jss'
import { PresentationSlide } from 'modules/presentation'
import StepEnums from './../../constants/StepEnums'
import createListItemSlideRules from 'tools/slide-styles/getListItemSlideRules'

const styleSheet = {
    logo : {
        width : 'auto',
        height : '100px',
        margin : '16px'
    },
    title : {
        fontSize : '40pt'
    },
    stepEnd : {
        display : ({ currentStepNumber })=> (
            currentStepNumber == 63 ? 'block' : 'none'
        )
    }
};

class SlideEnd extends PureComponent {
    render () {
        const { classes, ...props } = this.props;

        return (
            <PresentationSlide 
                data-x={'26000'}
                data-y={'14000'}
                data-z={'1800'}
                data-scale={'2'}
                data-rotate-x={'270'}
                data-rotate-y={'180'}
                {...props}
            >
            <div className={classes.stepEnd}>
                <p className={classes.title}>Conclusion</p>
                <img src="img/logos/css3.png" className={classes.logo}/>  
                <img src="img/logos/js.png" className={classes.logo}/>
                <img src="img/logos/jss.png" className={classes.logo}/>       
                </div>
            </PresentationSlide>
        );
    }
}

export default injectSheet(styleSheet)(SlideEnd);