/**
 * @module Store
 */
export default class Store {

    /**
     *
     * @param {array} subscribers - list of elements subscribed for Store's changes
     */
    constructor(subscribers) {
        this.state = Boolean(localStorage.getItem('state')) ? localStorage.getItem('state') : {};
        this.subscribers = subscribers;
    }

    /**
     *
     * @param {object} newState - stored data
     */
    changeState (newState) {
        this.state = newState;
        localStorage.setItem('state', JSON.stringify(this.state));
    };

    /**
     *
     * @param {string} actionType
     * @param data
     */
    onAction ( actionType, data,  ) {

        let stored = {};
        stored[actionType] = data;

        this.changeState(stored);
        this.onChange(actionType, data)
    };

    /**
     *
     * @param {string} actionType - event type
     * @param change - data passed to subscriber
     */
    onChange (actionType, change) {
        let e = new CustomEvent(actionType, { 'detail': change });
        this.subscribers.forEach((sub) => {
            sub.dispatchEvent(e);
        });
    }

}
