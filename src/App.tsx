import React, { useState } from 'react';
import Header from './components/Header';
import NotesList from './components/NotesList';
import {Note} from './models/note.model'
import './App.css';
import {Col, Container, Row} from 'react-bootstrap';
import CreateNotes from './components/CreateNotes';


function App() {
  const [notes, setNotes] = useState<Note[]>([{
    id : (new Date).toString(),
    title: "Meetings",
    text: "Lorem Ipsum",
    color: "#dfddfdf",
    date: (new Date).toString()
  }]);

  return(
    <>
    <Header />
    <Container className="mt-5">
      <Row>
        <Col>
        <NotesList notes={notes} setNotes={ setNotes }/>
        </Col>
      </Row>
      <Row>
        <Col>
        <CreateNotes notes={notes} setNotes={ setNotes }/>
        </Col>
      </Row>
    </Container>
    </>

  );
}

export default App;