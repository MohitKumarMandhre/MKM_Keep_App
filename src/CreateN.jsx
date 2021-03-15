import React , { useState, event } from 'react' ;
import './App.css';
import Button from '@material-ui/core/Button';
import AddIcon from '@material-ui/icons/Add';

const CreateN = (props) => {
    const [note, setNote ] = useState({
        title: "" ,
        content: ""
    });
    
    const Store = (event) => {
        // const name = event.target.name; 
        // const val = event.target.value;

        const { name, value } = event.target ;

        setNote( (pval) => {
            return{
                ...pval ,
                [ name ] : value
            }
        } );

    }

    const addE = () => {
        props.passNote(note) ;
        setNote({
        title: "" ,
        content: ""
    });
    }
  return (
    <>
    <div className="d2">
        <form className="form-group" >
            <input type="text" className="form-control" placeholder="Enter Your Title" 
            name="title" onChange={ Store } value={ note.title } autoComplete="false" />
            <br/>
            <textarea rows="" className="form-control" columns="" onChange={ Store } 
            name="content" value={ note.content } placeholder="Write a Note"></textarea>
            <br/>
            <Button  className="butt" onClick={ addE } variant="contained" 
            color="primary" > <AddIcon/> </Button>
        </form>
        
    </div>
    </>
  );
}

export default CreateN;