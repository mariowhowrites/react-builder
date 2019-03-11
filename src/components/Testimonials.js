import React from "react"

export default function Testimonials({
  sectionTitle,
  description,
  testimonials
}) {
  return (
    <section>
      <h3 className="text-5xl font-normal pt-32 mb-16 text-center">
        {sectionTitle.value}
      </h3>
      <p className="text-center opacity-50 text-2xl mb-24">{description.value}</p>
      <div className="flex w-3/5 mx-auto mb-24">
        {testimonials.value.map(testimonial => (
          <article
            className="flex flex-col items-center"
            key={testimonial.name}
          >
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
