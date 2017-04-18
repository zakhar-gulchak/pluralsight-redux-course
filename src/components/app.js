// This component handles the App template used on every page.
import React, {PropTypes} from 'react';
import HeaderComponent from './common/headerComponent';

class App extends React.Component {
    render() {
        return (
            <div className="container-fluid">
                <HeaderComponent />
                {this.props.children}
            </div>
        );
    }
}

App.propTypes = {
    children: PropTypes.object.isRequired
};

export default App;
