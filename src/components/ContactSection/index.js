const ContactSection = () => (
  <section
    id="contact"
    className="bg-white p-8 md:p-16 flex flex-col items-center"
  >
    <h1 className="font-semibold text-4xl my-4 text-center">
      Have any Questions? Reach out.
    </h1>
    <p className="pt-4 text-gray-600 text-center">
      Send me a message on{" "}
      <a
        className="text-pink-500"
        target="_blank"
        href="https://www.linkedin.com/in/shirisha-methari-a363a8317"
        rel="noreferrer"
      >
        Linkedin
      </a>{" "}
      or you can email me at:{" "}
      <a className="text-pink-500" href="mailto:metharishirisha7@gmail.com">
        metharishirisha7@gmail.com
      </a>
    </p>
  </section>
);

export default ContactSection;
