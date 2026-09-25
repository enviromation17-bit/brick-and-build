import { Component } from "react";

/**
 * Catches render errors. Resets when `resetKey` changes (use pathname).
 */
export default class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, message: "" };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true, message: error?.message || String(error) };
  }

  componentDidCatch(error, info) {
    console.error("App error:", error, info);
  }

  componentDidUpdate(prevProps) {
    if (prevProps.resetKey !== this.props.resetKey && this.state.hasError) {
      this.setState({ hasError: false, message: "" });
    }
  }

  render() {
    if (this.state.hasError) {
      return (
        <div
          style={{
            minHeight: "50vh",
            display: "grid",
            placeItems: "center",
            padding: "3rem 1.5rem",
            fontFamily: "system-ui, sans-serif",
            background: "#FAF8F3",
          }}
        >
          <div style={{ maxWidth: 480, textAlign: "center" }}>
            <h1 style={{ fontSize: "1.5rem", color: "#152A54", margin: 0 }}>Something went wrong</h1>
            <p style={{ color: "#5B6472", marginTop: 12 }}>
              Please try again. If it keeps happening, refresh the page.
            </p>
            {this.state.message ? (
              <p
                style={{
                  marginTop: 12,
                  fontSize: 12,
                  color: "#9AA3AF",
                  wordBreak: "break-word",
                  fontFamily: "monospace",
                }}
              >
                {this.state.message}
              </p>
            ) : null}
            <div style={{ marginTop: 20, display: "flex", gap: 12, justifyContent: "center", flexWrap: "wrap" }}>
              <button
                type="button"
                onClick={() => this.setState({ hasError: false, message: "" })}
                style={{
                  height: 44,
                  padding: "0 1.5rem",
                  borderRadius: 999,
                  border: "1px solid #152A54",
                  background: "#fff",
                  color: "#152A54",
                  fontWeight: 700,
                  cursor: "pointer",
                }}
              >
                Try again
              </button>
              <button
                type="button"
                onClick={() => window.location.assign("/")}
                style={{
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
          </div>
        </div>
      );
    }
    return this.props.children;
  }
}
