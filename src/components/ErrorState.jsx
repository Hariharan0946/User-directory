const ErrorState = ({ message }) => {
  return (
    <div
      style={{
        minHeight: "60vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        textAlign: "center",
        padding: "20px",
        color: "#b91c1c",
      }}
    >
      <h2>⚠️ Something went wrong</h2>

      <p style={{ margin: "12px 0" }}>
        {message || "Please try again later."}
      </p>

      <button
        onClick={() => window.location.reload()}
        style={{
          marginTop: "10px",
          padding: "8px 14px",
          borderRadius: "8px",
          border: "none",
          cursor: "pointer",
          backgroundColor: "#4f46e5",
          color: "white",
        }}
      >
        Reload Page
      </button>
    </div>
  );
};

export default ErrorState;
