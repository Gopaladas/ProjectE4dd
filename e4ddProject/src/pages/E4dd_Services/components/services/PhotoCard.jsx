import React from "react";
import { useNavigate } from "react-router-dom";
import "./PhotoCard.css";

const PhotoCard = ({
  photo,
  heading,
  content,
  index,
  isExpanded,
  handleExpand,
}) => {
  const navigate = useNavigate();

  const redirectToPage = (e) => {
    e.stopPropagation();
    switch (heading) {
      case "Drones":
        navigate("/drones");
        break;
      case "Big Data":
        navigate("/bigdata");
        break;
      case "Cyber Security":
        navigate("/cyber");
        break;
      case "AI Businesss Solutions":
        navigate("/ai");
        break;
      case "Database Services":
        navigate("/dbms");
        break;
      case "Software Development":
        navigate("/swd");
        break;
      case "Web & Marketing":
        navigate("/web");
        break;
      case "Managed IT Services":
        navigate("/managedIT");
        break;
      case "Cloud Services":
        navigate("/cloud");
        break;
      case "VOIP Support":
        navigate("/voip");
        break;
      case "IT Consulting and Staffing":
        navigate("/itstaff");
        break;
      case "Machine Learning":
        navigate("/ml");
        break;
      default:
        navigate("/");
    }
  };

  const renderContent = () => {
    if (typeof content === "string" && content.includes(". ")) {
      return (
        <ul>
          {content.split(". ").map((point, idx) => (
            <li key={idx}>{point}</li>
          ))}
        </ul>
      );
    }
    return <p>{content}</p>;
  };

  return (
    <div
      className={`photo-card ${isExpanded ? "expanded" : ""}`}
      onClick={() => handleExpand(index)}
    >
      <img src={photo} alt="Sample Image" className="photo" />
      <div className="headings">{heading}</div>
      <div className={`overlay ${isExpanded ? "show" : ""}`}>
        <br />
        <br />
        <div className={`content ${isExpanded ? "show" : ""}`}>
          {renderContent()}
        </div>
        <div className="view-content-page" onClick={redirectToPage}>
          <b>VIEW</b> {heading} ►
        </div>
      </div>
      <button
        className="expand-btn"
        onClick={(e) => {
          e.stopPropagation();
          handleExpand(index);
        }}
      >
        {isExpanded ? "▼" : "▲"}
      </button>
    </div>
  );
};

export default PhotoCard;