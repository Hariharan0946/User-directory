const Loader = () => {
  return (
    <div
      style={{
        minHeight: "60vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        color: "#4f46e5",
      }}
    >
      <div
        style={{
          width: "48px",
          height: "48px",
          border: "5px solid #e5e7eb",
          borderTop: "5px solid #4f46e5",
          borderRadius: "50%",
          animation: "spin 1s linear infinite",
        }}
      />

      <p style={{ marginTop: "12px", fontWeight: "500" }}>
        Loading users...
      </p>

      {/* Spinner animation */}
      <style>
        {`
          @keyframes spin {
            to {
              transform: rotate(360deg);
            }
          }
        `}
      </style>
    </div>
  );
};

export default Loader;
