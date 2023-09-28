import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';
import { useState } from 'react';

const skateData = [
    { id: 1, title: "SÜET SK8-HI TAPERED VR3 AYAKKABI", price: "2.999,00 TL", src: "https://st-vans.mncdn.com/mnresize/420/420/Content/media/ProductImg/original/638261184798839810.jpg" },
    { id: 2, title: "OLD SKOOL TAPERED VR3 AYAKKABI", price: "2.699,00 TL", src: "https://st-vans.mncdn.com/mnresize/420/420/Content/media/ProductImg/original/638261177215661720.jpg" },
    { id: 3, title: "PARKSFIELD DÜĞMELİ GÖMLEK", price: "1.069,00 TL", src: "https://st-vans.mncdn.com/mnresize/420/420/Content/media/ProductImg/original/638231850399291800.jpg" },
    { id: 4, title: "SCOUT UZUN ÇORAP (1 ÇİFT)", price: "309,00 TL", src: "https://st-vans.mncdn.com/mnresize/420/420/Content/media/ProductImg/original/638231847542968794.jpg" },
    { id: 5, title: "RANGE RELAXED TIRMANIŞ PANTOLONU", price: "1.879,00 TL", src: "https://st-vans.mncdn.com/mnresize/420/420/Content/media/ProductImg/original/638231807861675503.jpg" },
    { id: 6, title: "MOORE DÜĞMELİ GÖMLEK", price: "1.459,00 TL", src: "https://st-vans.mncdn.com/mnresize/420/420/Content/media/ProductImg/original/638231807454776252.jpg" },
    { id: 7, title: "ULTRARANGE VR3 AYAKKABI", price: "2.839,00 TL", src: "https://st-vans.mncdn.com/mnresize/420/420/Content/media/ProductImg/original/638135057355847083.jpg" },
    { id: 8, title: "SLIP-ON VR3 AYAKKABI", price: "1.639,00 TL", src: "https://st-vans.mncdn.com/mnresize/420/420/Content/media/ProductImg/original/638135057164751944.jpg" },
]


function SkatePage() {

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const [data, setData] = useState(skateData)

    const Delete = (id) => {
        if (data.length === 1) {
            setData([]);
            window.location.reload();
        } else {
            setData(data.filter((e) => e.id !== id));
        }
    }


    const [form, setForm] = useState({ title: "", price: "", src: "" })


    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value })
        console.log(form);
    }

    const handleSubmit = (e) => {
        setData([...data,
        {
            id: Math.max(...data.map((e) => e.id)) + 1,
            title: form.title,
            price: form.price,
            src: form.src
        }])
        handleKapat()
    }

    const handleKapat = () => {
        setForm({ title: "", price: "", src: "" })
        handleClose()
    }
    console.log(data);

    return (
        <div className='row px-5 py-3' style={{ backgroundColor: '#f1f2ed' }}>
            {data.map((e) => (
                <Card className='col-lg-3 col-md-4 col-sm-6 g-2'>
                    <Card.Img variant="top" src={e.src} />
                    <Card.Body className='d-flex flex-column align-items-center justify-content-between'>
                        <Card.Title className='text-center fw-light'>{e.title}</Card.Title>
                        <Card.Text className='text-center fw-bold'>{e.price}</Card.Text>
                        <Button className='w-50' variant="danger" onClick={() => Delete(e.id)}>
                            Sil
                        </Button>
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
                    <Form>
                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                            <Form.Label>Marka - Model Girin</Form.Label>
                            <Form.Control
                                type="text"
                                name='title' value={form.title} onChange={handleChange}
                                autoFocus
                            />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                            <Form.Label>Fiyatı Girin</Form.Label>
                            <Form.Control
                                type="text"
                                name='price' value={form.price} onChange={handleChange}
                                
                            />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                            <Form.Label>Resim Url Girin</Form.Label>
                            <Form.Control
                                type="text"
                                name='src' value={form.src} onChange={handleChange}
                                
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