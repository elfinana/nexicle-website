export interface UpdateItem {
  id: string;
  title: string;
  date: string;
  category: string;
  paragraphs: string[];
  image: string;
}

export const updates: UpdateItem[] = [
  {
    id: "1",
    image: "detail1-nvidia-badge",
    title: "Nexicle Joins NVIDIA Inception Program",
    date: "April, 2026",
    category: "UPDATES",
    paragraphs: [
      "Nexicle has been selected as a member of the NVIDIA Inception Program, a global initiative supporting startups building on AI and GPU-accelerated technology. As part of the program, Nexicle gains access to NVIDIA's technical resources and infrastructure to advance its VLM and State Machine-based Procedure AI engine.",
      "Real-time procedure evaluation depends on processing first-person video fast enough to deliver feedback within seconds, not minutes. As Nexicle's platform scales to support more concurrent users and more complex procedures, access to NVIDIA's GPU infrastructure and technical guidance becomes a key part of keeping that evaluation both fast and accurate. Being recognized by NVIDIA also serves as third-party validation of Nexicle's underlying AI architecture, an important signal for enterprise and institutional partners evaluating the technology.",
    ],
  },
  {
    id: "2",
    image: "detail2-hero-photo",
    title: "Nexicle Selected for Android XR Developer Catalyst Program",
    date: "July 25, 2026",
    category: "UPDATES",
    paragraphs: [
      "Nexicle has been selected for Google's Android XR Developer Catalyst Program, joining a limited group of developers building early applications for the Android XR ecosystem. Through the program, Nexicle is developing and testing Procedure AI on Xreal's Aura device ahead of its public launch.",
      "As major hardware makers move to launch consumer and enterprise AR glasses this year, having early access to next-generation devices allows Nexicle to build and validate its platform before these devices reach the broader market. This early access also strengthens Nexicle's position within the Android XR ecosystem, one of the platforms expected to shape how enterprise XR applications are built and distributed going forward.",
    ],
  },
  {
    id: "3",
    image: "detail-mou-badge",
    title: "Nexicle Signs MOU with Kyung Hee University College of Nursing",
    date: "April, 2026",
    category: "UPDATES",
    paragraphs: [
      "Nexicle has signed a Memorandum of Understanding with Kyung Hee University's College of Nursing to bring Procedure AI into nursing skills education. The partnership focuses on applying real-time, evidence-based evaluation to clinical training scenarios.",
      "Nursing education has long relied on instructors individually observing each student's technique, a method that becomes difficult to scale as class sizes grow and evaluation standards vary between instructors. Through this partnership, Kyung Hee University is applying Procedure AI to real nursing skills training, providing an early, real-world test of how objective, data-driven evaluation can complement instructor-led education. The collaboration also gives Nexicle direct clinical feedback to refine its evaluation models for healthcare-specific procedures.",
    ],
  },
  {
    id: "4",
    image: "detail4-photo-1",
    title: "Nexicle Exhibits at Smart Tech Korea",
    date: "April, 2026",
    category: "UPDATES",
    paragraphs: [
      "Nexicle presented Procedure AI at Smart Tech Korea, one of Korea's leading technology exhibitions, showcasing its real-time procedural evaluation platform to hospitals, universities, and manufacturers.",
      "The exhibition gave Nexicle the opportunity to demonstrate Procedure AI directly to decision-makers across healthcare, education, and manufacturing, industries where procedural accuracy has a direct impact on safety and quality. Conversations at the event have led to a growing pipeline of proof-of-concept discussions, reflecting real demand for objective, evidence-based procedure evaluation across multiple sectors.",
    ],
  },
  {
    id: "5",
    image: "detail5-photo-1",
    title: "Nexicle Advances International Collaboration with Scotland Development International",
    date: "April, 2026",
    category: "UPDATES",
    paragraphs: [
      "Nexicle is progressing its European market entry through active engagement with Scotland Development International, working toward a European base of operations. The collaboration spans four key initiatives: an Interface-facilitated academic-industry partnership connecting Nexicle with companies, universities, and research institutions across Scotland, spanning 16 universities; localization support through the Scottish Inward Investment Catalyst Fund; joint development of a national R&D hub for digital healthcare innovation with the Digital Health & Care Innovation Centre (DHI); and participation in Scotland Innovates, a platform connecting Scottish innovation products with global partners.",
      "Entering a new market as a technology startup typically means starting from zero, without local relationships, without an understanding of the regulatory landscape, and without a foothold in the region's research and industry networks. Scotland Development International's support gives Nexicle a structured path into the European market, connecting the company directly with universities and companies already active in healthcare and XR-adjacent research, rather than building those relationships independently from scratch. The partnership with DHI, in particular, positions Nexicle within Scotland's broader push to establish itself as a hub for digital healthcare innovation, an area directly aligned with Nexicle's own focus on healthcare procedure evaluation. Together, these initiatives mark a concrete step in Nexicle's plan to establish a genuine, locally embedded presence in Europe, rather than a remote sales operation.",
    ],
  },
];
