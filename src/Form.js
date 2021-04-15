import React, {Component} from 'react';

class Form extends Component {

    state = {
        name: '',
        job: ''
    }

    handleChange = (e) => {
        
        if(e.target.name === 'name'){
            this.setState({name: e.target.value}) 
            console.log(e.target.value)
        }else if(e.target.name === 'job'){
            this.setState({job: e.target.value})
            console.log(e.target.value)
        }

    }

    handleSubmit = (e) => {
        e.preventDefault()
         this.props.updateNames({...this.state})
    }
    
    render() {
        console.log(this.state)
        return (

            <div>
            <form>
                <label htmlFor="name">Name</label>
                <input 
                    type="text" 
                    name="name" 
                    id="name"
                    onChange={this.handleChange}
                     />
                <label htmlFor="job">Job</label>
                <input 
                    type="text" 
                    name="job" 
                    id="job"
                    onChange={this.handleChange}
                     />
                <button onClick={this.handleSubmit} type="submit">
                    Submit
                </button>
                </form>

                <h2>Name: {this.state.name}</h2>
                <h2>Job: {this.state.job}</h2>

                </div>



            

            

           
        );
    }
}

export default Form;
