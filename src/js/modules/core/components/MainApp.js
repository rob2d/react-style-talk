import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import injectSheet from 'react-jss'
import connect from 'react-redux/lib/connect/connect'

import { refreshWindowDimensions } from './../actions'

import { Presentation, PresentationSlide } from 'modules/presentation'
import { 
    SlideTitleScreen, 
    SlideOverview,
    SlideWaitButWhy,
    SlideInlineStylesIssues,
    SlideCodeSample,
    SlideSoWhatAboutCSS,
    SlideIsCSSTheFinalSolution,
    SlideCSSProCons,
    SlideSoDoWeAlwaysNeedToLose,
    SlideShinyNewTech,
    SlideTheresAlwaysHope,
    SlideWhatIsJSS,
    SlideBrowserPlaysWheresWaldo,
    SlideBrowserMustFindWaldo,
    SlideJSSBenefits,
    SlideReactJSSBenefits,
    SlideReactJSSUsage,
    SlideBonusRound,
    SlideEnd
} from 'modules/slides'

const styles =
{
    appWrapper :
    {
        minHeight       : '100%',
        margin          : '0px auto',
        display         : 'flex',
        flexDirection   : 'row',
    },
    mainWrapper :
    {
        minHeight       : '100%',
        margin          : '0px auto',
        display         : 'flex',
        flexDirection   : 'column',
        flex            : '1 0 auto'
    },
    contentWrapper :
    {
        maxWidth : '720px',
        minWidth : '360px',
        margin   : '0 auto'
    },
    mainContainer :
    {
        display        : 'flex',
        alignItems     : 'center',
        justifyContent : 'center',
        flex           : '1 0 auto',
        flexDirection  : 'column'
    },
    mainContent :
    {
        flexDirection : 'column',
        display       : 'flex',
        flex          : '1 0 auto'
    },
    appFooter :
    {
        height    : '40px',
        textAlign : 'center'
    },
    presentation : {
        minWidth : '800px'
    },
    stepContainer : {
        minWidth : '800px',
        textAlign : 'center'
    }
};

// TODO : export slides to slide module
//        and do not use inline values
//        for code samples


class MainApp extends PureComponent
{
    static contextTypes = {
        store : PropTypes.object.isRequired,
    };
    onResizeWindow = ()=> {
        this.props.onResizeWindow();
    };
    componentDidMount() {
        window.addEventListener('resize', this.onResizeWindow);
    }
    componentWillUnmount() {
        window.removeEventListener('resize', this.onResizeWindow);
    }
    render () {
        const { classes } = this.props;
        return (
                <div className={classes.appWrapper}>
                    <Presentation 
                        domId='presentation' 
                        containerClass={classes.presentation}
                        data-transition-duration={'600'}
                        slideContainerClass={classes.stepContainer}
                    >
                        <SlideTitleScreen />
                        <SlideOverview stepSpanCount={ 6 } />
                        <SlideWaitButWhy />
                        <SlideTitleScreen asJSTGP={ true } />
                        <SlideInlineStylesIssues/>
                        <SlideCodeSample codeSample={`<div style={...}>stylin'</div>`} /> 
                        <SlideInlineStylesIssues stepSpanCount={ 11 } />
                        <SlideCodeSample codeSample={`
                             <div style="display: none; font-family: proxima-nova, 
                             sans-serif; position: absolute; background: rgba(0, 0, 0, 0.7); 
                             color: white; left: 0px; top: 0px; padding: 7px; 
                             transform: translate(-50%, -50%); font-size: 15px; 
                             font-weight: 400; border-radius: 6px; min-width: 110px; 
                             text-align: center; user-select: none;">
                             Repeat in inception-esque way
                             </div>`} 
                        /> 
                        <SlideCodeSample 
                            alternate={true}
                            codeSample={`
                            <div style="display: none; font-family: proxima-nova, 
                            sans-serif; position: absolute; background: rgba(0, 0, 0, 0.7); 
                            color: white; left: 0px; top: 0px; padding: 7px; 
                            transform: translate(-50%, -50%); font-size: 15px; 
                            font-weight: 400; border-radius: 6px; min-width: 110px; 
                            text-align: center; user-select: none;"><div style="display: none; font-family: proxima-nova, 
                            sans-serif; position: absolute; background: rgba(0, 0, 0, 0.7); 
                            color: white; left: 0px; top: 0px; padding: 7px; 
                            transform: translate(-50%, -50%); font-size: 15px; 
                            font-weight: 400; border-radius: 6px; min-width: 110px; 
                            text-align: center; user-select: none;">W|T|F</div>
                            </div>`} 
                        /> 
                        <SlideSoWhatAboutCSS />
                        <SlideIsCSSTheFinalSolution />
                        <SlideCSSProCons stepSpanCount={12}/>
                        <SlideSoDoWeAlwaysNeedToLose />
                        <SlideTheresAlwaysHope />
                        <SlideShinyNewTech />
                        <SlideWhatIsJSS />
                        <SlideBrowserPlaysWheresWaldo />
                        <SlideBrowserMustFindWaldo />
                        <SlideJSSBenefits stepSpanCount={5} />
                        <SlideReactJSSBenefits stepSpanCount={5} />
                        <SlideReactJSSUsage stepSpanCount={7} />
                        <SlideBonusRound />
                        <SlideEnd />
                    </Presentation>
                </div>
        );
    }
}

const VisibleMainApp = connect(
    (state, ownProps)=>
    ({
        viewportWidth  : state.core.viewportWidth,
        viewportHeight : state.core.viewportHeight
    }),
    (dispatch)=>
    ({
        onResizeWindow : ()=>
        {
            dispatch(refreshWindowDimensions());
        }
    })
)(injectSheet(styles)(MainApp));

export default VisibleMainApp
