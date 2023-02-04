import logo from './logo.svg';
import { findLongestWord, occurence, totaleleve } from './Ecmascript/function.js'
// import occurence from './Ecmascript/function';
import './App.css';

const tab = ['hello', 'world', 'yaay', 'Tonight', 'lucky', 'className'];
const input = [
    ["a", "b", "c"],
    ["c", "d", "f"],
    ["d", "f", "g"]
]
let students = [
    { name: 'john', id: 123, marks: 98 },
    { name: 'Baba', id: 101, marks: 23 },
    { name: 'John', id: 200, marks: 45 },
    { name: 'wick', id: 115, marks: 75 },
]

function App() {
    // return ( <
    //     div className = "App" >
    //     <
    //     header className = "App-header" >
    //     <
    //     img src = { logo }
    //     className = "App-logo"
    //     alt = "logo" / >
    //     <
    //     p >
    //     Edit < code > src / App.js < /code> and save to reload. </p > < a className = "App-link"
    //     href = "https://reactjs.org"
    //     target = "_blank"
    //     rel = "noopener noreferrer" >
    //     Learn React < /a> </header >
    //     <
    //     /div>
    // );
    return (
        // findLongestWord(tab),
        // occurence(input)
        totaleleve(students)
    )
}

export default App;