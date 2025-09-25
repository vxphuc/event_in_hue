// src/App.tsx
import "./App.css";

function App() {
  const CLIENT_ID = "166887652419-s62kck4ve38faoo15ppskn71f982asuf.apps.googleusercontent.com"; // thay bằng Client ID thật
  const REDIRECT_URI = "http://localhost:5000/oauth2/callback"; 
  const SCOPE = "openid email";
  const RESPONSE_TYPE = "code";

  const loginWithGoogle = () => {
    const authUrl = `https://accounts.google.com/o/oauth2/v2/auth?client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URI}&response_type=${RESPONSE_TYPE}&scope=${SCOPE}&access_type=online`;
    window.location.href = authUrl;
  };

  return (
    <div className="App">
      <h2>Đăng nhập bằng Google</h2>
      <button onClick={loginWithGoogle}>Login with Google</button>
    </div>
  );
}

export default App;
