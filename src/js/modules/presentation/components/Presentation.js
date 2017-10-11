import React, { PureComponent } from 'react'
import pure from 'recompose/pure'
import Impress from 'impress.js' //import impress into our root app
import getStepNumber from 'tools/getStepNumberFromId'

/**
 * Provides all the hooks to mount an
 * impress.js presentation onto our 
 * webpage; note that you need
 * to always display all slides to get
 * a consistent/predictable behavior
 * with impress.js
 * 
 * (this can later be investigated for
 *  optimizations but just MVP here :D)
 * 
 * NOTE : do not unmount this component;
 *        its still horribly primitive and essentially
 *        just works as a standalone presentation app
 *        container for impress.js
 */
class Presentation extends PureComponent {
    constructor(props) {
        super(props);
        this.state = { stepNumber : 1 };
        this.renderedChildren = []; // memoized set of children
                                    // calculated based on current props
    }
    goToStep = (stepNumber)=> {
        impress.goto(stepNumber);
    };
    updateRenderedChildren = (nextProps, nextState)=> {
        const renderedChildren = [];
        const { 
            children, 
            presentationStepClass, 
            slideContainerClass 
        } = nextProps;

        let currentChildIndex = 0;

        nextProps.children.forEach((child,i)=>{
            const injectedProps = {};

            // inject each slide's step
            injectedProps.stepNumber = (++currentChildIndex);
            injectedProps.currentStepNumber = nextState.stepNumber;

            // add slideContainerClass as containerClass if 
            // it exists. PresentationSlides within the 
            //presentation will know to utilize this class for 
            // its outermost component
            if(slideContainerClass) {
                injectedProps.containerClass = slideContainerClass;
            }

            if(!child.props.hasOwnProperty('stepSpanCount')) {
                /*injectedProps.isSlideActive = (
                    (currentChildIndex >= nextState.stepNumber - 2) && 
                    (currentChildIndex <= nextState.stepNumber + 2)
                );*/
                injectedProps.key = 'slide' + injectedProps.stepNumber;
                renderedChildren.push(React.cloneElement(child, injectedProps));  
            }
            // inject relevant props into slides.
            // if the child spans more than one step,
            // copy it to fill in all of those steps
            // and then add to the currentChildIndex
            // offset for slides coming afterwards 
            else {
                for(let j = 0; j < child.props.stepSpanCount; j++) {
                    const subSlideIndex = currentChildIndex+j;
                    const uniqueInjectedProps = Object.assign(
                        {...injectedProps},
                        { 
                            stepNumber : currentChildIndex+j,
                            key : 'slide'+currentChildIndex+j+'sub'
                            /*isSlideActive : (
                                (subSlideIndex >= nextState.stepNumber - 2) && 
                                (subSlideIndex < nextState.stepNumber)
                            )*/
                        } 
                    );

                    if(j > 0) {
                        // set transition time to zero for any in between steps
                        uniqueInjectedProps['data-transition-duration'] = 0;
                    }
                    renderedChildren.push(React.cloneElement(child, uniqueInjectedProps));                
                }
                currentChildIndex += child.props.stepSpanCount-1;
            }
        });
        this.renderedChildren = renderedChildren;
    };
    componentWillMount () {
        this.updateRenderedChildren(this.props, this.state);
    }
    componentWillUpdate(nextProps, nextState) {
        this.updateRenderedChildren(nextProps, nextState);        
    }
    componentDidMount () {
        const presentationElement = document.querySelector(`#${this.props.domId || 'presentation'}`);
        if(!presentationElement) {
            throw new Error('Presentation could not be initialized');
        }
        this.impressAPI = impress(`${this.props.domId || 'presentation'}`);   
        this.impressAPI.init(`${this.props.domId || 'presentation'}`);     

        presentationElement.addEventListener('impress:stepenter', this.onStepEnter);
        presentationElement.addEventListener('impress:stepleave', this.onStepLeave);
    }
    onStepEnter = (event) => {
        const stepNumber = getStepNumber(event.target.id);
        // find the child slide with the currently entered step number
        // or else if we can't assert that, throw an error
        if(typeof this.renderedChildren[stepNumber-1] != 'object') {
            throw new Error(`There is no child PresentationSlide defined for step number ${stepNumber}`);
        }

        if(this.renderedChildren[stepNumber-1].onStepEnter) {
            this.renderedChildren[stepNumber-1].onStepEnter(event);            
        }

        this.setState({ stepNumber });
    };
    onStepLeave = (event) => {
        const stepNumber = getStepNumber(event.target.id);
        // find the child slide with the currently entered step number
        // or else if we can't assert that, throw an error
        if(typeof this.renderedChildren[stepNumber-1] != 'object') {
            throw new Error(`There is no child PresentationSlide defined for step number ${stepNumber}`);
        }

        if(this.renderedChildren[stepNumber-1].onStepLeave) {
            this.renderedChildren[stepNumber-1].onStepLeave(event);            
        }
    };
    render () {
        const { 
            children, 
            presentationStepClass, 
            slideContainerClass,
            containerClass,
            domId 
        } = this.props;

        return (
            <div 
                id={domId || 'presentation'} 
                className={containerClass}
                data-transition-duration={this.props['data-transition-duration']}
            >
                {this.renderedChildren}
            </div>
        );
    }
}

export default Presentation