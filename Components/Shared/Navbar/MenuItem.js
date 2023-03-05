import { useState } from "react";

function MenuItem({ delay, onClick, children }) {
  const [hover, setHover] = useState(false);

  const handleHover = () => {
    return setHover(!hover);
  };

  const styles = {
    container: {
      opacity: 0,
      animation: "1s appear forwards",
      animationDelay: delay,
    },
    menuItem: {
      fontWeight: "semi-bold",
      fontSize: "17px",
      padding: "1rem 0",
      margin: "0 5%",
      cursor: "pointer",
      color: hover ? "#0D1741" : "#fafafa",
      transition: "color 0.2s ease-in-out",
      animation: "0.5s slideIn forwards",
      animationDelay: delay,
    },
    line: {
      width: "90%",
      height: "1.5px",
      background: "#B0F25C",
      margin: "0 auto",
      animation: "0.5s shrink forwards",
      animationDelay: delay,
    },
  };

  return (
    <div style={styles.container}>
      <div
        style={styles.menuItem}
        onMouseEnter={() => {
          handleHover();
        }}
        onMouseLeave={() => {
          handleHover();
        }}
        onClick={onClick}
      >
        {children}
      </div>
      <div style={styles.line} />
    </div>
  );
}
export default MenuItem;
