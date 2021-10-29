import React, { useState, useEffect } from "react";
import { Container, Row } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import pdf from "../../resources/HarshadaJog.pdf";
import { AiOutlineDownload } from "react-icons/ai";
import { Document, Page, pdfjs } from "react-pdf";
import "react-pdf/dist/esm/Page/AnnotationLayer.css";
import './Resume.style.scss';
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;

function Resume() {
    const [width, setWidth] = useState(1200);

    const link = "https://raw.githubusercontent.com/harshadajog/portfolio-new/master/src/resources/HarshadaJog.pdf";

    useEffect(() => {
        setWidth(window.innerWidth);
    }, []);

    return (
        <section>
          <Container fluid className="resume-section">
            <Row style={{ justifyContent: "center", position: "relative" }}>
              <Button variant="primary" href={pdf} target="_blank" style={{width: "10.0rem"}}>
                <AiOutlineDownload />
                &nbsp;Download CV
              </Button>
            </Row>
    
            <Row className="resume" style={{ justifyContent: "center", position: "relative" }}>
              <Document file={link}>
                <Page pageNumber={1} scale={width > 786 ? 1.7 : 0.6} style={{ textAlign: "center"}}/>
              </Document>
            </Row>
          </Container>
        </section>
      );
}

export default Resume;