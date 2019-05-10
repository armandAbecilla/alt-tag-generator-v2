import React from "react";

const Footer = () => {
  return (
    <div style={footerStyle}>
      <p>
        Alt tag generator V2 | Armand Abecilla | Built with React and
        semantic-ui-react |{" "}
        <a
          href="https://github.com/armandAbecilla/alt-tag-generator-v2"
          target="_blank"
          style={{
            color: "#fff",
            cursor: "pointer",
            textDecoration: "underline"
          }}
        >
          View Source on Github
        </a>
      </p>
    </div>
  );
};

const footerStyle = {
  padding: "40px 120px",
  background: "#272727",
  bottom: 0,
  marginTop: 20,
  marginBottom: 0,
  width: "100%",
  color: "#fff",
  display: "inline-block"
};

export default Footer;
