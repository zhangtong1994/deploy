import React from 'react';
import axios from 'axios';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import CircularProgress from 'material-ui/CircularProgress';

class App extends React.Component {
  getChildContext() {
    return {muiTheme: getMuiTheme()};
  }
  getUserInfo(){
    return axios.get('https://api.github.com/users/zhangtong1994')
           .then((res) =>(
             {gitInfo:res.data}
           ))
  }
  constructor(){
    super();
    this.state ={
      info : {},
      wait:true
    }
  }
  componentDidMount(){
   this.getUserInfo().then((data) => {
     console.log(data.gitInfo)
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
