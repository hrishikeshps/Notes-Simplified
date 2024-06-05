import { Button, Col, Row, Stack } from "react-bootstrap";
import { Link } from "react-router-dom";

export function NoteList() {
    return (
        <>
            <Row>
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
        </>
    )

}