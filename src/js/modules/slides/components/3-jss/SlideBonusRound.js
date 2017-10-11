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
    },
    bonusRound : {
        width : '400px',
        height : 'auto'
    }
};

class SlideBonusRound extends PureComponent {
    render () {
        const { classes, ...props } = this.props;

        return (
            <PresentationSlide 
                data-x={'32000'}
                data-y={'10000'}
                data-z={'1800'}
                data-scale={'2'}
                data-rotate-x={'270'}
                data-rotate-y={'180'}
                {...props}
            >
            <img src="img/slides/bonusround.png" className={classes.bonusRound}/>
            <p className={classes.title}>
                Bonus Round
            </p>
            <div className={classes.prosWrapper}>
                <ul className={`${classes.list} ${classes.prosList}`}>
                    <li className={classes.listItem1}>
                        This presentation was created using React, Redux, ImpressJS, and ReactJSS
                    </li>
                    <li className={classes.listItem2}>
                        Download on Github for example @ http://www.github.com/rob2d/
                    </li>
                </ul>   
            </div>         
            </PresentationSlide>
        );
    }
}

export default injectSheet(styleSheet)(SlideBonusRound);