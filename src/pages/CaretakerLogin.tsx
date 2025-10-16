export default function CaretakerLogin() {
  return (
    <div className="login-container">
      <div className="card login-form">
        <h2>Caretaker Login</h2>
        <form>
          <div className="form-field">
            <label>Email</label>
            <input type="email" placeholder="Enter your email" />
          </div>
          <div className="form-field">
            <label>Password</label>
            <input type="password" placeholder="Enter your password" />
          </div>
          <div className="form-options">
            <a href="/forgot-password">Forgot Password?</a>
          </div>
          <button type="submit" className="btn btn-primary">Sign in</button>
          <div className="create-account-link">
            <span>Don't have an account? </span>
            <a href="/register">Create an account</a>
          </div>
        </form>
      </div>
    </div>
  );
}
