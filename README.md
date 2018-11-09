# dumb-flux

#### Usage:

1. Add package to your project

        npm install https://github.com/kauz/dumb-flux.git

2. Import Store & Dispatcher

      ```js
        import Store from 'dumb-flux/lib/Store';
        import Dispatcher from 'dumb-flux/lib/Dispatcher';
      ```
3. Initialize store & dispatcher, register listeners

      ```js
        let emitter = document.getElementById('button');
        let listener = document.querySelector('.state-listener');
        let store = new Store([listener]);
        let dispatcher = new Dispatcher(store);

4. Emit some event

      ```js
        loadEventListeners();


        function loadEventListeners() {
            emitter.addEventListener('click', createNewItem);
            listener.addEventListener('new-item', reRender);
        }
      ```
5. Pass event name & data using dispatch method

      ```js
        function createNewItem() {
            dispatcher.dispatch('new-item', {name: 'Marco'});
        }
      ```
5. Receive your data from your custom event

      ```js
        function reRender(e) {
            e.target.innerText = e.detail.name;
        }
      ```


## TODO

- get store data on app init
