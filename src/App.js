import React, {Component} from 'react';
import styled from 'styled-components';

import RootComponent from './containers/RootComponent';
import ActionsComponent from './containers/ActionsComponent';

import './App.css';

const Svg = styled.svg`
    flex: 1;
    width: 100vw;
`;

class App extends Component {

    render() {
        return (
            <div className="App">
                <header>
                    test
                </header>
                <main>
                    <Svg>
                        <line
                            x1="200" y1="0"
                            x2="200" y2="100%"
                            stroke="black"
                        />
                        <ActionsComponent />
                        <RootComponent />
                        {/*<Library library={this.state.library} />*/}
                        {/*<Components*/}
                            {/*components={this.state.diagram.components}*/}
                        {/*/>*/}
                    </Svg>
                </main>
            </div>
        );
    }
}

export default App;
