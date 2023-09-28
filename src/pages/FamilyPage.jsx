import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';
import { useState } from 'react';


function FamilyPage() {

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const familyData = [
        { id: 1, title: "ERKEK SKATE BOLD AYAKKABI", price: "2.699,00 TL", src: "https://st-vans.mncdn.com/mnresize/420/420/Content/media/ProductImg/original/638294881230517947.jpg" },
        { id: 2, title: "SKKATE AUTHENTIC LEATHER AYAKKABI", price: "2.399,00 TL", src: "https://st-vans.mncdn.com/mnresize/420/420/Content/media/ProductImg/original/638294875955751718.jpg" },
        { id: 3, title: "ZAHBA AYAKKABI", price: "3.299,00 TL", src: "https://st-vans.mncdn.com/mnresize/420/420/Content/media/ProductImg/original/638265496192795380.jpg" },
        { id: 4, title: "SKATE SK8-HI AYAKKABI", price: "2.849,00 TL", src: "https://st-vans.mncdn.com/mnresize/420/420/Content/media/ProductImg/original/638261192703135541.jpg" },
        { id: 5, title: "BREANA GEERING ERA AYAKKABI", price: "2.399,00 TL", src: "https://st-vans.mncdn.com/mnresize/420/420/Content/media/ProductImg/original/638261192115303492.jpg" },
        { id: 6, title: "ALOHA SLIP-ON AYAKKABI", price: "2.399,00 TL", src: "https://st-vans.mncdn.com/mnresize/420/420/Content/media/ProductImg/original/638261192269057981.jpg" },
        { id: 7, title: "THE LİZZİE AYAKKABI", price: "2.849,00 TL", src: "https://st-vans.mncdn.com/mnresize/420/420/Content/media/ProductImg/original/638261191403735603.jpg" },
        { id: 8, title: "JUSTIN HENRY WAYVEE AYAKKABI", price: "2.999,00 TL", src: "https://st-vans.mncdn.com/mnresize/420/420/Content/media/ProductImg/original/638261185744936503.jpg" },
    ]

    const [items, setItems] = useState({ title: "", price: "", src: "" })
    const [data, setData] = useState(familyData)

    const handleChange = (e) => {
        setItems({ ...items, [e.target.name]: e.target.value })
    }

    const handleSubmit = (e) => {
        e.preventDefault()

        setData([...data, {
            id: Math.max(...data.map((e) => e.id)) + 1,
            title: items.title,
            price: items.price,
            src: items.src
        }])

        setItems({ title: "", price: "", src: "" })

        handleClose()

    }


    const handleCancel = () => {
        setItems({ title: "", price: "", src: "" })
        handleClose()
    }


    const Delete = (id) => {
        if (data.length === 1) {
            setData([]);
            window.location.reload();
        } else {
            setData(data.filter((e) => e.id !== id));
        }
    }


    return (
        <div className='row px-5 py-3' style={{ backgroundColor: '#f1f2ed' }}>
            {data.map((e) => (
                <Card className='col-lg-3 col-md-4 col-sm-6 g-2'>
                    <Card.Img variant="top" src={e.src} />
                    <Card.Body className='d-flex flex-column align-items-center justify-content-between'>
                        <Card.Title className='text-center fw-light'>{e.title}</Card.Title>
                        <Card.Text className='text-center fw-bold'>{e.price}</Card.Text>
                        <Button className='w-50' variant="danger" onClick={() => Delete(e.id)}>Ürünü Sil</Button>
                        <Button variant="primary" onClick={handleShow}>
                            Ürün Ekle
                        </Button>
                    </Card.Body>
                </Card>
            ))}

            <Modal show={show} onHide={handleCancel}>
                <Modal.Header closeButton>
                    <Modal.Title>Ürün Özelliklerini Girin</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form onSubmit={handleSubmit}>
                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                            <Form.Label>Marka - Model Girin</Form.Label>
                            <Form.Control
                                type="text"
                                name="title" value={items.title} onChange={handleChange}
                                autoFocus
                            />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                            <Form.Label>Fiyatı Girin</Form.Label>
                            <Form.Control
                                type="text"
                                name="price" value={items.price} onChange={handleChange}
                            />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                            <Form.Label>Resim Url Girin</Form.Label>
                            <Form.Control
                                type="text"
                                name="src" value={items.src} onChange={handleChange}
                            />
                        </Form.Group>
                    </Form>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleCancel}>
                        İptal
                    </Button>
                    <Button type='submit' variant="primary" onClick={handleSubmit}>
                        Ürün Ekle
                    </Button>
                </Modal.Footer>
            </Modal>

        </div>

    );
}

export default FamilyPage;