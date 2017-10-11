import React, { PureComponent } from 'react'
import pure from 'recompose/pure'
import injectSheet from 'react-jss'
import { PresentationSlide } from 'modules/presentation'
import StepEnums from './../../constants/StepEnums'
import createListItemSlideRules from 'tools/slide-styles/getListItemSlideRules'


const Steps = {
    SLIDE_START : StepEnums.REACT_JSS_BENEFITS
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
    title : {
        fontSize : '32pt'
    },
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
    },
    benefitsOfReactJSS : {
        color : 'rgb(200,200,200)'
    }
};

class SlideReactJSSBenefits extends PureComponent {
    render () {
        const { classes, ...props } = this.props;

        return (
            <PresentationSlide 
                data-x={'24000'}
                data-y={'10000'}
                data-z={'1800'}
                data-scale={'2'}
                data-rotate-x={'270'}
                data-rotate-y={'180'}
                {...props}
            >
            <p className={classes.title}>ReactJSS</p>
            <p className={classes.benefitsOfReactJSS}>
                (taken from <b>https://github.com/cssinjs/react-jss)
            </b></p>
            <div className={classes.prosWrapper}>
                <ul className={`${classes.list} ${classes.prosList}`}>
                    <li className={classes.listItem1}>
                        Theming support out of the box.
                    </li>
                    <li className={classes.listItem2}>
                        Lazy evaluation - sheet is created only when component will mount.
                    </li>
                    <li className={classes.listItem3}>
                        Auto attach/detach - sheet will be rendered to the DOM when component is about to mount and will be removed when no element needs it.
                    </li>
                    <li className={classes.listItem4}>
                        A Style Sheet gets shared between all elements                   
                    </li>
                </ul>    
            </div>         
            </PresentationSlide>
        );
    }
}

export default injectSheet(styleSheet)(SlideReactJSSBenefits);