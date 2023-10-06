import { useState } from "react";
import { Card, Button, Form, Row, Col } from "react-bootstrap";
import { ChangeEvent } from "react";

const myNFTs = [
    {
        name: "nft 1",
        descripiton: "test tes testests",
        img: "/images/examplenft.jpg"
    },
    {
        name: "nft 2",
        descripiton: "lorem ipsum madand doah daoshdas",
        img: "/images/examplenft.jpg"
    },{
        name: "nft 3",
        descripiton: "dashdh dasasdsd as ds  as  vd sv wev wvevwvewvew vwv ev ewv v",
        img: "/images/examplenft.jpg"
    },{
        name: "nft 3",
        descripiton: "dashdh dasasdsd as ds  as  vd sv wev wvevwvewvew vwv ev ewv v",
        img: "/images/examplenft.jpg"
    },{
        name: "nft 3",
        descripiton: "dashdh dasasdsd as ds  as  vd sv wev wvevwvewvew vwv ev ewv v",
        img: "/images/examplenft.jpg"
    },{
        name: "nft 3",
        descripiton: "dashdh dasasdsd as ds  as  vd sv wev wvevwvewvew vwv ev ewv v",
        img: "/images/examplenft.jpg"
    },
]

function NftPage() {
    const [loadedImage, setLoadedImage] = useState<string | null>(null);

    function handleFileInputChange(event: ChangeEvent<HTMLInputElement>) {
        const selectedFile = event.target.files?.[0];
        console.log(selectedFile);
        
        if (selectedFile) {
            const reader = new FileReader();
            reader.onload = function (event) {
                const image = event.target?.result as string;
                setLoadedImage(image);
            };
            reader.readAsDataURL(selectedFile);
            return;
        }
        setLoadedImage(null);
    }

    return (
        <Row style={{margin: "62px", width: "calc(100vw - 400px)", overflowY: "auto"}}>
            {/* <Col xs={12} sm={6} md={3}>
            <Card style={{height: "100%"}}>
                <Card.Img variant="top" src={loadedImage ?? "/images/examplenft.jpg"} />
                <Card.Body>
                    <Card.Title>Создание NFT</Card.Title>
                    <Form.Group className="mb-3">
                        <Form.Label id="namenft">Название</Form.Label>
                        <Form.Control
                        placeholder="My NFT"
                        aria-label="name"
                        aria-describedby="namenft"
                        />
                    </Form.Group>
                    <Form.Group>
                        <Form.Label>Описание</Form.Label>
                        <Form.Control as="textarea" aria-label="Описание" placeholder="Something about my NFT..."/>
                    </Form.Group>
                    <Form.Group controlId="formFile" className="mb-3">
                        <Form.Label>Изображение</Form.Label>
                        <Form.Control type="file" accept=".jpg,.jpeg,.png" onChange={handleFileInputChange}/>
                    </Form.Group>
                </Card.Body>
                <Card.Footer>
                    <Button variant="primary">Создать</Button>
                </Card.Footer>
            </Card>
            </Col> */}

            {myNFTs.map((nft) => (
                <Col xs={12} sm={6} md={3} style={{marginBottom: "15px"}}>
                <Card style={{height: "100%"}}>
                <Card.Img variant="top" src={nft.img} />
                <Card.Body>
                    <Card.Title>{nft.name}</Card.Title>
                    <Form.Group className="mb-3">
                        <Form.Label id="namenft">{nft.descripiton}</Form.Label>
                    </Form.Group>
                </Card.Body>
                <Card.Footer>
                    <Button variant="primary">Продать</Button>
                </Card.Footer>
            </Card>
                </Col>
               
            ))}
        </Row>
    )
}

export default NftPage;