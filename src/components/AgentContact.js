import React from "react"

export default function AgentContact() {
  return (
    <section className="AgentContact bg-blue-darker text-white antialiased py-24">
      <div class="flex w-1/2 mx-auto">
        <div class="w-1/3">
          <img
            src={agent.image}
            className="w-48 rounded-full"
            alt="something"
          />
        </div>
        <div class="w-2/3 flex flex-col justify-around text-xl">
          <h2 className="uppercase text-5xl mb-6">
            Questions About This Property?
          </h2>
          <p className="font-bold text-3xl my-4">
            <span>{agent.name}</span>
            {" - "}
            <span>{agent.title}</span>
          </p>
          <p className="my-4">{agent.email}</p>
          <p className="my-4">{agent.phoneNumber}</p>
          <p className="my-4">{agent.address}</p>
          <p className="my-4 leading-normal">{agent.bio}</p>
        </div>
      </div>
    </section>
  )
}

const agent = {
  image:
    "https://lh4.googleusercontent.com/-guu0XH3T-Zs/AAAAAAAAAAI/AAAAAAAAAGw/gbSVF-EkeJI/photo.jpg",
  name: "Taylor Langius",
  title: "Licensed Agent",
  email: "jim@vandelayproperties.com",
  phoneNumber: "(561) 555-8954",
  address: "79 E. 14th Avenue, Cty, State Zip",
  bio:
    "Our only goal at Vandelay Properties is to give our clients a VIP experience making their dream home a reality. If you have any questions or are interested in this property, contact its listing agent Jim Smith. He’ll be in touch to answer all your questions."
}
