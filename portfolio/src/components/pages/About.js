import React from "react";

const About = () => {
  return (

    <div className="container">
      <h1 className="display-4 text-right" style={{fontSize: "100px"}}>Hey there!</h1>
      <div className="jumbotron jumbotron-fluid my-5">
        <div className="container">
          {/* profile photo */}
          <img src="../assets/me.jpeg" alt="profile" id="profileImg" style={{height: "300px"}}/>
          {/* bio paragraph */}
          <p className="lead">
          My name is Ashli Hanson and I am a Full Stack web developer residing
            in Austin, Texas!
            <br /><br />
            I've spent the majority of my professional career in the service
            industry and customer service. Most recently, I was a store manager
            for Summer Moon Coffee for 3 years. Being a manager in a fast paced environment, like a
            coffee shop, really sharpened my problem solving skills and
            multitasking abilities.
            <br /><br />
            Becoming a Web Developer has opening my eyes to what the world really has to offer. Using my brain and being challenged are
            very important to me but I also love having the option to be
            creative and design. Switching career gears like this has revitalized my passion to be better, continue to learn
            and make my mark on the world for the better. 
            <br /><br />
            The sky is the limit in this realm of the professional world. The ability to share information to anyone and
            everywhere is a gift that I'm excited to work on and take seriously.
            My goal is to use these skills to share important information that
            should be easily accessible to anyone with an elevated and stream-lined user experience.
            <br /><br />
            In my spare time I enjoy spending as much time as possible outdoors in nature, whether it's hiking, biking, or just hanging up a hammock between two trees with a book.
            In an effort to bring nature into my home, I am also an amateur "plant mom". I've taken advantage of the extra time COVID-19 has given me so I can focus on my plants more.
            There is something that is just so rewarding seeing new growth on a plant. My plant journey has taught me that patience is key and google is your best friend. 
            It's been a useful lesson for my coding journey as well. 
            <br /><br />
            I am currently looking for a full time Front End Web Dev position. I am open to doing freelance work and collaborations. I would love to connect and create together!
          </p>
        </div>
      </div>
    </div>
  );
}

export default About;