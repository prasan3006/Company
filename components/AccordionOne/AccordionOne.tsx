import React from "react";
import { Accordion, Card, Button } from "react-bootstrap";

const AccordionOne = () => {
  return (
    <Accordion className="rn-accordion-style" defaultActiveKey="0">
      <Card>
        <Card.Header>
          <Accordion.Toggle as={Button} variant="link" eventKey="0">
            What is your pricing?
          </Accordion.Toggle>
        </Card.Header>
        <Accordion.Collapse eventKey="0">
          <Card.Body>
            We have several different pricing plans to suit your needs. Kindly
            call us and after understanding your needs, we will quote the most
            effective price plan.
          </Card.Body>
        </Accordion.Collapse>
      </Card>
      <Card>
        <Card.Header>
          <Accordion.Toggle as={Button} variant="link" eventKey="1">
            I am a Global brand trying to enter Indian market. Will you help?
          </Accordion.Toggle>
        </Card.Header>
        <Accordion.Collapse eventKey="1">
          <Card.Body>
            Yes. We have a great knowledge about the Indian market and the price
            sensitivity and we can help you in your endeavors.
          </Card.Body>
        </Accordion.Collapse>
      </Card>
      <Card>
        <Card.Header>
          <Accordion.Toggle as={Button} variant="link" eventKey="2">
            I am a manufacturer currently selling to wholesale buyers and
            distributors, will my existing business get affected?
          </Accordion.Toggle>
        </Card.Header>
        <Accordion.Collapse eventKey="2">
          <Card.Body>
            Absolutely not. We have several different proven workarounds for you
            to go Direct-To-Consumers without compromising your existing
            business.
          </Card.Body>
        </Accordion.Collapse>
      </Card>
      <Card>
        <Card.Header>
          <Accordion.Toggle as={Button} variant="link" eventKey="3">
            How do we collaborate?
          </Accordion.Toggle>
        </Card.Header>
        <Accordion.Collapse eventKey="3">
          <Card.Body>
            We typically collaborate for a minimum of six months to study your
            brand and then start creating strategies and implementation. Nothing
            would excite us more than having to work with you lifelong!
          </Card.Body>
        </Accordion.Collapse>
      </Card>
      <Card>
        <Card.Header>
          <Accordion.Toggle as={Button} variant="link" eventKey="4">
            What is Direct to Consumers (D2C) and will it grow?
          </Accordion.Toggle>
        </Card.Header>
        <Accordion.Collapse eventKey="4">
          <Card.Body>
            D2C is the future of shopping as there is a pivotal shift in the
            mindset of consumers to have a meaning (story) in their purchase.
            India is largely an unbranded market (80%) and this is the right
            chance for you to build your brand. There are several advantages of
            D2C wherein you can create a win-win situation for both you and your
            consumer. You can focus on creating innovations that matter.
          </Card.Body>
        </Accordion.Collapse>
      </Card>
    </Accordion>
  );
};
export default AccordionOne;
