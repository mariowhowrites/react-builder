import React from "react"

export default function Testimonials() {
  return (
    <section>
      <h3 className="text-5xl font-normal pt-32 mb-16 text-center">
        Testimonials
      </h3>
      <p className="text-center opacity-50 text-2xl mb-24">
        Hear what some of our satisfied customers are saying about us!
      </p>
      <div class="flex w-3/5 mx-auto mb-24">
        {testimonalArray.map(testimonial => (
          <article className="flex flex-col items-center">
            <p className="italic w-3/4 text-xl mb-12 leading-normal opacity-75">
              {testimonial.quote}
            </p>
            <img
              className="rounded-full w-1/5"
              src={testimonial.image}
              alt="Testimonial Portrait"
            />
            <p className="mt-12 text-xl">
              <span className="font-bold">{testimonial.name}</span>
              {` - `}
              <span>{testimonial.relation}</span>
            </p>
          </article>
        ))}
      </div>
    </section>
  )
}

const testimonalArray = [
  {
    image:
      "https://lh3.googleusercontent.com/2NIWadoS7ktDsTxFbOYjv9YGdyPQ0Hwz0bzGdtM86rVpW558SdAZYxYqeWCYox15FV437GJPuzQ-vwIQHK7F=w1024",
    name: "Cindy Smith",
    relation: "First Time Buyer",
    quote:
      "As first time home buyers, my wife and I were a little nervous about the investment we were about to make. It felt like a massive commitment. Plus we couldn’t agree on all the details we wanted. Art Vandelay turned out to be our hero! He was active and involved with us every step of the way. He found us the perfect property, and helped us negotiate a price we were happy with. Absolutely delighted!"
  },
  {
    image:
      "https://lh3.googleusercontent.com/ptoWMDP9f_nYrkeZlGKBlcHzGljP0lxxGch46qdN0ZKV8uvmei0L87StAhrgWPb4yiNStr4z2_Qj948LLkliUQ=w1024",
    name: "John Brown",
    relation: "Previous Owner",
    quote:
      "When I had to move for work, I was concerned about getting the best price for my house. Vandelay properties came highly recommended by a friend and they couldn’t have been more right. The team at Vandelay knows property values and showed my home highlighting its most valuable assets. It sold in only 3 months and best of all I got a great price!"
  }
]
