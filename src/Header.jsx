import React from 'react' ;
import './App.css';
import logo from './Images/b4.png';
// import EmojiObjectsIcon from '@material-ui/icons/EmojiObjects';
import NoteAddIcon from '@material-ui/icons/NoteAdd';

const Header = () => {
  return (
    <>
    <div className="header">
        {/* <img alt="logo" src={ logo }  width='80' height='100' /> */}
        <NoteAddIcon fontSize='Large' />
        <span/>
        <h1 > MKM Keep </h1>
    </div>
    </>
  );
}

export default Header;