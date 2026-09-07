import { useState } from "react";

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div>
      <section className="max-w-4xl mx-auto px-6 md:px-10 pt-20 pb-10 text-center">
        <h1 className="text-4xl md:text-6xl font-bold text-black">Contact Us</h1>
      </section>

      <section className="bg-gray-50 py-16">
        <div className="max-w-3xl mx-auto px-6 md:px-10">
          <h2 className="text-3xl md:text-5xl font-bold text-black mb-3">Contact Form</h2>
          <p className="text-gray-500 mb-10">
            Please fill out the information below. We will contact you shortly.
          </p>

          {submitted ? (
            <div className="bg-white rounded-2xl border border-gray-200 p-10 text-center">
              <p className="text-xl font-semibold text-black">Thanks — we'll be in touch shortly.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block font-medium text-black mb-2">First Name</label>
                  <input required className="w-full rounded-2xl border border-gray-300 px-4 py-3" placeholder="Enter your First Name" />
                </div>
                <div>
                  <label className="block font-medium text-black mb-2">Last Name</label>
                  <input required className="w-full rounded-2xl border border-gray-300 px-4 py-3" placeholder="Enter your Last Name" />
                </div>
                <div>
                  <label className="block font-medium text-black mb-2">Email</label>
                  <input required type="email" className="w-full rounded-2xl border border-gray-300 px-4 py-3" placeholder="Enter your email address" />
                </div>
                <div>
                  <label className="block font-medium text-black mb-2">Phone</label>
                  <input className="w-full rounded-2xl border border-gray-300 px-4 py-3" placeholder="Enter your phone number" />
                </div>
              </div>
              <div>
                <label className="block font-medium text-black mb-2">Company</label>
                <input className="w-full rounded-2xl border border-gray-300 px-4 py-3" placeholder="Enter your company name" />
              </div>
              <div>
                <label className="block font-medium text-black mb-2">Message</label>
                <textarea rows={5} className="w-full rounded-2xl border border-gray-300 px-4 py-3" placeholder="Tell us how we can help you" />
              </div>
              <button type="submit" className="w-full bg-[#362FFA] hover:bg-[#2a24d6] transition-colors text-white font-medium py-4 rounded-2xl">
                Submit
              </button>
            </form>
          )}

          <div className="mt-16">
            <p className="text-[#362FFA] font-semibold tracking-wide mb-6">OTHER WAYS TO REACH US</p>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 text-sm">
              <div>
                <p className="font-bold text-black mb-1">Email</p>
                <p className="text-gray-600">nexicle@nexicle.kr</p>
              </div>
              <div>
                <p className="font-bold text-black mb-1">Phone</p>
                <p className="text-gray-600">+82 010-4174-9546</p>
              </div>
 <div>
                <p className="font-bold text-black mb-1">Office</p>
                <a
                  href="https://www.google.com/maps/search/?api=1&query=%EC%84%9C%EC%9A%B8%ED%8A%B9%EB%B3%84%EC%8B%9C%20%EB%8F%84%EB%B4%89%EA%B5%AC%20%EB%A7%88%EB%93%A4%EB%A1%9C%2013%EA%B8%B8%2084%2C%20%EC%B0%BD%EB%8F%99%20%EC%95%84%EC%9A%B0%EB%A5%B4%EB%84%A4%20211%ED%98%B8"
                  target="_blank"
                  rel="noopener noreferrer"
                 className="text-gray-600 underline underline-offset-2 hover:text-[#362FFA] transition-colors"
>
               211, Aureune B/D, 84, Madeul-ro 13-gil, Dobong-gu, Seoul, Republic of Korea
                </a>
              </div>
              </div>

              
          </div>
        </div>
      </section>
    </div>
  );
}
