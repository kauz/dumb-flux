/**
 * @module Dispatcher
 */
export default class Dispatcher {

    /**
     *
     * @param {object} store - an object of Store class
     */
    constructor(store) {
        this.store = store;
    }

    /**
     *
     * @param {string} actionType
     * @param data
     */
    dispatch( actionType, data ) {
            this.store.onAction(actionType, data);
    }

}
