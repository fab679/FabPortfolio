import React, { useRef } from "react";
import backgroun from "../Images/background.jpeg";
import { useForm } from "react-hook-form";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import emailjs from "emailjs-com";

function Contact(props) {
  const form = useRef();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    emailjs
      .sendForm(
        "service_6d3a4hv",
        "template_jqhc5d4",
        form.current,
        "user_SMbDs859uFPKYUD0n0Rn4"
      )
      .then(
        (result) => {
          toast.success("Message Sent Succefully", {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
          });
        },
        (error) => {
          toast.success("Failed Please Try Again Later", {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
          });
        }
      );
  };
  return (
    <div
      className="p-4 flex items-center h-full justify-center flex-col space-y-4 bg-zinc-50"
      id="contact"
    >
      <div className="px-5 py-2 bg-white text-slate-800 text-3xl font-bold">
        Contact Me
      </div>
      <div className="h-full p-10 bg-slate-800 flex flex-col  md:space-x-6 space-y-3 md:flex-row justify-center items-center">
        <div>
          <div className="inline-flex flex-row w-full space-x-1 justify-center items-center">
            <a
              className="h-8 w-8"
              href="https://web.facebook.com/fabisch.kamau/"
              target="_blank"
              rel="noreferrer"
            >
              <img
                src="https://img.icons8.com/fluency/48/000000/facebook-new.png"
                alt="facebook"
              />
            </a>
            <a
              className="h-8 w-8"
              href="https://twitter.com/dark_phoenix254"
              target="_blank"
              rel="noreferrer"
            >
              <img
                src="https://img.icons8.com/color/48/000000/twitter--v1.png"
                alt="twitter"
              />
            </a>
            <a
              className="h-8 w-8"
              href="https://www.instagram.com/fabisch678/"
              target="_blank"
              rel="noreferrer"
            >
              <img
                src="https://img.icons8.com/fluency/48/000000/instagram-new.png"
                alt="instagram"
              />
            </a>
            <a
              className="h-8 w-8"
              href="https://www.youtube.com/channel/UC7FBSLkLa7573tOiYHs8gZw"
              target="_blank"
              rel="noreferrer"
            >
              <img
                src="https://img.icons8.com/doodle/48/000000/youtube-play--v2.png"
                alt="youtube"
              />
            </a>
          </div>
          <div className="text-white">
            <h3>Send Your emails here</h3>
            <div className="max-w-md">
              <img src={backgroun} alt="pic" />
            </div>
          </div>
        </div>
        <div>
          <form
            ref={form}
            onSubmit={handleSubmit(onSubmit)}
            className="bg-gray-100 p-2 space-y-2 rounded-md w-96 pb-5"
          >
            <div className="flex flex-col">
              <label>Name</label>
              <input
                type="text"
                name="user_name"
                {...register("user_name", { required: true })}
                className="rounded-lg bg-gray-300"
              />
              {errors.user_name && <>Field is Required</>}
            </div>
            <div className="flex flex-col">
              <label>Email</label>
              <input
                name="user_email"
                type="email"
                {...register("user_email")}
                className="rounded-lg bg-gray-300"
              />
            </div>
            <div className="flex flex-col">
              <label>Message</label>
              <textarea
                name="message"
                {...register("message", {
                  required: true,
                })}
                className="rounded-lg bg-gray-300 h-32"
              ></textarea>
              {errors.message && <p>Field is Required</p>}
            </div>
            <button
              type="submit"
              className="inline-flex space-x-1.5 py-2 px-5 bg-slate-800 text-white rounded-lg"
            >
              Send{" "}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path d="M10.894 2.553a1 1 0 00-1.788 0l-7 14a1 1 0 001.169 1.409l5-1.429A1 1 0 009 15.571V11a1 1 0 112 0v4.571a1 1 0 00.725.962l5 1.428a1 1 0 001.17-1.408l-7-14z" />
              </svg>
            </button>
          </form>
          <ToastContainer />
        </div>
      </div>
    </div>
  );
}

export default Contact;
