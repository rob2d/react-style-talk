import React, { PureComponent } from 'react'
import pure from 'recompose/pure'
import injectSheet from 'react-jss'
import { PresentationSlide } from 'modules/presentation'
import StepEnums from './../../constants/StepEnums'
import getListItemSlideRules from 'tools/slide-styles/getListItemSlideRules'

const STEP_COUNT = 6;
const Steps = {
    SLIDE_START : StepEnums.REACT_INLINE_START,
    PRO_CON_SPLIT : StepEnums.REACT_INLINE_PROCONS + 5
};

const getListItemRules = (itemNumber)=> {
    const isPro = itemNumber < 5;
    const isCon = itemNumber >= 5;
    const listItemRules = getListItemSlideRules(itemNumber, Steps.SLIDE_START+2);
    
    return Object.assign({}, listItemRules, 
    {
        fontSize : ({ currentStepNumber, ...props })=> (
            (currentStepNumber < Steps.PRO_CON_SPLIT) ? '18pt' : '15pt'
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
            currentStepNumber < Steps.PRO_CON_SPLIT ? '0px' : '16px auto'
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
    hax0rz : {
        display : ({ currentStepNumber })=> (
            (currentStepNumber >= Steps.SLIDE_START+4) ? 'inline-block' : 'none'
        ),
        fontStyle : 'italic',
        color : 'rgb(200,200,200)'
    }
};

class SlideInlineStylesIntro extends PureComponent {
    render () {
        const { classes, ...props } = this.props;

        return (
            <PresentationSlide 
                data-x={'11000'}
                data-y={'1000'}
                data-scale={'2'}
                data-rotate-x={'180'}
                data-rotate-z={'180'}
                {...props}
            >
                <p className={classes.title}>
                    Inline Styles in React
                </p>
                <div className={classes.proConsWrapper}>
                    <ul className={`${classes.list} ${classes.prosList}`}>
                        <i className={`${classes.prosConsIcon} mdi mdi-plus`}/>
                        <li className={classes.listItem1}>
                            Convenient <span className={classes.hax0rz}>(hax1!11!)</span>
                        </li>
                        <li className={classes.listItem2}>
                            Good for Distributing Modules
                        </li>
                        <li className={classes.listItem3}>
                            Dynamic
                        </li>
                        <li className={classes.listItem4}>
                            <p>Used by several respectable UI libraries/tools.</p>
                            <div className={classes.inlineTechs}>
                                <img src='/img/logos/material-ui-logo.svg' className={ classes.muiLogo }/>
                                <span className={classes.radiumLogo}>Radium</span>
                            </div>
                        </li>
                    </ul>
                    <ul className={`${classes.list} ${classes.consList}`}>
                        <i className={`${classes.prosConsIcon} mdi mdi-minus`}/>
                        <li className={classes.listItem5}>
                            Potentially Slow (Esp. in <i className="mdi mdi-react"/>)
                        </li>
                        <li className={classes.listItem6}>
                            Unclear separation of style and layout
                        </li>
                        <li className={classes.listItem7}>
                            Anonymous / Not self-descriptive
                        </li>   
                        <li className={classes.listItem8}>
                            Boilerplate (MediaQueries, Mouse Bindings, etc)
                        </li>

                        <li className={classes.listItem9}>
                            Debugging is Painful
                        </li>
                    </ul>
                </div>
            </PresentationSlide>
        );
    }
}

export default injectSheet(styleSheet)(SlideInlineStylesIntro);