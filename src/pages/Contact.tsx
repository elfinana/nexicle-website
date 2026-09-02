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
                  <input required className="w-full rounded-2xl border border-gray-300 px-4 py-3" placeholder="" />
                </div>
                <div>
                  <label className="block font-medium text-black mb-2">Last Name</label>
                  <input required className="w-full rounded-2xl border border-gray-300 px-4 py-3" placeholder="" />
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
                <p className="text-gray-600">서울특별시 도봉구 마들로 13길 84, 창동 아우르네 211호</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
