import * as React from 'react';
import { Card } from 'react-bootstrap';
import { Note } from '../models/note.model'
import { Button } from 'react-bootstrap';
interface INotesProps {
    note: Note,
    handleDelete: (id: string) => void

}

const Notes: React.FunctionComponent<INotesProps> = ({note, handleDelete}) => {
  return ( 
    <div className="mb-3">
        <Card style={{backgroundColor: note.color}}>
            <Card.Body>
            <Card.Title>{note.title}</Card.Title>
            <Card.Text>{note.text}</Card.Text>
            <Card.Subtitle className="text-muted">{note.date}</Card.Subtitle>
            <Button className="mb-3" variant="danger" onClick={ () => handleDelete(note.id)}>Delete</Button>
            </Card.Body>
        </Card>
        </div>
  );
};

export default Notes;
