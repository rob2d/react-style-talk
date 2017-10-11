import React, { PureComponent } from 'react'
import pure from 'recompose/pure'
import injectSheet from 'react-jss'
import { PresentationSlide } from 'modules/presentation'
import StepEnums from './../../constants/StepEnums'
import createListItemSlideRules from 'tools/slide-styles/getListItemSlideRules'


const Steps = {
    SLIDE_START : StepEnums.REACT_JSS_USAGE
};

const getListItemRules = (itemNumber)=> {
    const listItemRules = createListItemSlideRules(itemNumber, Steps.SLIDE_START);
    
    return Object.assign({}, listItemRules, 
    {
        fontSize : ({ currentStepNumber, ...props })=> (
            (currentStepNumber < Steps.PRO_CON_SPLIT) ? '18pt' : '14pt'
        ),
        transition : listItemRules.transition + 
                        ', font-size 0.35s ease-in',
        display : ({ currentStepNumber })=> (
            currentStepNumber > Steps.SLIDE_START ? 'block' : 'none'
        )
    })
};


const styleSheet = {
    title : {
        fontSize : '32pt',
        display : ({ currentStepNumber})=>(
            currentStepNumber > Steps.SLIDE_START ? 'none' : 'block'
        )
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
    listItem5 : getListItemRules(5),
    listItem6 : getListItemRules(6),
    formattedCode : {
        textAlign : 'left',
        fontSize : '14pt'
    },
    benefitsOfReactJSS : {
        color : 'rgb(200,200,200)',
        display : ({ currentStepNumber})=>(
            currentStepNumber > Steps.SLIDE_START ? 'none' : 'block'
        )
    }
};

const styles = {
    button: {
      background: props => props.color,
      margin : '32px'
    },
    label: {
      fontWeight: 'bold'
    }
  };         
  
  const Button = ({classes, children}) => (
    <button className={classes.button}>
      <span className={classes.label}>
        {children}
      </span>
    </button>
  );         

  const ButtonExample = injectSheet(styles)(Button);

class SlideReactJSSBenefits extends PureComponent {
    render () {
        const { classes, ...props } = this.props;

        return (
            <PresentationSlide 
                data-x={'28000'}
                data-y={'10000'}
                data-z={'1800'}
                data-scale={'2'}
                data-rotate-x={'270'}
                data-rotate-y={'180'}
                {...props}
            >
            <p className={classes.title}>
                <div className={classes.cssBenefitsText}>Usage</div>
            </p>
            <p className={classes.benefitsOfReactJSS}>
                (taken from <b>https://github.com/cssinjs/react-jss)
            </b></p>
            <div className={classes.prosWrapper}>
                <ul className={`${classes.list} ${classes.prosList}`}>
                    <li className={classes.listItem1}>
                    <pre className={classes.formattedCode}>
                        {
`import React from 'react'
import injectSheet from 'react-jss'`}
                        </pre>
                    </li>
                    <li className={classes.listItem2}>
                    <pre className={classes.formattedCode}>{
`const styles = {
    button: {
      background: props => props.color,
      margin : '32px'
    },
    label: {
      fontWeight: 'bold'
    }
 }`                }</pre>
                    </li>
                    <li className={classes.listItem3}>
                        <pre className={classes.formattedCode}>{
`const Button = ({classes, children}) => (
    <button className={classes.button}>
      <span className={classes.label}>
        {children}
      </span>
    </button>
  )
  
  `                   }</pre>
                    </li>
                    <li className={classes.listItem4}>
                        <pre className={classes.formattedCode}>{`export default injectSheet(styles)(Button)`
                        }</pre>
                    </li>
                    <li className={classes.listItem5}>
                    <pre className={classes.formattedCode}>{
`<ButtonExample color={"rgb(255,255,100)"}>w00t</ButtonExample> 
<ButtonExample color={"rgb(255,100,200)"}>just</ButtonExample>  
<ButtonExample color={"rgb(100,255,255)"}>testing</ButtonExample> `
                    }</pre>
                    </li>
                    <li className={classes.listItem6}>
                        <ButtonExample color={"rgb(255,255,100)"}>w00t</ButtonExample> 
                        <ButtonExample color={"rgb(255,100,200)"}>just</ButtonExample>  
                        <ButtonExample color={"rgb(100,255,255)"}>testing</ButtonExample>                    
                    </li>
                </ul>   
            </div>         
            </PresentationSlide>
        );
    }
}

export default injectSheet(styleSheet)(SlideReactJSSBenefits);