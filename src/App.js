import React from 'react';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import CircularProgress from 'material-ui/CircularProgress';
import getUserInfo from './gitSearch'
class App extends React.Component {
  getChildContext() {
    return {muiTheme: getMuiTheme()};
  }

  constructor(){
    super();
    this.state ={
      info : {},
      wait:true
    }
  }
  componentDidMount(){
    getUserInfo().then((data) => {
     this.setState({
       info:data.gitInfo,
       wait:false
     })
   });
  }
  render () {
    return(
           <div>
            {
                this.state.wait ? <CircularProgress /> :
              <div>
                {this.state.info.login},
                {this.state.info.name},
                {this.state.info.bio},
                {this.state.info.blog},
                <img src = {this.state.info.avatar_url} />
              </div>
              }
           </div>
    )
  }
}
App.childContextTypes = {
  muiTheme: React.PropTypes.object.isRequired,
};

export default App;
