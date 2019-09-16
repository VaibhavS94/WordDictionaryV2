import React, { Component } from 'react';
import { Container, Form, FormGroup, Button,Input,Label, Table} from 'reactstrap';
import AppNav from './AppNav';

class Home extends Component {
    constructor(props){
        super(props);
        this.state = { 
            isLoading: true,
            file: '',
            msg: '',
            dictionary: []
        }

        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

     async componentDidMount(){
        const res = await fetch(`/api/dictionary`);
        const result = await res.json();
        this.setState({
            dictionary: result,
            isLoading: false
        })
        
        
     }

     async handleSubmit(event){
         event.preventDefault();

         let data = new FormData();
         data.append('file',this.state.file);

         const response = await fetch(`/api/upload`,{
             method: "POST",
             body: data
         }).then(response=>{
             this.setState({
              msg: "File Uploaded Successfully"
             });
         }).catch(err=>this.setState({error: err}));

         const res = await fetch(`/api/dictionary`);
         const result = await res.json();
         this.setState({
             dictionary: result
         });
     }

     handleChange(event){
         this.setState({
             file: event.target.files[0],
             msg: ''
         })
     }

    render() { 
        const {isLoading,msg,dictionary} = this.state;
        if(isLoading){
            return(<div><h2>Shabdon ka pravah ho rha hai....</h2></div>);
        }

        let rows = dictionary.map(res =>
            <tr key={res.id}>
                <td>{res.id}</td>
                <td>{res.word}</td>
            </tr>
        );  

        return ( 

            
            <div>
                <AppNav/>
                <h1 class="text-center">ShabdKosh</h1>
                <br/>
                <Container>
                <Form onSubmit={this.handleSubmit}>
                    <FormGroup>
                        <Label for="title">Upload Your file(.txt):</Label>
                        <Input type="file" name="file" id="file" onChange={this.handleChange}/>
                    </FormGroup>
                    <FormGroup>
                        <Button color="primary" type="submit">Upload</Button>
                    </FormGroup>    
                </Form>
                </Container>
                <h2>{msg}</h2>
                <br/><br/>
            <Container>
                <h3>Dictionary</h3>
                <Table className="mt-4">
                    <thead>
                        <tr>
                            <th width="30%">ID</th>
                            <th width="20%">Word</th>
                            
                        </tr>
                    </thead>
                    <tbody>
                        {rows}
                    </tbody>
                </Table>
            </Container>
            </div>
         );
    }
}
 
export default Home;