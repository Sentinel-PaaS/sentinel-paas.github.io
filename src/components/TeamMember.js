import emailIcon from "../images/icons/email.svg";
import websiteIcon from "../images/icons/website.svg";
import githubIcon from "../images/icons/github.svg";
import linkedinIcon from "../images/icons/linkedin.svg";

function TeamMember({ image, name, location, email, linkedin, github, website }) {
  return (
    <li className="flex flex-col bg-gray-800 rounded-xl py-9 px-4 text-center">
      <img className="mx-auto h-48 w-48 rounded-full xl:w-56 xl:h-56 lazy" src={image} alt="" />
      <div>
        <div>
          <h3 className="text-white mt-9">{name}</h3>
          <p className="text-green-300 my-3">{location}</p>
        </div>
        <ul className="bg-white-100 mx-auto mt-6 flex w-48 justify-between items-center">
          <li>
            <a href={`mailto:${email}`} target="_blank"><img className="w-8" src={emailIcon} alt="email icon" /></a>
          </li>
          <li>
            <a href={linkedin} target="_blank"><img className="w-6" src={linkedinIcon} alt="linkedin icon" /></a>
          </li>
          <li>
            <a href={github} target="_blank"><img className="w-8" src={githubIcon} alt="github icon" /></a>
          </li>
          <li>
            <a href={website} target="_blank"><img className="w-8" src={websiteIcon} alt="website icon" /></a>
          </li>
        </ul>
      </div>
    </li>
  );
}

export default TeamMember;
