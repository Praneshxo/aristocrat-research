import Header from '../../components/Header'
import Footer from '../../components/Footer'

export default function Contact() {
  return (
    <>
      <Header />
      <main className="py-16">
        <div className="max-w-4xl mx-auto px-4">
          <h1 className="text-5xl font-bold mb-6">Start Your Next Move</h1>
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h2 className="text-2xl font-semibold mb-4">Research desk</h2>
              <p className="text-xl mb-6"><a href="tel:+919894595035" className="text-primary">+91 98945 95035</a></p>
              <h2 className="text-2xl font-semibold mb-4">Address</h2>
              <p>Chennai, India<br />Serving English-language clients globally</p>
              <p className="mt-4">Email: <a href="mailto:support@aristocratresearch.com" className="text-primary">info@aristocratresearch.ca</a></p>
            </div>
            <div>
              <form className="space-y-4">
                <input type="text" placeholder="Your Name" className="w-full border p-3 rounded" required />
                <input type="email" placeholder="Email" className="w-full border p-3 rounded" required />
                <input type="text" placeholder="Company" className="w-full border p-3 rounded" />
                <textarea placeholder="What are you trying to build, complete, publish or transform?" className="w-full border p-3 rounded h-32" required></textarea>
                <button type="submit" className="bg-primary text-white px-6 py-3 rounded w-full hover:bg-blue-700">
                  Submit request
                </button>
              </form>
            </div>
          </div>
          <div className="mt-16">
            <h2 className="text-3xl font-bold mb-4">One connected ecosystem</h2>
            <p>We support institutions, faculty, scholars and student innovators with research, innovation and commercialisation infrastructure.</p>
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}
