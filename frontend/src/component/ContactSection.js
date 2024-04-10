import React from "react";
import { contactPageData } from "../../utils/contactPageData";
import ContactItem from "./ContactItem";

export default function ContactSection() {
  return (
    <>
      <div className="row d-flex mb-5 contact-info">
        {contactPageData.map((contact, index) => (
          <ContactItem
            key={index}
            title={contact.title}
            content={contact.content}
          />
        ))}
      </div>
    </>
  );
}
