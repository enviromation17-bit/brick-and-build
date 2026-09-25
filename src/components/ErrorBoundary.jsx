import { Component } from "react";

export default class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  componentDidCatch(error, info) {
    console.error("App error:", error, info);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div style={{ padding: "3rem 1.5rem", maxWidth: 480, margin: "0 auto", fontFamily: "system-ui, sans-serif" }}>
          <h1 style={{ fontSize: "1.5rem", color: "#152A54" }}>Something went wrong</h1>
          <p style={{ color: "#5B6472", marginTop: 12 }}>
            Please refresh the page. If it keeps happening, open the site again from the home page.
          </p>
          <button
            type="button"
            onClick={() => window.location.assign("/")}
            style={{
              marginTop: 20,
              height: 44,
              padding: "0 1.5rem",
              borderRadius: 999,
              border: "none",
              background: "#152A54",
              color: "#fff",
              fontWeight: 700,
              cursor: "pointer",
            }}
          >
            Go to home
          </button>
        </div>
      );
    }
    return this.props.children;
  }
}
