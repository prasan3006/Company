import GoalSettingImage from "../../assets/images/process/dart.png";
import ResearchImage from "../../assets/images/process/analysis.png";
import IdeationImage from "../../assets/images/process/idea.png";
import ExecutionImage from "../../assets/images/process/implementation.png";

import execution1 from "../../assets/images/services/execution1.jpg";
import execution2 from "../../assets/images/services/execution2.png";
import goalsetting1 from "../../assets/images/services/goalsetting1.jpg";
import goalsetting2 from "../../assets/images/services/goalsetting2.png";
import ideation1 from "../../assets/images/services/ideation1.jpg";
import ideation2 from "../../assets/images/services/ideation2.png";
import research1 from "../../assets/images/services/research1.jpg";
import research2 from "../../assets/images/services/research2.png";

const Services = [
  {
    icon: GoalSettingImage,
    subtitle: "Goal Setting",
    title: "Identify the right target & pain points",
    description:
      "Understanding the right goal is the most important task. It will also help us target the right customers. Strategy Fox helps you to identify the right target which is ambitious and achievable. We also assist you to solve any specific problem or needs.",
    imgList: [goalsetting1, goalsetting2],
  },
  {
    icon: ResearchImage,
    subtitle: "Research",
    title: "Market research & Data analysis",
    description:
      "The second most important step is to collect data. Strategy Fox does a thorough research of the market, customers, economy, competitors and industry trends using qualitative and quantitative research methods and comes up with valuable insights.",
    imgList: [research1, research2],
  },
  {
    icon: IdeationImage,
    subtitle: "Ideation",
    title: "Create innovative & cost effective ideas",
    description:
      "Ideas are everywhere. But a great idea is one that is innovative, actionable and practical, potentially low cost to implement and sustainable. At Strategy Fox, we use “hypothesis driven” and “bottom-up” approaches to tailor our ideas exclusively for you.",
    imgList: [ideation1, ideation2],
  },
  {
    icon: ExecutionImage,
    subtitle: "Execution",
    title: "Execute & track the performance",
    description:
      "Any idea is best only when it is successfully implemented. Strategy Fox stays throughout the implementation process and also works with third parties (if necessary) to execute our ideas perfectly. We also closely track the success metrics.",
    imgList: [execution1, execution2],
  },
];

export default Services;
