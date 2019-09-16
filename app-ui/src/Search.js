import React, { Component } from 'react';
import { Container, Form, FormGroup, Button,Input,Label} from 'reactstrap';
import AppNav from './AppNav';

class Search extends Component {
    constructor(props){
        super(props);
        this.state = { 
            isLoading : true,
            word: "",
            result:"Click Submit to Search"
        }

        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event){
        const target = event.target;
        const value = target.value;
        //const name = target.name;

        this.setState({
            word: value,
            result: 'Click Submit to Search'
        })

        //console.log(this.state.word);
    }

    async handleSubmit(event){
        event.preventDefault();

        const {word} = this.state;

        console.log(word);
        const response = await fetch(`/api/search/${word}`,{
            method: "GET",
            headers: {
                'Accept' : 'application/json',
                'Content-Type' : 'application/json'
            }
        });

        const res = await response.json();

        if (res.word == null){
            this.setState({
                result: 'Word Not Found'
            });
        }else{
            this.setState({
                result: "Found your word "+res.word
            })
        }
        
    }

     async componentDidMount(){
         this.setState({
             isLoading: false
         })
     }

     
    render() { 
        const {isLoading} = this.state;
        const {result} = this.state;
        
        if(isLoading){
            return(<div><h3>ShabdKhoj is setting up....</h3></div>);
        }

        return ( 
            <div>
                <AppNav/>
                <h1 class="text-center">ShabdKhoj</h1>
                <br/>
                <Container>
                <Form onSubmit={this.handleSubmit}>
                    <FormGroup>
                        <Label for="title">Enter word to search dictionary:</Label>
                        <Input type="text" name="word" id="word" onChange={this.handleChange}/>
                    </FormGroup>
                    <FormGroup>
                        <Button color="primary" type="submit">Submit</Button>
                    </FormGroup>   
                </Form>
                <h2>{result}</h2>
                </Container>
            </div>
         );
    }
}
 
export default Search;