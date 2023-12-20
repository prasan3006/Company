import React from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import { ApproachStyle } from "./Approach.style";

import MarketResearch1 from "../../assets/images/approach/market-research-1.png";
import MarketResearch2 from "../../assets/images/approach/market-research-2.png";
import BusinessStrategy1 from "../../assets/images/approach/business-strategy-1.png";
import BusinessStrategy2 from "../../assets/images/approach/business-strategy-2.png";
import Branding1 from "../../assets/images/approach/branding-1.png";
import Branding2 from "../../assets/images/approach/branding-2.png";
import Technology1 from "../../assets/images/approach/technology-1.png";
import Technology2 from "../../assets/images/approach/technology-2.png";
import Operations1 from "../../assets/images/approach/operations-1.png";
import Operations2 from "../../assets/images/approach/operations-2.png";
import Marketing1 from "../../assets/images/approach/marketing-1.png";
import Marketing2 from "../../assets/images/approach/marketing-2.png";
import MetricsTracking1 from "../../assets/images/approach/metrics-tracking-1.png";
import MetricsTracking2 from "../../assets/images/approach/metrics-tracking-2.png";

const dataList = [
  {
    image: MarketResearch1,
    title: "Competitor Analysis",
    description:
      "Includes potential competitors, industry leaders, their products and price points.",
  },
  {
    image: MarketResearch2,
    title: "Customer Research",
    description:
      "We do a deep dive on niche target segments, their behavior and pain points.",
  },
];

const dataList1 = [
  {
    image: BusinessStrategy1,
    title: "Finance",
    description:
      "We will work on potential Revenue streams, Optimizing Costs, Unit Economics and Pricing Strategies.",
  },
  {
    image: BusinessStrategy2,
    title: "Concept Creation",
    description:
      "D2C brands are built on stories and emotions. We create innovative concepts that connects well with your customers.",
  },
];

const dataList2 = [
  {
    image: Branding1,
    title: "Premium Branding",
    description:
      "We identify your USP and create a premium brand positioning to increase perceived value.",
  },
  {
    image: Branding2,
    title: "Branding Elements",
    description:
      "We leverage design thinking to create designs and contents which accurately reflects your Brand Personality.",
  },
];

const dataList3 = [
  {
    image: Technology1,
    title: "Development",
    description:
      "We will create a complete e-commerce website, mobile app and marketplace solutions.",
  },
  {
    image: Technology2,
    title: "Digital Transformation",
    description:
      "Includes increasing your online presence, optimizing content (SEO) and increasing conversions.",
  },
];

const dataList4 = [
  {
    image: Operations1,
    title: "Distribution",
    description:
      "We create the most efficient way to reach your customers at the shortest time with lowest cost.",
  },
  {
    image: Operations2,
    title: "Inventory Management",
    description:
      "Our effective inventory strategies helps you to forecast needs and reduce excess inventory levels.",
  },
];

const dataList5 = [
  {
    image: Marketing1,
    title: "Digital Marketing",
    description:
      "Includes Social Media Marketing and Content Management, PPC Ads, Email Campaigns, Influencer Marketing etc.,",
  },
  {
    image: Marketing2,
    title: "Traditional Marketing",
    description:
      "Includes all forms of effective traditional marketing from TV ads to Display ads to Event Marketing etc.,",
  },
];

const dataList6 = [
  {
    image: MetricsTracking1,
    title: "Data Analytics",
    description:
      "We create business intelligence tools and dashboards to monitor real time data and analytics.",
  },
  {
    image: MetricsTracking2,
    title: "Remarketing",
    description:
      "Includes converting abandoned checkouts into sales and increasing the customer retention rate.",
  },
];

const Approach = () => {
  return (
    <div className={ApproachStyle()}>
      <div className="row">
        <div className="col-lg-12">
          <Tabs>
            <div className="row row--30 align-items-center">
              <div className="col-lg-12">
                <div className="rn-default-tab style-three">
                  <div className="tab-button-panel">
                    <TabList className="tab-button">
                      <Tab style={{ padding: "10px 20px" }}>
                        <div className="rn-tab-button">
                          <button>1 - Market Research</button>
                        </div>
                      </Tab>
                      <Tab style={{ padding: "10px 20px" }}>
                        <div className="rn-tab-button">
                          <button>2 - Business Strategy</button>
                        </div>
                      </Tab>
                      <Tab style={{ padding: "10px 20px" }}>
                        <div className="rn-tab-button">
                          <button>3 - Branding</button>
                        </div>
                      </Tab>
                      <Tab style={{ padding: "10px 20px" }}>
                        <div className="rn-tab-button">
                          <button>4 - Technology</button>
                        </div>
                      </Tab>
                      <Tab style={{ padding: "10px 20px" }}>
                        <div className="rn-tab-button">
                          <button>5 - Operations</button>
                        </div>
                      </Tab>
                      <Tab style={{ padding: "10px 20px" }}>
                        <div className="rn-tab-button">
                          <button>6 - Marketing</button>
                        </div>
                      </Tab>
                      <Tab style={{ padding: "10px 20px" }}>
                        <div className="rn-tab-button">
                          <button>7 - Metrics Tracking</button>
                        </div>
                      </Tab>
                    </TabList>
                  </div>
                  <div className="tab-content-panel">
                    <TabPanel>
                      <div className="rn-tab-content">
                        <div className="inner">
                          <div className="row align-items-center row--30">
                            <div className="col-lg-4">
                              <div className="section-title">
                                <h4 className="title">Market Research</h4>
                                <p>
                                  Discovering insights to drive success. This is
                                  the first step in our approach. We analyze
                                  your company, close competitors, target
                                  customers and the market segment to make
                                  informed decisions about a potential gap in
                                  the market, product development and marketing
                                  strategies.
                                </p>
                              </div>
                            </div>
                            <div className="col-lg-8 mt_md--30 mt_sm--30">
                              <div className="row row--15 mt_dec--30 service-wrapper">
                                {dataList.map((val, i) => (
                                  <div
                                    className="col-lg-6 col-md-6 col-sm-6 col-12"
                                    key={i}
                                  >
                                    <div className="card-box card-style-1 text-left">
                                      <div className="inner">
                                        <div className="image">
                                          <a href="#service">
                                            <img
                                              src={`${val.image}`}
                                              alt="card Images"
                                            />
                                          </a>
                                        </div>
                                        <div className="content">
                                          <h4 className="title mb--20">
                                            <a href="#service">{val.title}</a>
                                          </h4>
                                          <p className="description b1 color-gray mb--0">
                                            {val.description}
                                          </p>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                ))}
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </TabPanel>
                    <TabPanel>
                      <div className="rn-tab-content">
                        <div className="inner">
                          <div className="row align-items-center row--30">
                            <div className="col-lg-4">
                              <div className="section-title">
                                <h4 className="title">Business Strategy</h4>
                                <p>
                                  Strategizing for a better tomorrow, today.
                                  With our Market Research findings we then
                                  formulate your Business plan and Go-To-Market
                                  strategies. We mainly create a sustainable and
                                  scalable business model that adds value to
                                  your customers. We will constantly revise the
                                  plans to suit current economic trends.
                                </p>
                              </div>
                            </div>
                            <div className="col-lg-8 mt_md--30 mt_sm--30">
                              <div className="row row--15 mt_dec--30 service-wrapper">
                                {dataList1.map((val, i) => (
                                  <div
                                    className="col-lg-6 col-md-6 col-sm-6 col-12"
                                    key={i}
                                  >
                                    <div className="card-box card-style-1 text-left">
                                      <div className="inner">
                                        <div className="image">
                                          <a href="#service">
                                            <img
                                              src={`${val.image}`}
                                              alt="card Images"
                                            />
                                          </a>
                                        </div>
                                        <div className="content">
                                          <h4 className="title mb--20">
                                            <a href="#service">{val.title}</a>
                                          </h4>
                                          <p className="description b1 color-gray mb--0">
                                            {val.description}
                                          </p>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                ))}
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </TabPanel>
                    <TabPanel>
                      <div className="rn-tab-content">
                        <div className="inner">
                          <div className="row align-items-center row--30">
                            <div className="col-lg-4">
                              <div className="section-title">
                                <h4 className="title">Branding</h4>
                                <p>
                                  Crafting brands that stand out, not blend in.
                                  We create strong brand image that helps
                                  establish your company's reputation and makes
                                  it more memorable to consumers. Our mission is
                                  to make your brand synonymous with the your
                                  product. We craft your brand with purpose and
                                  passion.
                                </p>
                              </div>
                            </div>
                            <div className="col-lg-8 mt_md--30 mt_sm--30">
                              <div className="row row--15 mt_dec--30 service-wrapper">
                                {dataList2.map((val, i) => (
                                  <div
                                    className="col-lg-6 col-md-6 col-sm-6 col-12"
                                    key={i}
                                  >
                                    <div className="card-box card-style-1 text-left">
                                      <div className="inner">
                                        <div className="image">
                                          <a href="#service">
                                            <img
                                              src={`${val.image}`}
                                              alt="card Images"
                                            />
                                          </a>
                                        </div>
                                        <div className="content">
                                          <h4 className="title mb--20">
                                            <a href="#service">{val.title}</a>
                                          </h4>
                                          <p className="description b1 color-gray mb--0">
                                            {val.description}
                                          </p>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                ))}
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </TabPanel>
                    <TabPanel>
                      <div className="rn-tab-content">
                        <div className="inner">
                          <div className="row align-items-center row--30">
                            <div className="col-lg-4">
                              <div className="section-title">
                                <h4 className="title">Technology</h4>
                                <p>
                                  Unleashing the power of technology. We
                                  integrate technology into all areas of your
                                  business. We increase efficiency and
                                  productivity by automating manual processes
                                  and streamlining operations. We enhance
                                  customer experience by providing personalized
                                  recommendations and omnichannel shopping.
                                </p>
                              </div>
                            </div>
                            <div className="col-lg-8 mt_md--30 mt_sm--30">
                              <div className="row row--15 mt_dec--30 service-wrapper">
                                {dataList3.map((val, i) => (
                                  <div
                                    className="col-lg-6 col-md-6 col-sm-6 col-12"
                                    key={i}
                                  >
                                    <div className="card-box card-style-1 text-left">
                                      <div className="inner">
                                        <div className="image">
                                          <a href="#service">
                                            <img
                                              src={`${val.image}`}
                                              alt="card Images"
                                            />
                                          </a>
                                        </div>
                                        <div className="content">
                                          <h4 className="title mb--20">
                                            <a href="#service">{val.title}</a>
                                          </h4>
                                          <p className="description b1 color-gray mb--0">
                                            {val.description}
                                          </p>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                ))}
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </TabPanel>
                    <TabPanel>
                      <div className="rn-tab-content">
                        <div className="inner">
                          <div className="row align-items-center row--30">
                            <div className="col-lg-4">
                              <div className="section-title">
                                <h4 className="title">Operations</h4>
                                <p>
                                  Optimizing the journey from source to
                                  delivery. We cover everything from hyperlocal
                                  delivery to global delivery. Right from
                                  finding the right suppliers to find the right
                                  delivery partners, we will provide the most
                                  efficient solutions. We encompass Amazon FBA,
                                  Flipkart, Ajio, Myntra and other marketplace
                                  deliveries as well.
                                </p>
                              </div>
                            </div>
                            <div className="col-lg-8 mt_md--30 mt_sm--30">
                              <div className="row row--15 mt_dec--30 service-wrapper">
                                {dataList4.map((val, i) => (
                                  <div
                                    className="col-lg-6 col-md-6 col-sm-6 col-12"
                                    key={i}
                                  >
                                    <div className="card-box card-style-1 text-left">
                                      <div className="inner">
                                        <div className="image">
                                          <a href="#service">
                                            <img
                                              src={`${val.image}`}
                                              alt="card Images"
                                            />
                                          </a>
                                        </div>
                                        <div className="content">
                                          <h4 className="title mb--20">
                                            <a href="#service">{val.title}</a>
                                          </h4>
                                          <p className="description b1 color-gray mb--0">
                                            {val.description}
                                          </p>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                ))}
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </TabPanel>
                    <TabPanel>
                      <div className="rn-tab-content">
                        <div className="inner">
                          <div className="row align-items-center row--30">
                            <div className="col-lg-4">
                              <div className="section-title">
                                <h4 className="title">Marketing</h4>
                                <p>
                                  Connecting brands and consumers through
                                  innovative storytelling. Our main focus will
                                  be to increase your customer base organically.
                                  We do include creating ad concepts, filming
                                  ads and running multiple campaigns. We often
                                  use conflicts, aspirations and humor to create
                                  a strong emotional connection with your
                                  audience.
                                </p>
                              </div>
                            </div>
                            <div className="col-lg-8 mt_md--30 mt_sm--30">
                              <div className="row row--15 mt_dec--30 service-wrapper">
                                {dataList5.map((val, i) => (
                                  <div
                                    className="col-lg-6 col-md-6 col-sm-6 col-12"
                                    key={i}
                                  >
                                    <div className="card-box card-style-1 text-left">
                                      <div className="inner">
                                        <div className="image">
                                          <a href="#service">
                                            <img
                                              src={`${val.image}`}
                                              alt="card Images"
                                            />
                                          </a>
                                        </div>
                                        <div className="content">
                                          <h4 className="title mb--20">
                                            <a href="#service">{val.title}</a>
                                          </h4>
                                          <p className="description b1 color-gray mb--0">
                                            {val.description}
                                          </p>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                ))}
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </TabPanel>
                    <TabPanel>
                      <div className="rn-tab-content">
                        <div className="inner">
                          <div className="row align-items-center row--30">
                            <div className="col-lg-4">
                              <div className="section-title">
                                <h4 className="title">Metrics Tracking</h4>
                                <p>
                                  Empowering smarter decisions with data-driven
                                  insights. We create several Key Performance
                                  indicators including ROAS, retention rate
                                  etc., to track the company's performance. We
                                  use predictive analytics to spot the upcoming
                                  trends in the market and provide you with a
                                  competitive edge.
                                </p>
                              </div>
                            </div>
                            <div className="col-lg-8 mt_md--30 mt_sm--30">
                              <div className="row row--15 mt_dec--30 service-wrapper">
                                {dataList6.map((val, i) => (
                                  <div
                                    className="col-lg-6 col-md-6 col-sm-6 col-12"
                                    key={i}
                                  >
                                    <div className="card-box card-style-1 text-left">
                                      <div className="inner">
                                        <div className="image">
                                          <a href="#service">
                                            <img
                                              src={`${val.image}`}
                                              alt="card Images"
                                            />
                                          </a>
                                        </div>
                                        <div className="content">
                                          <h4 className="title mb--20">
                                            <a href="#service">{val.title}</a>
                                          </h4>
                                          <p className="description b1 color-gray mb--0">
                                            {val.description}
                                          </p>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                ))}
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </TabPanel>
                  </div>
                </div>
              </div>
            </div>
          </Tabs>
        </div>
      </div>
    </div>
  );
};

export default Approach;
