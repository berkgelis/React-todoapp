import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';
import { useState } from 'react';

const skateData = [
    { id: 1, title: "VERSA STANDARD KAPÜŞONLU ÜST", price: "1.879,00 TL", src: "https://st-vans.mncdn.com/mnresize/420/420/Content/media/ProductImg/original/638231823923727915.jpg" },
    { id: 2, title: "ROWLEY CLASSIC AYAKKABI", price: "2.549,00 TL", src: "https://st-vans.mncdn.com/mnresize/420/420/Content/media/ProductImg/original/638294879527352846.jpg" },
    { id: 3, title: "CORDURA HALF CAB 33 DX AYAKKABI", price: "3.149,00 TL", src: "https://st-vans.mncdn.com/mnresize/420/420/Content/media/ProductImg/original/638294879883918860.jpg" },
    { id: 4, title: "ROWLEY CLASSIC AYAKKABI", price: "2.549,00 TL", src: "https://st-vans.mncdn.com/mnresize/420/420/Content/media/ProductImg/original/638294879354850251.jpg" },
    { id: 5, title: "CORDURA OLD SKOOL 36 DX AYAKKABI", price: "2.999,00 TL", src: "https://st-vans.mncdn.com/mnresize/420/420/Content/media/ProductImg/original/638294879697354708.jpg" },
    { id: 6, title: "LIZZIE LOW AYAKKABI", price: "2.549,00 TL", src: "https://st-vans.mncdn.com/mnresize/420/420/Content/media/ProductImg/original/638265496335298614.jpg" },
    { id: 7, title: "OLD SKOOL MTE-2 AYAKKABI", price: "4.469,00 TL", src: "https://st-vans.mncdn.com/mnresize/420/420/Content/media/ProductImg/original/638294878956719350.jpg" },
    { id: 8, title: "SKKATE AUTHENTIC LEATHER AYAKKABI", price: "2.399,00 TL", src: "https://st-vans.mncdn.com/mnresize/420/420/Content/media/ProductImg/original/638294875955751718.jpg" },
]


function SkatePage() {

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const [data, setData] = useState(skateData)
    const [items, setItems] = useState({ title: "", price: "", src: "" })

    const handleChange = (e) => {
        setItems({ ...items, [e.target.name]: e.target.value });
    }

    const handleSubmit = (e) => {
        e.preventDefault()

        setData([...data, {
            id: Math.max(...data.map((e) => e.id)) + 1,
            title: items.title,
            price: items.price,
            src: items.src
        }])
        handleClose()

        setItems({ title: "", price: "", src: "" })
    }

    const Delete = (id) => {
        if (data.length === 1) {
            setData([]);
            window.location.reload();
        } else {
            setData(data.filter((e) => e.id !== id));
        }
    }


    const handleKapat = () => {
        setItems({ title: "", price: "", src: "" })
        handleClose()
    }

    return (
        <div className='row px-5 py-3' style={{ backgroundColor: '#f1f2ed' }}>
            {data.map((e) => (
                <Card key={e.id} className='col-lg-3 col-md-4 col-sm-6 g-2'>
                    <Card.Img variant="top" src={e.src} />
                    <Card.Body className='d-flex flex-column align-items-center justify-content-between'>
                        <Card.Title className='text-center fw-light'>{e.title}</Card.Title>
                        <Card.Text className='text-center fw-bold'>{e.price}</Card.Text>
                        <Button className='w-50' variant="danger" onClick={() => Delete(e.id)}>Sil</Button>
                        <Button variant="primary" onClick={handleShow}>
                            Ürün Ekle
                        </Button>
                    </Card.Body>
                </Card>
            ))}

            <Modal show={show} onHide={handleKapat}>
                <Modal.Header closeButton>
                    <Modal.Title>Ürün Özelliklerini Girin</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form onSubmit={handleSubmit}>
                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                            <Form.Label>Marka - Model Girin</Form.Label>
                            <Form.Control
                                type="text"
                                name='title' value={items.title} onChange={handleChange}
                                autoFocus
                            />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                            <Form.Label>Fiyatı Girin</Form.Label>
                            <Form.Control
                                type="text"
                                name='price' value={items.price} onChange={handleChange}
                            />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                            <Form.Label>Resim Url Girin</Form.Label>
                            <Form.Control
                                type="text"
                                name='src' value={items.src} onChange={handleChange}
                            />
                        </Form.Group>
                    </Form>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleKapat}>
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

export default SkatePage;