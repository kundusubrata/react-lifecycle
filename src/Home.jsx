import React from 'react'
import { useEffect } from 'react';

const mouseOverFunc = (e) => {
            console.log(e.clientX);
            console.log(e.clientY);
        };
    

// const Home = () => {

//     useEffect(() => {
//       document.addEventListener("mousemove",mouseOverFunc);
//       return () => {
//         document.removeEventListener("mousemove",mouseOverFunc);
//       };
//     }, []);
//   return (
//     <div>Home</div>
//   )
// }


class Home extends React.Component {
    constructor(props) {
        super(props);
    };
    componentDidMount() {
        document.addEventListener("mousemove",mouseOverFunc);
    }
    componentWillUnmount() {
        document.removeEventListener("mousemove",mouseOverFunc);
    }
    render () {
        return <div>Home</div>
    }
}

export default Home