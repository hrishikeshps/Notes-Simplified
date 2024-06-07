import { useMemo, useState } from "react";
import { Button, Card, Col, Form, FormGroup, Row, Stack } from "react-bootstrap";
import { Link } from "react-router-dom";
import ReactSelect from 'react-select';
import { Note, Tag } from "../App";
import styles from '../assets/styles/NoteList.module.css'

type NoteListProps = {
    availableTags: Tag[]
    notes: Note[]
}

type SimplifiedNote = {
    tags: Tag[]
    title: string
    id: string
}

export function NoteList({availableTags, notes}: NoteListProps ) {
    const [selectedTags, setSelectedTags] = useState<Tag[]>([])
    const [title, setTitle] = useState<string>('')

    const filteredNotes  = useMemo(() => {
        return notes.filter((note: any) => {
            return (
                title === '' || note.title.toLowerCase().includes(title.toLowerCase())) && 
                (selectedTags.length === 0 || 
                    selectedTags.every(tag => 
                        note.tags.some(noteTag => noteTag.id === tag.id)
                    ))
        })
    }, [title, selectedTags, notes])
    
    return (
        <>
            <Row className="align-items-center mb-5">
                <Col><h1>List</h1></Col>
                <Col xs="auto">
                    <Stack gap={2} direction="horizontal">
                        <Link to="/new">
                            <Button variant="primary">Create</Button>
                        </Link>
                        <Link to="/">
                            <Button variant="outline-secondary">Edit Tags</Button>
                        </Link>
                    </Stack>
                </Col>
            </Row>
            <Form>
                <Row className="mb-4">
                    <Col>
                        <Form.Group controlId="title">
                            <Form.Label>Title</Form.Label>
                            <Form.Control type="text" value={title} onChange={e => setTitle(e.target.value)}/>
                        </Form.Group>
                    </Col>
                    <Col>
                        <Form.Group controlId="tags">
                            <Form.Label>Tags</Form.Label>
                            <ReactSelect
                                options={availableTags.map(tag => {
                                    return { label: tag.label, value: tag.id }
                                })}
                                value={selectedTags.map(tag => {
                                    return { label: tag.label, value: tag.id }
                                })}
                                onChange={tags => {
                                    setSelectedTags(tags.map(tag => {
                                        return { label: tag.label, id: tag.value }
                                    }))
                                }}
                                isMulti
                            />
                        </Form.Group>
                    </Col>
                </Row>
            </Form>
            <Row xs={1} sm={2} lg={3} xl={4} className="g-3">
                {filteredNotes.map(note => (
                    <Col key={note.id}>
                        <NoteCard id={note.id} title={note.title} tags={note.tags}/>
                    </Col>
                ))}
            </Row>
        </>
    )

}

function NoteCard({id, title, tags}: SimplifiedNote) {
    return <Card as={Link} to={`/${id}`} className={`h-100 text-reset text-decoration-none ${styles.card}`}>
        <Card.Body>

        </Card.Body>
    </Card>
}