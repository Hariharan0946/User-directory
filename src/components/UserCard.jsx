import { useState } from "react";

const UserCard = ({ user }) => {
  const [showDetails, setShowDetails] = useState(false);

  // 🛡️ Safety guard (prevents white screen crash)
  if (!user) return null;

  const {
    name = "N/A",
    email = "N/A",
    phone = "N/A",
    website = "",
    company = {},
    address = {},
  } = user;

  return (
    <div className="user-card">
      {/* Basic Info */}
      <h3 className="user-name">{name}</h3>

      <p>
        <strong>Email:</strong> {email}
      </p>

      <p>
        <strong>Phone:</strong> {phone}
      </p>

      {/* Toggle Button */}
      <button
        className="details-btn"
        onClick={() => setShowDetails((prev) => !prev)}
      >
        {showDetails ? "Hide Details" : "Show Details"}
      </button>

      {/* Extra Details */}
      {showDetails && (
        <div className="user-details">
          <p>
            <strong>Website:</strong>{" "}
            {website ? (
              <a href={`https://${website}`} target="_blank" rel="noreferrer">
                {website}
              </a>
            ) : (
              "N/A"
            )}
          </p>

          <p>
            <strong>Company:</strong> {company?.name || "N/A"}
          </p>

          <p>
            <strong>Address:</strong>{" "}
            {address?.street
              ? `${address.street}, ${address.city}`
              : "N/A"}
          </p>
        </div>
      )}
    </div>
  );
};

export default UserCard;
