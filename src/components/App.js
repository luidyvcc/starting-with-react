import React, { Component } from "react";
import Post from "./Post";

class App extends Component {

    render() {
        return (
            <>
                <h1>Hello World!</h1>
                <Post title="Aprendendo ReactJS com a RocketSeat" />
                <Post title="reactJS é demais!" />
                <Post title="Em breve mais vídeos de ReactJS" />
            </>
        );
    }

}

export default App;