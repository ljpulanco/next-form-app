import "../styles/Footer.css";
export default function Footer() {
    return (
      <footer style={{ 
        padding: "20px", 
        background: "#222", 
        color: "#fff", 
        textAlign: "center"
      }}>
        <p>© {new Date().getFullYear()} MOBILE PHYSICIANS</p>
      </footer>
    );
  }
  