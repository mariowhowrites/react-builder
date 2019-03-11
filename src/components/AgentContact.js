import React from "react"

export default function AgentContact({
  image,
  heading,
  name,
  title,
  email,
  phoneNumber,
  address,
  bio
}) {
  return (
    <section className="AgentContact bg-blue-darker text-white antialiased py-24">
      <div className="flex w-1/2 mx-auto">
        <div className="w-1/3">
          <img
            src={image.value}
            className="w-48 rounded-full"
            alt="something"
          />
        </div>
        <div className="w-2/3 flex flex-col justify-around text-xl">
          <h2 className="uppercase text-5xl mb-6">{heading.value}</h2>
          <p className="font-bold text-3xl my-4">
            <span>{name.value}</span>
            {" - "}
            <span>{title.value}</span>
          </p>
          <p className="my-4">{email.value}</p>
          <p className="my-4">{phoneNumber.value}</p>
          <p className="my-4">{address.value}</p>
          <p className="my-4 leading-normal">{bio.value}</p>
        </div>
      </div>
    </section>
  )
}
