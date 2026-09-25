import { Component } from "react";

export default class AppErrorBoundary extends Component {
  state = { hasError: false };

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  componentDidCatch(error) {
    console.error("Application failed to render", error);
  }

  handleReload = () => {
    window.location.reload();
  };

  render() {
    if (!this.state.hasError) return this.props.children;

    return (
      <main className="app-error" role="alert" aria-live="assertive">
        <div>
          <h1>We are refreshing the website</h1>
          <p>Something interrupted this page. Please try again.</p>
          <button type="button" onClick={this.handleReload}>
            Reload page
          </button>
        </div>
      </main>
    );
  }
}
