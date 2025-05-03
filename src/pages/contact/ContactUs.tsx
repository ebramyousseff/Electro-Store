import "./ContactUs.css";

const ContactUs = () => {
  return (
    <section className="w-full md:px-18 px-8 py-11 dark:bg-black text-black dark:text-white">
      <div className="flex justify-center items-center">
        <h1 className="text-3xl font-semibold">Contact Us</h1>
      </div>
      <div className="flex flex-col w-full lg:flex-row gap-5">
        <div className="py-5 lg:w-1/2 w-full">
          <div className="">
            <h1 className="sort-title w-full text-3xl font-semibold border-b-[1px] border-gray-500 pb-2">
              Leave us a Message
            </h1>
            <p className="py-5 font-medium">
              Aenean massa diam, viverra vitae luctus sed, gravida eget est.
              Etiam nec ipsum porttitor, consequat libero eu, dignissim eros.
              Nulla auctor lacinia enim id mollis. Curabitur luctus interdum
              eleifend. Ut tempor lorem a turpis fermentum,.
            </p>
          </div>
          <form className=" flex flex-col gap-6">
            <div className="flex flex-col md:flex-row  gap-5">
              <div className="flex flex-col gap-2">
                <label htmlFor="" className="text-lg ">First Name</label>
                <input type="text" className="outline-blue-400 rounded-3xl bg-blue-100 py-1 px-2 text-black" placeholder="First Name"/>
              </div>
              <div className="flex flex-col gap-2">
                <label htmlFor="text-lg">Last Name</label>
                <input type="text" className="outline-blue-400 rounded-3xl bg-blue-100 py-1 px-2 text-black" placeholder="Last Name"/>
                <input type="text" className="Last Name" />
              </div>
            </div>
            <div className="flex flex-col gap-2">
              <label htmlFor="text-lg">Email</label>
              <input type="text" className="outline-blue-400 rounded-3xl bg-blue-100 py-1 px-2 text-black" placeholder="email"/>
            </div>
            <div className="flex flex-col">
              <label htmlFor="text-lg">Comment or Message</label>
              <textarea name="" id=""  rows={5} className="outline-blue-400 rounded-3xl bg-blue-100 py-1 px-2"></textarea>
            </div>

            <button
              type="submit"
              className="bg-main text-black px-4 py-2 rounded-full max-w-35"
            >
              Send Message
            </button>
          </form>
        </div>

        <div className="lg:w-1/2 w-full py-8 ">
          <div className="w-full flex flex-col gap-4">
            <div className="w-full h-[400px] rounded-md overflow-hidden shadow-lg">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d25313.092571090903!2d31.26165035!3d29.959438099999996!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14583809b8f551e3%3A0x6265c5febb8ab4a3!2sMaadi%2C%20Cairo%20Governorate!5e1!3m2!1sen!2seg!4v1746050121750!5m2!1sen!2seg"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
            <div>
              <div className="">
                <h1 className="sort-title w-full text-3xl font-semibold border-b-[1px] border-gray-500 pb-2">Our Address</h1>
              </div>
              <div className="py-5">
                <p className="text-gray-400">17 Princess Road London, Greater London NW1 8JR, UK</p>
                <p className="text-gray-400">Support(+800)856 800 604</p>
                <p className="text-gray-400">Email: info@electro.com</p>
              </div>
              <div className="">
                <h1 className=" w-full text-lg font-semibold pb-2">Opening Hours</h1>
              </div>
              <div className="">
                <p className="text-gray-400">Monday to Friday: 9am-9pm</p>
                <p className="text-gray-400">Saturday to Sunday: 9am-11pm
              </p>
              </div>
              <div className="">
                <h1 className=" w-full text-lg font-semibold pb-2">Careers</h1>
              </div>
              <div className="">
                <p className="text-gray-400">If you’re interested in employment opportunities at Electro, please email us: contact@yourstore.com</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactUs;
