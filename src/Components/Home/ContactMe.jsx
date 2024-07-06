import emailjs from '@emailjs/browser';
import { useRef } from 'react';
import { CiFacebook, CiLinkedin, CiLocationOn } from 'react-icons/ci';
import { FaGithub, FaPhoneSquareAlt } from 'react-icons/fa';
import { HiOutlineMailOpen } from 'react-icons/hi';
import { MdContactMail } from 'react-icons/md';

const ContactMe = () => {
    const form = useRef();


    const sendEmail = (e) => {
        e.preventDefault();
    
        emailjs
          .sendForm('service_erpitod', 'template_ei1cb8m', form.current, {
            publicKey: 'FsNGnEotqkFaNzhoE',
          })
          .then(
            () => {
              console.log('SUCCESS!');
            },
            (error) => {
              console.log('FAILED...', error.text);
            },
          );
      };
    
  return (
    <div data-aos="zoom-in-up" id='contact' className='bg-gray-100 mb-10'>
        <marquee>
        <h1 className="flex gap-7 text-5xl font-bold text-[#007BFF] items-center">
            <MdContactMail className="text-6xl" />
            <p>CONTACT ME !</p>
            </h1>
        </marquee>
        <section className="email-contact mt-10 bg-white grid grid-cols-1 lg:grid-cols-2 items-center gap-10">
                <div data-aos="fade-right" className='border rounded-lg shadow-2xl'>
                    <h1 className="text-center text-5xl font-bold text-green-900 pt-10">Let’s work together!</h1>
                    <p className='text-center mt-3'>
                    I design and code beautifully simple things and i love what i do.
                    <br />
                     Just simple like that!
                    </p>
                <form ref={form} onSubmit={sendEmail}>
      
      <div className='grid grid-cols-1 gap-y-2 px-10'>
      <input
      required
  type="text"
  name="user_name"
  placeholder="Enter Your Name"
  className="input input-bordered input-accent w-full mt-4 bg-gray-100" />
      
      
      <input
      required
  type="text"
  name="user_email"
  placeholder="Enter Your Email"
  className="input input-bordered input-accent w-full bg-gray-100" />
      
     
      <textarea
      required
       name="message" className="textarea textarea-accent h-[150px] bg-gray-100" placeholder="Message"></textarea>
      </div>
      
      <button className='btn btn-outline rounded-full ml-[70px] mt-5 px-10 bg-green-900 text-white mb-10'><input type="submit" value="Send Message" /></button>
    </form>
                </div>
                <div data-aos="fade-left" className='contact-item'>
                    <div className='flex gap-[50px] mb-7'>
                        <div>
                        <FaPhoneSquareAlt className='text-6xl text-white border rounded-full bg-green-700' />
                        </div>
                        <div>
                            <p className='font-semibold'>Phone</p>
                            <p className='font-bold text-green-800 text-xl'>+88 01762-732490</p>
                        </div>
                    </div>

                    <div className='flex gap-[50px] mb-7'>
                    <div>
                        <HiOutlineMailOpen className='text-6xl text-white border rounded-full bg-green-700' />
                        </div>
                        <div>
                            <p className='font-semibold'>Email</p>
                            <p className='font-bold text-green-800 text-xl'>
                            mdtorikulislam99@yahoo.com
                            </p>
                        </div>
                    </div>
                    <div className='flex gap-[50px]'>
                    <div>
                        <CiLocationOn className='text-6xl text-white border rounded-full bg-green-700' />
                        </div>
                        <div>
                            <p className='font-semibold'>Address</p>
                            <p className='font-bold text-green-800 text-xl'>
                            Rangpur City, <br />
                            Dhaka, Bangladesh
                            </p>
                        </div>
                    </div>
                    <div>
                    <div className="mt-10 flex items-center gap-2">
                    <a href="#">
       <button target="blank" className="hover:bg-[#007BFF]"><CiLinkedin className="text-5xl border p-1 rounded-full border-[#007BFF] text-[#007BFF] hover:text-white" /></button>
       </a>
        <a target="blank" href="https://github.com/torikulislamv3">
        <button className="hover:bg-[#007BFF]"><FaGithub className="text-5xl border p-1 rounded-full border-[#007BFF] text-[#007BFF] hover:text-white" /></button>
        </a>
        <a target="blank" href="https://www.facebook.com/mdtorikulislamtamim/">
        <button className="hover:bg-[#007BFF]"><CiFacebook className="text-5xl border p-1 rounded-full border-[#007BFF] text-[#007BFF] hover:text-white" /></button>
        </a>
      </div>
                    </div>
                </div>
        </section>
    </div>
  )
}

export default ContactMe