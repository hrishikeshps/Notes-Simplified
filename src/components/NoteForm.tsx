import { Col, Form, Row, Stack } from "react-bootstrap";
import CreatableReactSelect from "react-select/creatable";

export function NoteForm() {
    return (
        <Form>
            <Stack gap={5}>
                <Row>
                    <Col>
                        <Form.Group controlId="title">
                            <Form.Label>Title</Form.Label>
                            <Form.Control required />
                        </Form.Group>
                    </Col>
                    <Col>
                        <Form.Group controlId="title">
                            <Form.Label>Tags</Form.Label>
                            <CreatableReactSelect isMulti />
                        </Form.Group>
                    </Col>
                    <Row>
                        <Col>
                            <Form.Group controlId="title">
                                <Form.Label>Note Body</Form.Label>
                                <Form.Control required />
                            </Form.Group>
                        </Col>
                    </Row>

                </Row>
            </Stack>

        </Form>
    )
}