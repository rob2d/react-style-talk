import Impress from 'impress.js'

// helper function to parse step number from id
const getStepNumber = (stepId)=> ( 
    stepId.match(/\s*step-(\d)\s*/)[1] 
);

// =======================//
//    ACTION CONSTANTS    //
// =======================//

export const MOUNT_PRESENTATION = 'Presentation.MOUNT_PRESENTATION';
export const GO_TO_STEP = 'Presentation.GO_TO_STEP';
export const ENTER_STEP = 'Presentation.ENTER_STEP';
export const LEAVE_STEP = 'Presentation.LEAVE_STEP';

// =======================//
//   ACTIONS DISPATCHERS  //
// =======================//

const dispatchStepEvent = (event, handler, dispatch)=> {
    const stepNumber = getStepNumber(event.target.id);
    dispatch(handler(event));
};

export const mountPresentation = (domId)=> (dispatch, getState)=> {
    const impressAPI = impress(domId);
    impressAPI.init(domId);

    const presentationElement = document.getElementById(domId);
    presentationElement.addEventListener('impress:stepenter', ()=>dispatch(enterStep));
    presentationElement.addEventListener('impress:stepleave', ()=>dispatch(leaveStep);


    dispatch({ 
        type    : MOUNT_PRESENTATION, 
        payload : { impressAPI } 
    });
};

export const goToStep = (stepNumber)=> (dispatch,getState) => {
    getState().presentation.impressAPI.goto(stepNumber);    
    dispatch(
    {
        type    : GO_TO_STEP,
        payload : { stepNumber }
    }
)};

export const enterStop = (stepNumber)=> ({
    type : ENTER_STEP,
    payload : { stepNumber }
});

export const leaveStep = (stepNumber)=> ({
    type : LEAVE_STEP,
    payload : { stepNumber }
});