import React, { PureComponent } from 'react'
import pure from 'recompose/pure'
import injectSheet from 'react-jss'
import { PresentationSlide } from 'modules/presentation'
import StepEnums from './../../constants/StepEnums'
import createListItemSlideRules from 'tools/slide-styles/getListItemSlideRules'

console.log('StepEnums.CSS_PROCONS ->', StepEnums.CSS_PROCONS);

const STEP_COUNT = 6;
const Steps = {
    SLIDE_START   : StepEnums.CSS_PROCONS,
    PRO_CON_SPLIT : StepEnums.CSS_PROCONS + 5
};

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
    title : { 
        fontSize : '32pt'
    },
    listItem1 : getListItemRules(1),
    listItem2 : getListItemRules(2),
    listItem3 : getListItemRules(3),
    listItem4 : getListItemRules(4),
    listItem5 : getListItemRules(6),
    listItem6 : getListItemRules(7),
    listItem7 : getListItemRules(8),
    listItem8 : getListItemRules(9),
    listItem9 : getListItemRules(10),
    listItem10 : getListItemRules(11),
    list : {
        position : 'relative',
        listStyleType : 'none',
        padding : '16px'
    },
    prosList : {
        width : ({ currentStepNumber })=>(
            (currentStepNumber >= Steps.PRO_CON_SPLIT) ? '320px' : '400px'
        ),
        border : ({currentStepNumber})=>(
            currentStepNumber >= Steps.PRO_CON_SPLIT ? 
                '1px solid rgba(0,255,0,1)' : 
                '0px solid rgba(0,0,0,0)'
        ),
        margin : '16px auto',
        transition : 'left 0.5s ease-out, ' +
                     'width 0.5s ease-out, ' + 
                     'border 0.65s ease-in 0.4s'
    },
    consList : {
        width : ({ currentStepNumber })=>(
            currentStepNumber < Steps.PRO_CON_SPLIT ? '0px' : '320px'
        ),
        maxHeight : ({ currentStepNumber })=>(
            currentStepNumber < Steps.PRO_CON_SPLIT ? '0px' : '500px'
        ), 
        border : ({currentStepNumber})=>(
            currentStepNumber >= Steps.PRO_CON_SPLIT ? 
                '1px solid rgba(255,0,0,1)' : 
                '0px solid rgba(0,0,0,0)'
        ),
        transition : 'left 0.5s ease-out, ' +
                     'width 0.5s ease-out, ' + 
                     'border 0.65s ease-in, ' +
                     'margin 0.5s ease-out, ' + 
                     'max-height 0.5s ease-out',
        margin : ({ currentStepNumber })=>(
            currentStepNumber < Steps.PRO_CON_SPLIT ? 
                '0px' : '16px auto'
        )
    },
    prosConsIcon : {
        position : 'absolute',
        top      : '-32px',
        right    : '16px',
        opacity  : ({ currentStepNumber })=>(
            currentStepNumber >= Steps.PRO_CON_SPLIT ? 1 : 0
        ),
        transition : 'opacity 0.5s ease-in'
    },
    proConsWrapper : {
        display : 'flex',
        justifyContent : 'center'
    },
    muiLogo : { 
        width : '160px',
        height : 'auto',
        padding : '16px'
    },
    radiumLogo : {
        fontFamily : 'sharp',
        fontSize : '28pt',
        padding  : '16px'
    },
    inlineTechs : {
        display : 'flex',
        alignItems : 'center',
        justifyContent : 'center',
        border : '1px solid',
        padding : '8px',
        width   : ({ currentStepNumber })=>(
            currentStepNumber < Steps.PRO_CON_SPLIT ? 'auto' : '220px'
        ),
        margin : '0 auto 32px',
        flexDirection : ({ currentStepNumber })=> (
            (currentStepNumber < Steps.PRO_CON_SPLIT) ? 'row':'column'
        ),
        transition : 'all 0.5s'
    },
    codeSample : {
        fontFamily : '"Inconsolata"', //TODO : install font
        fontSize : '18pt',
        margin   : '16px',
        backgroundColor : 'rgb(0,0,0)',
        color : '#00FF00',
        padding : '16px',
        textShadow : '1px 1px 1px rgba(0,0,0,0.5)'
    },
    inlineStyleCode : {
        display : ({ currentStepNumber })=> (
            (currentStepNumber == Steps.SLIDE_START) ? 'block' : 'none'
        )
    },
    debuggingIsHard : {
        display : 'none'
    },
    speedCaveats : {
        fontSize : '11pt'
    },
    memeFaceImg : {
        position   : 'absolute',
        right      : '16px',
        top        : '-128px',
        transition : 'transform 0.5s ease',
        width      : '64px',
        height     : 'auto',
        transform  : ({ currentStepNumber })=> (
            (currentStepNumber == Steps.PRO_CON_SPLIT+1) ? 
                'rotate(5deg)' : 
                'rotate(180deg)'
        ),
        display : ({ currentStepNumber })=> (
            (currentStepNumber < Steps.PRO_CON_SPLIT || currentStepNumber > Steps.PRO_CON_SPLIT + 2) ? 'none' : 'block'
        )
    },
    cssBenefitsText : { 
        display : ({ currentStepNumber })=> (
            (currentStepNumber < Steps.PRO_CON_SPLIT) ? 'block' : 'none')
    },
    cssProsConsText : { 
        display : ({ currentStepNumber })=> (
            (currentStepNumber < Steps.PRO_CON_SPLIT) ? 'none' : 'block'
        )
    }
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
                    <div className={classes.cssBenefitsText}>Benefits of CSS</div>
                    <div className={classes.cssProsConsText}>Pros/Cons of CSS</div>
                </p>
                <img src="/img/slides/memeface.jpg" className={classes.memeFaceImg}/>
                <div className={classes.proConsWrapper}>
                    <ul className={`${classes.list} ${classes.prosList}`}>
                        <i className={`${classes.prosConsIcon} mdi mdi-plus`}/>
                        <li className={classes.listItem1}>
                            Fast ** <span className={classes.speedCaveats}>(+caveats)</span>
                        </li>
                        <li className={classes.listItem2}>
                            Familiar; Tried and True
                        </li>
                        <li className={classes.listItem3}>
                            Convenient for PureComponents
                        </li>
                        <li className={classes.listItem4}>
                            Can Use Client-side cache-ing
                        </li>
                    </ul>
                    <ul className={`${classes.list} ${classes.consList}`}>
                        <i className={`${classes.prosConsIcon} mdi mdi-minus`}/>
                        <li className={classes.listItem5}>
                            Many files slow down page loading
                        </li>
                        <li className={classes.listItem6}>
                            Many style rules in CSSOM slow down the Browser's &nbsp;
                            <b>Critical Rendering Path</b>
                        </li>
                        <li className={classes.listItem7}>
                            Additional build processes
                        </li>
                        <li className={classes.listItem8}>
                            Syntax; Requires Preprocessors (SASS/SCSS)
                        </li>   
                        <li className={classes.listItem9}>
                            Global, Not Modular
                        </li>
                        <li className={classes.listItem10}>
                            Still Need Inline-Styles In Modern Apps 😦
                        </li>
                    </ul>
                </div>
            </PresentationSlide>
        );
    }
}

export default injectSheet(styleSheet)(SlideCSSProsCons);