export default function Login() {
  return (
    <div style={{ maxWidth: 480, margin: "20px auto" }}>
      <div className="card">
        <h2>Login</h2>
        <div className="form-field">
          <label>Email</label>
          <input type="email" />
        </div>
        <div className="form-field">
          <label>Password</label>
          <input type="password" />
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <button className="btn btn-primary">Sign in</button>
          <a href="/register" className="muted">
            Create an account
          </a>
        </div>
      </div>
    </div>
  );
}
