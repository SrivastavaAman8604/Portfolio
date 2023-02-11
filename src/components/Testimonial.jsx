import React from 'react'

const Testimonial = () => {
  return (
    <div id='testimonial'>
      <h2>Testimonial</h2>
      <section>
        <TestimonialCardF 
        name={"Albert Dera"} 
        feedback={"Aman Creates a beautiful responsive websites for bussinesses that helps the Company as well as there product Growth"}/>
        <TestimonialCardG 
        name={"Kate Ferrero"} 
        feedback={"Aman Creates a beautiful responsive websites for bussinesses that helps the Company as well as there product Growth"}/>
        <TestimonialCardL 
        name={"Joseph Gonzalez"} 
        feedback={"Aman Creates a beautiful responsive websites for bussinesses that helps the Company as well as there product Growth"}/>
      </section>
    </div>
  )
}

const TestimonialCardG =({ name , feedback })=>(
    <article>
        {/* <img src="https://cdn-icons-png.flaticon.com/512/149/149071.png" alt="User" /> */}
        <img src="https://images.unsplash.com/photo-1488426862026-3ee34a7d66df?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTB8fHJhbmRvbSUyMHBlb3BsZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60" alt="user" />
        <h4>{name}</h4>
        <p>{feedback}</p>
    </article>
)

const TestimonialCardF =({ name , feedback })=>(
    <article>
        {/* <img src="https://cdn-icons-png.flaticon.com/512/149/149071.png" alt="User" /> */}
        <img src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8cmFuZG9tJTIwcGVvcGxlfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60" alt="user" />
        <h4>{name}</h4>
        <p>{feedback}</p>
    </article>
)

const TestimonialCardL =({ name , feedback })=>(
    <article>
        {/* <img src="https://cdn-icons-png.flaticon.com/512/149/149071.png" alt="User" /> */}
        <img src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8cmFuZG9tJTIwcGVvcGxlfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60" alt="user" />
        <h4>{name}</h4>
        <p>{feedback}</p>
    </article>
)

export default Testimonial
