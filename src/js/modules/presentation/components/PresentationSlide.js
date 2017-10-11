import React, { PureComponent } from 'react'
import connect from 'react-redux/lib/connect/connect'

/**
 * 
 * Represents an impress.js slide; we wrap the
 * outside of the slide with 
 * the impress.js attributes that we'd normally 
 * apply wrapped in a div for is. This allows
 * us to declaratively write content in a very
 * React-friendly way
 *  
 * @prop containerClass CSS classname for the container to
 *          apply to a container's surrounding div
 * @prop data.onStepEnter action to take when step was entered
 * @prop data.onStepLeave action to take when step was left
 * @prop data-scale-x
 * @prop data-scale-y
 * @prop data-scale-z
 * @prop data-rotate-x
 * @prop data-rotate-y
 * @prop data-rotate-z
 * @prop data-x
 * @prop data-y
 * @prop data-z
 * @prop stepScaleCount
 * 
 */
class PresentationSlide extends PureComponent {
    componentWillUpdate (nextProps, nextState) {
        // check that the previous slide was the slide we had
        // was active and came to be; we can use this
        // opportunity to have an intro/outro behavior
        // using the "statefulProps" library
        
        // TODO : this
    }
    componentDidMount () {
    }
    render () {
        const { props } = this;
        const componentProps = {
            ['data-transition-duration'] : props['data-transition-duration'],
            ['data-x'] : props['data-x'],
            ['data-y'] : props['data-y'],
            ['data-z'] : props['data-z'],
            ['data-rotate-x'] : props['data-rotate-x'],
            ['data-rotate-y'] : props['data-rotate-y'],
            ['data-rotate-z'] : props['data-rotate-z'],
            ['data-scale']    : props['data-scale'],
            ['className'] : `${props.containerClass} step`,
        };

        /*if(props.isSlideActive) {
            componentProps.className = componentProps.className || '';
            componentProps.className += ' inactiveSlide';
        }
        */

        return  (
            <div {...componentProps}>{props.children }</div>);
    }
}

// TODO : connect to current slide
export default connect((state, ownProps)=>({
    viewportWidth : state.core.viewportWidth,
    viewportHeight : state.core.viewportHeight
}), null)(PresentationSlide);