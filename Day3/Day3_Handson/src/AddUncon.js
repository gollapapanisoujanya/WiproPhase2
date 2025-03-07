import React, { Component ,createRef} from 'react'

export default class AddUncon extends Component {
    constructor(props) {
        super(props);
        this.num1Ref = createRef();
        this.num2Ref = createRef();
        this.state = { add: 0 };
      }
    
      handleSubmit = (event) => {
        event.preventDefault();
        const num1 = Number(this.num1Ref.current.value) || 0;
        const num2 = Number(this.num2Ref.current.value) || 0;
        this.setState({ add: num1 + num2 });
      };
    
      render() {
        return (
          <div>
            <h2>Add Two Numbers (Uncontrolled)</h2>
            <form onSubmit={this.handleSubmit}>
              <label htmlFor="num1">Enter No1:</label>
              <input type="number" ref={this.num1Ref} placeholder="Enter first number" />
              <br />
              <label htmlFor="num2">Enter No2:</label>
              <input type="number" ref={this.num2Ref} placeholder="Enter second number" />
              <br />
              <button type="submit">Add</button>
            </form>
            <h3>Sum: {this.state.add}</h3>
          </div>
        );
      }
    }