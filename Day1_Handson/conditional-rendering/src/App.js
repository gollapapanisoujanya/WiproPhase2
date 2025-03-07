import logo from './logo.svg';
import './App.css';
import Cond1 from './Cond1';
import Cond2 from './Cond2';
import Product from './Product';
import Student from './Student';

function App() {
  return (
    <div className="App">
      {/* <Cond1/> */}
      {/* <Cond2 isLoggedIn={true}/> */}
      {/* <Product/> */}
      <Student name="krishna" address="brundavan"/>
    </div>
  );
}

export default App;
