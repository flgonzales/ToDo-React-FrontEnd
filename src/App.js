import React from 'react';
import TodoList from './TodoList';
import ReactDOM from 'react-dom';
import lightBaseTheme from 'material-ui/styles/baseThemes/lightBaseTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import MyAwesomeReactComponent from './MyAwesomeReactComponent';


class App extends React.Component {
    render() {
        return (
          <MuiThemeProvider muiTheme={getMuiTheme(lightBaseTheme)}>
            <TodoList/>
          </MuiThemeProvider>
        );
    }
}

export default App;
