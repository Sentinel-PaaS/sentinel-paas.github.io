import michael from "../images/team/mf_headshot_square.jpg";
import brendan from "../images/team/brendan.jpg";
import sam from "../images/team/sam.jpg";
import drew from "../images/team/drew_headshot.png";

import TeamMember from "./TeamMember";

const teamMembers = [
  {
    image: michael,
    name: "Michael Fatigati",
    location: "Austin, TX",
    email: "fatigati.michael@gmail.com",
    linkedin: "https://www.linkedin.com/in/michael-fatigati/",
    github: "https://github.com/MFatigati",
    website: "https://www.michaelfatigati.dev/"
  },
  {
    image: brendan,
    name: "Brendan Leal",
    location: "Southern California",
    email: "leal.brendan@gmail.com",
    linkedin: "https://www.linkedin.com/in/brendan-leal-667694223",
    github: "https://github.com/Brendan-Leal",
    website: "https://www.brendanleal.dev"
  },
  {
    image: sam,
    name: "Samantha Lipari",
    location: "NYC Metropolitan Area",
    email: "samanthalipari@gmail.com",
    linkedin: "https://www.linkedin.com/in/samantha-lipari/",
    github: "https://github.com/samlipari",
    website: "https://www.samanthalipari.com",
  },
  {
    image: drew,
    name: "Drew Sessler",
    location: "Seattle, WA",
    email: "drew.sessler@gmail.com",
    linkedin: "https://www.linkedin.com/in/drew-sessler-3816601b/",
    github: "https://github.com/dsessler7",
    website: "https://www.drewsessler.com/"
  }
];

function OurTeam() {
  return (
    <div id="our-team" className="flex flex-col px-4 bg-gray-900 text-gray-300 text-2xl">
      <div className="px-4 py-16 max-w-7xl xl:max-w-none xl:w-11/12 mx-auto">
        <div className="">
          <h2 className="font-extrabold text-white text-5xl leading-9">Meet our team</h2>
          <p className="mt-8 w-8/12">
            We are currently looking for opportunities. If you liked what you
            saw and want to talk more, please reach out!
          </p>
        </div>
        <ul className="mt-14 flex flex-col gap-4 md:flex-row md:grid md:grid-cols-2 xl:grid-cols-4 md:gap-x-8 md:gap-y-12">
          {teamMembers.map((member, idx) => <TeamMember {...member} key={idx} />)}
        </ul>
      </div>
    </div>
  );
}

export default OurTeam;
