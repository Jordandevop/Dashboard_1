import { useState } from "react";
import { Row, Col, Card, Form } from "react-bootstrap";

export default function TaskDashboard() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [priority, setPriority] = useState("");
  const PRIORITY_OPTIONS = [
    { value: "home", label: "Choissiez votre priorité"},
    { value: "low", label: "Basse" },
    { value: "normale", label: "Normale" },
    { value: "high", label: "Haute" },
  ];
  const [done, setDone] = useState(false);
  return (
    <>
      <div className="mb-4">
        <h1 className="mb-1">Dashboard</h1>
        <p className="text-muted mb-0">Tâches</p>
      </div>

      {/* Stats */}
      <Row className="g-4 mb-4">
        <Col md={4}>
          <Card className="shadow-sm border-0">
            <Card.Body>
              <h2 className="h5">Total</h2>
            </Card.Body>
          </Card>
        </Col>
        <Col md={4}>
          <Card className="shadow-sm border-0">
            <Card.Body>
              <h2 className="h5">Terminées</h2>
            </Card.Body>
          </Card>
        </Col>
        <Col md={4}>
          <Card className="shadow-sm border-0">
            <Card.Body>
              <h2 className="h5">En cours</h2>
            </Card.Body>
          </Card>
        </Col>
      </Row>

      <Row className="g-4 mb-4">
        <Col lg={4}>
          {/* Formulaire d'ajout */}
          <Card className="shadow-sm border-0">
            <Card.Body>
              <Card.Title>Ajouter une tâche</Card.Title>
              <Form>
                <Form.Group className="mb-3" controlId="title">
                  <Form.Label>Titre</Form.Label>
                  <Form.Control
                    type="text"
                    name="title"
                    placeholder="Saisir un titre"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                  />
                </Form.Group>
              </Form>
            </Card.Body>
          </Card>
          {/* Description */}
          <Card className="shadow-sm border-0">
            <Card.Body>
              <Card.Title>Description de la tâche</Card.Title>
              <Form.Group className="mb-3" controlId="description">
                <Form.Label>Description</Form.Label>
                <Form.Control
                  as="textarea"
                  name="description"
                  placeholder="Saisir une description"
                  rows={4}
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                />
              </Form.Group>
            </Card.Body>
          </Card>
          {/* Priority */}
          <Card className="shadow-sm border-0">
            <Card.Body>
              <Card.Title>Priorité de la tâche</Card.Title>
              <Form.Group className="mb-3" controlId="description">
                <Form.Label>Priorité</Form.Label>

                <Form.Select
                  name="priority"
                  value={priority}
                  onChange={(e) => setPriority(e.target.value)}
                >
                  {PRIORITY_OPTIONS.map((option) => (
                    <option key={option.value} value={option.value}>
                      {option.label}
                    </option>
                  ))}
                </Form.Select>
              </Form.Group>
            </Card.Body>
          </Card>

          {/*Terminées */}
          <Card className="shadow-sm border-0">
            <Card.Body>
              <Card.Title> Tâches terminées</Card.Title>
              <Form.Check
                type="checkbox"
                label="Terminée"
                checked={done}
                onChange={(e) => setDone(e.target.checked)}
              />
            </Card.Body>
          </Card>
        </Col>
        <Col lg={8}>{/* Affichage des tâches */}</Col>
      </Row>
    </>
  );
}
