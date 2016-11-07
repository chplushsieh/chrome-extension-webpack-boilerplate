import {createStore} from 'redux';
import rootReducer from './background/reducers';

import {wrapStore} from 'react-chrome-redux';

const store = createStore(rootReducer, {});

wrapStore(store, {
  portName: 'example'
});
