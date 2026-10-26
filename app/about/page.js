import Header from '../../components/Header'
import Footer from '../../components/Footer'

export default function About() {
  return (
    <>
      <Header />
      <main className="py-16">
        <div className="max-w-7xl mx-auto px-4">
          <h1 className="text-5xl font-bold mb-6">Precision in SR&ED & Tax Strategy</h1>
          <h2 className="text-3xl mb-8">Engineering financial success for Canadian innovators since 2005</h2>
          <p className="text-xl mb-8 max-w-3xl">
            We eliminate the friction between innovation and government funding. We translate your complex operations into fully compliant SR&ED claims, maximizing returns through precision, not aggressive accounting.
          </p>
          <div className="bg-primary text-white p-8 rounded-lg my-12">
            <h2 className="text-4xl font-bold mb-4">Our Track Record</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
              <div><div className="text-5xl font-bold">20</div><p>Years</p></div>
              <div><div className="text-5xl font-bold">8500</div><p>Projects</p></div>
              <div><div className="text-5xl font-bold">$500M+</div><p>Recovered</p></div>
              <div><div className="text-5xl font-bold">96.5%</div><p>Success rate</p></div>
            </div>
          </div>
          <h2 className="text-4xl font-bold mb-8">Behind the Strategy</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="border p-6 rounded">
              <h3 className="text-2xl font-semibold">Claim Architecture Blueprint Expert</h3>
              <p className="text-primary font-medium">Technical Director / Managing Partner</p>
              <p>Sees the big picture and architects your claim. Transforms scattered technical challenges into one cohesive, compelling technical narrative.</p>
            </div>
            {/* Add more team members similarly */}
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}
