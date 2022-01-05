import React from "react";
import ReactDom from "react-dom";
import './index.css'

// Component
// State
// Lifecycle
// UI

class App extends React.Component {
    render() {
        return (
        <div>
            Hello World!
        </div>
        )
    }
}

ReactDOM.render(<App />, document.getElementById('root'))