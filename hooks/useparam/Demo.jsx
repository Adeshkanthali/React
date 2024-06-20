import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import AccessingParameters from './AccessingPrameters';

function Demo() {

    return (

        <Router>

            <Switch>

                <Route path="/users/:userId" component={AccessingParameters} />

            </Switch>

        </Router>

    );
}

export default Demo;
