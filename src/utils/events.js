export const eventsToDispatch = {
    MF_APP1_PROFILE_TIMER_CLICKED: 'MF_APP1_PROFILE_TIMER_CLICKED'
};

const dispatchEvent = (event, data) => window.dispatchEvent(new CustomEvent(event, { detail: data }));

export default dispatchEvent;