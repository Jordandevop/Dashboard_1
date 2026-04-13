import { useState } from "react";
import { Row, Col, Card, Form, Button } from "react-bootstrap";

const priorityOptions = [
  { value: "low", label: "Basse" },
  { value: "medium", label: "Moyenne" },
  { value: "high", label: "Haute" },
];

export default function TaskDashboard() {
  // const [title, setTitle] = useState('')
  // const [description, setDescription] = useState('')
  // const [priority, setPriority] = useState('')
  // const [done, setDone] = useState(false)

  const [formData, setFormData] = useState({
    title: "",
    description: "",
    priority: "",
    done: false,
  });

  const [errors, setErrors] = useState({
    title:'',
    description:'',
  })

  const validate =() =>{
    const newErrors={title : '', description:''}

    if(!formData.title.trim()) newErrors.title = 'Le titre est obligatoire'
    if(!formData.description.trim()) newErrors.description= 'La desccription est obligatoire'
    setErrors(newErrors)
    return !newErrors.title && !newErrors.description
  }

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const priorityLabel =
    priorityOptions.find((o) => o.value === formData.priority)?.label ??
    "Non définie";

  const handleSubmit = (e) => {
    e.preventDefault();

    if(!validate()) return

    alert(` Données du formulaire :
        Titre : ${formData.title}
        Description: ${formData.description}
        Priorité: ${priorityLabel}
        Statut: ${formData.done ? "Terminée" : "En cours"}
        
        `);

    setFormData({
      title: "",
      description: "",
      priority: "",
      done: false,
    });
  };

  {/* Exercie 4 : Gestions des erreurs : Le titre et la description ne doivent pas être vide. Gérer l'affichage des erreurs aux niveaux des champs
    . Bloquer la validation en cas d'erreur. Créer une variable avec un usestate pour les erreurs
    une fonction pour gerer les erreurs et dans mon submbit je l'appel*/}

  return (
    <>
      {/* 

            - faire un haut de page pour afficher les stats des tâches (Nb total de tâche, tâches terminées, tâches en cours) 
            - En dessous : 2 colonnes
            - à gauche : le formulaire d'ajout
            - à droite l 'affichage

            */}
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
              <Card.Title className="mb-4">Nouvelle tâche</Card.Title>
              <Form onSubmit={handleSubmit}>
                <Form.Group className="mb-3" controlId="title">
                  <Form.Label>Titre</Form.Label>
                  <Form.Control
                    type="text"
                    name="title"
                    placeholder="Saisir un titre"
                    value={formData.title}
                    onChange={handleChange}
                    isInvalid={!!errors.title} 
                  />
                  <Form.Control.Feedback type='invalid'>
                    {errors.title}
                  </Form.Control.Feedback>
                </Form.Group>
                {/* 
                                    EXERCICE 1 : Faire les 3 champs suivants :
                                    - Description (description) : textarea
                                    - Priorité (priority) : select
                                    - Terminée (done) : checkbox
                                    - Avec les useState pour chaque champ

                                
                                */}
                <Form.Group className="mb-3" controlId="description">
                  <Form.Label>Description</Form.Label>
                  <Form.Control
                    as="textarea"
                    rows={4}
                    name="description"
                    placeholder="Saisir une description"
                    value={formData.description}
                    onChange={handleChange}
                    isInvalid={!!errors.description} 
                  />
                  <Form.Control.Feedback type='invalid'>
                    {errors.description}
                  </Form.Control.Feedback>
                </Form.Group>
                <Form.Group className="mb-3" controlId="priority">
                  <Form.Label>Priorité</Form.Label>
                  <Form.Select
                    name="priority"
                    value={formData.priority}
                    onChange={handleChange}
                  >
                    {priorityOptions.map((option) => (
                      <option key={option.value} value={option.value}>
                        {option.label}
                      </option>
                    ))}
                  </Form.Select>
                </Form.Group>
                <Form.Group className="mb-3" controlId="done">
                  <Form.Check
                    type="checkbox"
                    label="Terminée"
                    name="done"
                    checked={formData.done}
                    onChange={handleChange}
                  />
                </Form.Group>
                <div className="mb-3">
                  <Button type="submit" variant="dark" className="w-100">
                    Ajouter une tâche
                  </Button>
                </div>
              </Form>
            </Card.Body>
          </Card>
        </Col>
        <Col lg={8}>
          {/* Affichage des tâches */}
          {/* EXERCICE 2 : Afficher les valeur saisies dans le form. Pour le champ done on affiche : Terminée ou En cours */}
          <Card className="shadow-sm border-0">
            <Card.Body>
              <h2 className="h5">Données du form</h2>
              Titre : {formData.title}
              <br />
              Description : {formData.description}
              <br />
              Priorité : {priorityLabel}
              <br />
              Statut : {formData.done ? "Terminée" : ""}
              <br />
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </>
  );
}
