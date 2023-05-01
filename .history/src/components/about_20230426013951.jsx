import React from "react";

const About = () => {
  return (
    <section className="about">
      <div className="about--header">
        <h1 className="about--header__title">About Machala Laundry Service</h1>
      </div>
      <div className="about--content">
        <p className="about--content__text">
          A full service Laundry provider headquartered in Asaba, Delta State.
          Machala Laundry is the place for your Washing, Ironing and Folding of
          laundries. We render Modern, fast and friendly services. At Machala
          Laundry we take pride in having the knowledge, skills, expert
          resources and the products required to make your Laundry operations
          excellent.
        </p>
        <div className="about--content__videos">
          <div className="about--content__videos--video">
            <a
              className="about--content__videos--video--link"
              href="https://clipchamp.com/watch/oEE4UvILtLH?utm_source=embed&utm_medium=embed&utm_campaign=watch"
            >
              Akpu Junction Branch
            </a>
            <iframe
              allow="autoplay;"
              allowfullscreen
              src="https://clipchamp.com/watch/oEE4UvILtLH/embed"
              title="Akpu Junction Branch"
              frameborder="0"
              className="about--content__videos--video--iframe"
            ></iframe>
          </div>
          <div className="about--content__videos--video">
            <a
              className="about--content__videos--video--link"
              href="https://clipchamp.com/watch/ZFkJ6e8KEQk?utm_source=embed&utm_medium=embed&utm_campaign=watch"
            >
              First Empire Branch
            </a>
            <iframe
              allow="autoplay;"
              allowfullscreen
              src="https://clipchamp.com/watch/ZFkJ6e8KEQk/embed"
              title="First Empire Branch"
              frameborder="0"
              className="about--content__videos--video--iframe"
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;