import React , { useState } from 'react' ;
import './App.css';
import Header from './Header' ;
import Footer from './Footer' ;
import CreateN from './CreateN' ;
import Note from './Note';

const App = () => {
  const [ da, setDa ] = useState([]);
  const addNote = (note) => {
    // alert(note.content);
    // const { title, content } = note;
    setDa( (pv) => {
      return [...pv, note] ;
    });
    // console.log(note);
  }
  const delNote = (id) => {
    // alert(id);
    // console.log(da[id]);
    setDa( (oldV) => {
      return oldV.filter( (cv, indx) => {
        return indx !== id;
      } );
    } );
  }



  
  return (
    <>
    <Header/>
    <CreateN passNote={ addNote } />
    {
      da.map((val, index) => {
        return (<Note
          key = {index} 
          id = {index} 
          title = {val.title} 
          content = {val.content}
          del = { delNote }
        />);
      })
    }
    <Footer/>
    </>
  );
}

export default App;
