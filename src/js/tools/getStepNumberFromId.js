/**
 * Given an impress dom element id,
 * parses the step number to identify
 * a slide (using 1-based-index)
 * @param {*} stepId 
 */
export default function getSlideNumberFromDomId (stepId){
    return parseInt(stepId.match(/\s*step-((\d)+)\s*/)[1]) 
};