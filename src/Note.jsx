import React from 'react' ;
import './App.css';
import DeleteIcon from '@material-ui/icons/Delete';
import Button from '@material-ui/core/Button';

const Note = (props) => {
  const delD= () => {
    props.del(props.id) ;
  }
  return (
    <>
    <div className="d3">
        <h2> {props.title} </h2>
        <br/>
        <p> { props.content } </p>
        <Button className="butt" color="secondary" onClick={ delD }>
        <DeleteIcon/></Button>
    </div>
    </>
  );
}

export default Note;