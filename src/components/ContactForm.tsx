import { useRef } from "react";
import emailjs from "@emailjs/browser";

const ContactForm = () => {
  const nameRef = useRef<HTMLInputElement>(null);
  const emailRef = useRef<HTMLInputElement>(null);
  const subjectRef = useRef<HTMLInputElement>(null);
  const messageRef = useRef<HTMLTextAreaElement>(null);

  const nameValue = nameRef.current ? nameRef.current.value : "";
  const emailValue = emailRef.current ? emailRef.current.value : "";
  const subjectValue = subjectRef.current ? subjectRef.current.value : "";
  const messageValue = messageRef.current ? messageRef.current.value : "";

  const validMessage =
    nameValue !== "" &&
    emailValue !== "" &&
    subjectValue !== "" &&
    messageValue !== "";

  const sendEmail = (e: any) => {
    e.preventDefault();
    if (validMessage) {
      emailjs
        .send(
          "service_smtwx1b",
          "template_t6f7uu8",
          {
            to_name: "Metilda",
            name: nameRef.current ? nameRef.current.value : "",
            email: emailRef.current ? emailRef.current.value : "",
            subject: subjectRef.current ? subjectRef.current.value : "",
            message: messageRef.current ? messageRef.current.value : "",
          },
          "wZYAcDsnHgeU_Wano"
        )
        .then(
          (result) => {
            console.log(result.text);
            alert("SUCCESS!");
          },
          (error) => {
            console.log(error.text);
            alert("FAILED...");
          }
        );
    }
  };

  return (
    <div className="w-full flex items-center justify-center py-10">
      <form
        onSubmit={sendEmail}
        className="text-gray-400 bg-gray-800 p-8 rounded-lg opacity-60 flex flex-col items-start gap-4 animate-appear"
      >
        <div className="flex items-center justify-between w-full">
          <label htmlFor="name" className="pr-4">
            Name
          </label>
          <input
            ref={nameRef}
            type="name"
            name="name"
            className="bg-black p-2 rounded-md opacity-40 text-gray-400 w-[70%]"
            id="name"
          />
        </div>

        {/* <!-- email --> */}
        <div className="flex items-center justify-between w-full">
          <label htmlFor="email" className="pr-4">
            Email
          </label>
          <input
            className="bg-black p-2 rounded-md opacity-40 text-gray-400 w-[70%]"
            ref={emailRef}
            type="email"
            name="email"
            id="email"
          />
        </div>

        {/* <!-- subject --> */}
        <div className="flex items-center justify-between w-full">
          <label htmlFor="subject" className="pr-4">
            Subject
          </label>
          <input
            ref={subjectRef}
            type="text"
            name="subject"
            className="bg-black p-2 rounded-md opacity-40 text-gray-400 w-[70%]"
            id="subject"
          />
        </div>

        <div className="flex items-center justify-between w-full">
          <label htmlFor="message" className="pr-4">
            Message
          </label>
          <textarea
            ref={messageRef}
            className="bg-black p-2 rounded-md opacity-40 text-gray-400 w-[70%]"
            id="message"
          ></textarea>
        </div>

        <button
          disabled={!validMessage}
          type="submit"
          className="bg-gray-900 p-2 rounded-md w-full"
        >
          Submit
        </button>
      </form>
    </div>
  );
};
export default ContactForm;
