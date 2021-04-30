import React from "react";
import "./index.css";
import Header from "./components/header";

class App extends React.Component {
    render() {
        return (
            <React.Fragment>
                <div className="main">
                    <div>
                        <Header />
                    </div>

                    <div className="center">
                        <h2>Home</h2>
                    </div>
                </div>
            </React.Fragment>
        );
    }
}
export default App;
