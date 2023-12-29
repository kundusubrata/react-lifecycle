import React from 'react';
import './App.css';
import Name from './Name';
import {BrowserRouter as Router,Routes,Route,Link} from 'react-router-dom';
import Home from './Home';
import About from './About';

//componentWillMount  ---> This methode has called before render. but now it is removed.

//componentDidMount
//shouldComponentUpdate   ---> if we set this data false then it will block to update anything in componentDidUpdate
//componentDidUpdate  ---> when some data will update then it will rerender then call this function
//componentWillUnmount  ---> when we want to remove anything then we call this function, we will see in case of eventListener

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      count: 0,
    };

    this.increment = this.increment.bind(this)
  }

  // componentDidMount() {     // it is equivalent to useEffect you can you useEffect instead of this.
  //   // console.log("Called");
  //   setTimeout(() => {
  //     console.log("fetched");  
  //   }, 2000);
  // }


  componentDidMount() {    
      console.log("fetched");  
  }
  
  shouldComponentUpdate(){
    // return false;  // ----------> You will see nothing is updating.
    return true;
  }

  componentDidUpdate(){
    console.log("Updated");
  }

  componentWillUnmount() {
    console.log("Unmount");
  }

  increment(){
    this.setState({
      count: this.state.count + 1,
    })
    console.log(this.state.count);
  }

  render() {
    return ( 
      // <div className='App'>
      //   <Name name="Krishna"/>
      //   <p>{this.state.count}</p>
      //   <button onClick={this.increment}>AdD</button>
      // </div>

      <Router>
        <nav>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        </nav>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/about' element={<About/>}/>
        </Routes>
      </Router>
    );
  }
}

export default App;
