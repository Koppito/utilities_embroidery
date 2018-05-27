import React                  from 'react';
import ReactDOM               from 'react-dom';
import App                    from './page/App/App';
import registerServiceWorker  from './registerServiceWorker';
import config                 from './config';

config.initConfig();
ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
