import imagen from "/images/dumbbells.jpg"
import { Link } from "react-router-dom"

export default function About() {
  return (
    <div className="bg-gray-100">
      <Link to="/" >
        <h1 className="text-3xl font-extrabold">GYM</h1>
      </Link>
      <div className="bg-gray-100 py-8">
        <h1 className="text-4xl font-black text-yellow-400 text-center mb-5">About Us</h1>
        <main className="grid grid-cols-2 gap-4">
          <section className="flex flex-col justify-center">
            <div className="w-full h-full">
              <img src={imagen} alt="carousel" height={"600"} width={"800"} className="rounded-lg shadow-lg" />
            </div>
            <p className="text-lg text-gray-600 mt-4">Welcome to our gym! We're a place where fitness and wellness come together. Founded in 2020, we offer a range of services and state-of-the-art equipment to help you reach your fitness goals. With our highly trained instructors, you'll find a personalized and motivating training experience. Join our passionate community and discover how we can help you achieve your fitness goals and live a healthier life.</p>
          </section>
          <section className="flex flex-col justify-center">
            <h1 className="text-2xl font-bold text-gray-800 mb-2">Location & Hours</h1>
            <div className="flex flex-col mb-4">
              <h1 className="text-lg font-bold text-gray-600 mb-1">Address</h1>
              <p className="text-lg text-gray-600">123 Main St, Córdoba <br /> Phone: +1 555 555 5555</p>
            </div>
            <div className="flex flex-col mb-4">
              <h1 className="text-lg font-bold text-gray-600 mb-1">Hours</h1>
              <table className="w-full text-lg text-gray-600">
                <thead>
                  <tr>
                    <th className="text-left">Day</th>
                    <th className="text-left">Hours</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Monday - Friday</td>
                    <td>8am - 10pm</td>
                  </tr>
                  <tr>
                    <td>Saturday</td>
                    <td>9am - 9pm</td>
                  </tr>
                  <tr>
                    <td>Sunday</td>
                    <td>10am - 8pm</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <h1 className="text-lg font-bold text-gray-600 mb-2">Location</h1>
            <iframe src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3404.8949114450493!2d-64.1939945465117!3d-31.41702133010845!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMzHCsDI1JzAxLjMiUyA2NMKwMTEnMjAuOSJX!5e0!3m2!1ses!2sar!4v1689559771538!5m2!1ses!2sar" width="600" height="250" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
          </section>
        </main>
      </div>
      <div className="text-center bg-yellow-400 p-5  ">
                <h1 className="font-bold text-lg">Feel the change, see the result</h1>
                <p className="font-bold text-base" >GYM Team.</p>
            </div>
    </div>
  )
}
