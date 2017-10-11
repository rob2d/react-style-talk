
export default function getListItemSlideRules (itemNumber, slideOffset) {
    return {
        position : 'relative',
        opacity : ({ currentStepNumber })=>(
            (currentStepNumber >= (itemNumber + slideOffset)) ? 1 : 0
        ),
        transition : 'opacity 0.35s linear, top 0.25s linear',
        fontSize : '18pt',
        marginBottom : '16px',
        top : ({ currentStepNumber })=>(
            (currentStepNumber >= (itemNumber + slideOffset))? '0px' : '64px'
        )
    };
};