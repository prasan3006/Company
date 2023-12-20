import React from "react";
import Slider from "react-slick";
import SectionTitle from "../SectionTitle/SectionTitle";
import { css } from "emotion";

import SlickArrowLeft from "../../assets/images/slick-arrow-left-small.png";
import SlickArrowRight from "../../assets/images/slick-arrow-right-small.png";

const TestimonialStyle = () => css`
  margin: 0 20px;
  .slick-track {
    display: flex !important;
    align-items: center !important;
    justify-content: center !important;
  }

  .rn-slick-arrow button.slick-arrow.slick-prev::before {
    content: url(${SlickArrowLeft}) !important;
  }

  .rn-slick-arrow button.slick-arrow.slick-next::before {
    content: url(${SlickArrowRight}) !important;
  }

  .custom-row {
    padding: 0 90px;
  }

  @media (max-width: 578px) {
    .custom-row {
      padding: 0 30px;
    }
  }
`;

export const slickDot = {
  infinite: true,
  slidesToShow: 1,
  slidesToScroll: 1,
  dots: true,
  arrows: true,
  responsive: [
    {
      breakpoint: 800,
      settings: {
        slidesToShow: 1,
      },
    },
    {
      breakpoint: 993,
      settings: {
        slidesToShow: 1,
      },
    },
    {
      breakpoint: 580,
      settings: {
        slidesToShow: 1,
      },
    },
    {
      breakpoint: 481,
      settings: {
        slidesToShow: 1,
      },
    },
  ],
};

const TestimonialData = [
  {
    form: "India",
    description: [
      "We have been working with Pradeep in Strategy Fox for quite some time now, and he has been an integral part of our team. His efforts have been exceptional, and we have seen a steady growth in our Amazon sales, thanks to his expertise and dedication.",
      "Pradeep is a pleasure to work with - he is super helpful, very prompt, responsive, and always goes the extra mile to ensure that we are achieving our goals. He is deeply committed to our success, and his attention to detail and focus on performance has been instrumental in our growth.",
      "We would highly recommend them for marketing and strategy to anyone looking to grow their business online and on Amazon. He is a true professional and a valuable asset to our team.",
      "Thank you, Pradeep, for all your hard work and for being a fantastic partner!",
    ],
    name: "Shriya N Wadhwa",
    subtitle: "Founder, Zama",
  },
  {
    form: "India",
    description: [
      "As the Co-Founder of Magizham, I am very pleased with the exceptional results we've achieved with Strategy Fox team’s Shopify website creation and Performance Marketing expertise. The team's commitment to our success has been truly outstanding, and it's evident in the remarkable growth we've experienced.",
      "I'm excited about the opportunity to recommend their services to fellow D2C brands. Pradeep’s expertise has been especially a game-changer for us, and it will be for others as well.",
      "Thank you for being an essential part of our journey towards growth and excellence. I'm looking forward to a long and fruitful collaboration with Strategy Fox.",
    ],
    name: "Priya Shankar",
    subtitle: "Co-Founder, Magizham Boutique",
  },
  {
    form: "India",
    description: [
      "I had an incredible experience working with Strategy Fox. They revolutionized my business significantly by increasing sales while keeping costs low. Their expertise in ecommerce technology, digital marketing channels such as SEO, content creation, social media and PPC ads, drove remarkable growth.",
      "Their transparent and collaborative approach, along with exceptional customer service, made them feel like an extension of my team. They took the time to understand my business goals, target audience, unique selling points and developed a tailored strategy that fits our business goals without breaking the bank. Moreover, what sets them apart is their selfless and humane approach, always going above and beyond to ensure my success.",
      "Thank you Pradeep, Maadhusri and the entire team of Strategy Fox for exceeding all expectations. Your exceptional work has left an indelible mark on my business. I highly recommend them to scale (even 10x!) your D2C brand.",
    ],
    name: "Priyanka",
    subtitle: "Founder, J&JP Clothing Company",
  },
  {
    form: "India",
    description: [
      "Working with Strategy Fox was an absolutely delightful experience. I really loved their innovative and low cost strategies and mainly their strength in implementation. They helped me increasing my sales. They are very professional and have a quick turnaround time. I would recommend to anyone with D2C business needs.",
    ],
    name: "Vishwa Barathi",
    subtitle: "Managing Director, BSM",
  },
];

const Testimonials = () => {
  return (
    <div className="rwt-split-area rn-section-gap">
      <div className="wrapper">
        <div className="row">
          <div className="col-lg-12 mb--40">
            <SectionTitle
              textAlign="text-center"
              radiusRounded=""
              subtitle="Testimonials"
              title="Customer testimonials"
              description="Hear what our customers are saying about us!"
            />
          </div>
        </div>
        <div
          style={{
            maxWidth: "1200px",
            margin: "0 auto",
          }}
        >
          <div className="row">
            <div className="col-lg-12">
              <div className={TestimonialStyle()}>
                <Slider
                  className="slick-space-gutter--15 rn-slick-dot rn-slick-arrow mb--60"
                  {...slickDot}
                >
                  {TestimonialData.map((data, index) => (
                    <div
                      key={index}
                      className="testimonial-style-two card-style-default testimonial-style-one"
                    >
                      <div className="row align-items-center row--20 custom-row">
                        <div className="col-lg-12 col-md-12">
                          <div className="content mt_sm--40">
                            <span className="form">{data.form}</span>
                            <p
                              className="description"
                              style={{ fontSize: "20px" }}
                            >
                              {data.description.map((para, index) => (
                                <span key={index}>
                                  {para}
                                  {index + 1 !== data.description.length && (
                                    <br />
                                  )}
                                  {index + 1 !== data.description.length && (
                                    <br />
                                  )}
                                </span>
                              ))}
                            </p>
                            <div className="client-info">
                              <h4 className="title">{data.name}</h4>
                              <h6 className="subtitle">{data.subtitle}</h6>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </Slider>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
