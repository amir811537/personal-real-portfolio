import { FaFacebook } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import { PiLinkSimpleBold } from "react-icons/pi";
import React, { useRef } from "react";
import emailjs from "@emailjs/browser";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Footer = () => {
	const form = useRef();

	const sendEmail = (e) => {
		e.preventDefault();

		emailjs
			.sendForm(
				"service_ni5iidg",
				"template_rm9wy6g",
				form.current,
				"-bm6gpyikLo3WdV4E"
			)
			.then(
				(result) => {
					console.log(result.text);
					toast.success("Mail sent Successfully", {
						position: "top-center",
						autoClose: 5000,
						hideProgressBar: false,
						closeOnClick: true,
						pauseOnHover: true,
						draggable: true,
						progress: undefined,
						theme: "dark",
					});
				},
				(error) => {
					console.log(error.text);
				}
			);
	};

	return (
		<div
			id="Contact"
			className="flex flex-col md:flex-row bg-transparent text-slate-200  justify-around p-10"
		>
			<div className="md:w-1/3 ">
				<div
					
					className="flex gap-2 text-xl items-center"
				>
					<PiLinkSimpleBold
						className="text-white"
						size={40}
					></PiLinkSimpleBold>
					<div className="flex flex-col">
						<h1 className=" mt-8  mb-2">Socials Links</h1>
						<div className=" text-xl md:text-base flex md:flex-row gap-5  items-center">
							<a
								href="https://www.facebook.com/aamir.hossain.18041"
								className="flex  items-center gap-2"
							>
								<FaFacebook className="text-white" />
								<span className="hidden md:block">Facebook</span>
							</a>
							<a
								href="https://www.linkedin.com/in/aamir-hossain-a37911274/"
								className="flex items-center gap-2"
							>
								<FaLinkedin className="text-white" />
								<span className="hidden md:block">LinkedIn</span>
							</a>
							<a
								href="https://github.com/amir811537"
								className="flex items-center gap-2"
							>
								<FaGithub className="text-white" /> <span className="hidden md:block">GitHub</span>
							</a>
						</div>
					</div>
				</div>

				<div
					
					className="flex gap-2 my-16 items-center  text-2xl"
				>
					<MdEmail className="text-white" size={40} />
					<div>
						<h1>Email</h1>
						<p className="text-xl">amirhossain.bc75@gmail.com</p>
					</div>
				</div>

				<div
					
					className="flex gap-2 my-10 items-center  text-2xl"
				>
					<FaLocationDot className="text-white" size={40} />
					<div>
						<h1>Address</h1>
						<p className="text-xl"> Dhaka , Bangladesh</p>
					</div>
				</div>
			</div>

			<div className="md:w-1/3 ">
				<h1 className="text-3xl font-bold my-5">Send me Email </h1>
				<form ref={form} onSubmit={sendEmail}>
					<div className="flex  overflow-hidden flex-col gap-10">
						<input
							
							type="text"
							placeholder="Full Name"
							required
							name="from_name"
							className="input input-bordered w-full max-w-sm border-[#CD5FF8]"
						/>
						<input
							
							type="email"
							placeholder="Your Email"
							name="from_email"
							required
							className="border-[#CD5FF8] input input-bordered w-full max-w-sm"
						/>
						<textarea
							
							className="textarea h-40 border-[#CD5FF8] textarea-bordered w-full max-w-sm"
							name="message"
							placeholder="Your message"
						></textarea>
						<button
							type="submit"
							className="btn max-w-sm  btn-primary bg-[#CD5FF8] hover:bg-[#CD5FF8] "
						>
							{" "}
							Send Email
						</button>
					</div>
				</form>{" "}
				<ToastContainer className="mt-10" />
			</div>
		</div>
	);
};

export default Footer;
