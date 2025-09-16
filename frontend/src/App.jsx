import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import React, { useEffect, useState } from 'react';

function Files() {
  const [filenames, setFilenames] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch('http://localhost:8000/files')
      .then((response) => {
        if (!response.ok) throw new Error('Network response was not ok');
        return response.json();
      })
      .then((data) => {
        setFilenames(data);
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });
  }, []);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <div>
      <h1>Files</h1>
      <ul>
        {filenames.map((file, index) => (
          <li key={index}>{file}</li>
        ))}
      </ul>
    </div>
  );
}
function LoginForm({ onClose }) {
  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = e.target;
    const formData = new FormData(form);

    const response = await fetch("http://localhost:8000/login/", {
      method: "POST",
      body: formData,
    });

    if (response.ok) {
      window.location.href = "/";
    } else {
      alert("Giriş başarısız!");
    }
  };

  
  return (
    <div style={{
      position: 'fixed', top: 0, left: 0, width: '100vw', height: '100vh',
      background: 'rgba(0,0,0,0.3)', display: 'flex', alignItems: 'center', justifyContent: 'center'
    }}>
      <form
        onSubmit={handleSubmit}
        style={{ background: 'white', padding: 24, borderRadius: 8, minWidth: 300 }}
      >
        <h2>Giriş Yap</h2>
        <div>
          <label htmlFor="name">Kullanıcı adı: </label>
          <input type="text" name="name" id="name" required />
        </div>
        <div>
          <label htmlFor="password">Şifre: </label>
          <input type="password" name="password" id="password" required />
        </div>
        <div style={{ marginTop: 12 }}>
          <button type="submit">Giriş Yap</button>
          <button type="button" onClick={onClose} style={{ marginLeft: 8 }}>Kapat</button>
        </div>
      </form>
    </div>
  );
}

function RegisterForm({ onClose }) {
  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = e.target;
    const formData = new FormData(form);

    const response = await fetch("http://localhost:8000/register/", {
      method: "POST",
      body: formData,
    });

    if (response.ok) {
      window.location.href = "/";
    } else {
      alert("Kayıt Başarısız!");
    }
  }
  return (
    <div style={{
      position: 'fixed', top: 0, left: 0, width: '100vw', height: '100vh',
      background: 'rgba(0,0,0,0.3)', display: 'flex', alignItems: 'center', justifyContent: 'center'
    }}>
      <form
        onSubmit={handleSubmit}
        style={{ background: 'white', padding: 24, borderRadius: 8, minWidth: 300 }}
      >
        <h2>Giriş Yap</h2>
        <div>
          <label htmlFor="name">Kullanıcı adı: </label>
          <input type="text" name="name" id="name" required />
        </div>
        <div>
          <label htmlFor="password">Şifre: </label>
          <input type="password" name="password" id="password" required />
        </div>
        <div style={{ marginTop: 12 }}>
          <button type="submit">Kayıt Ol</button>
          <button type="button" onClick={onClose} style={{ marginLeft: 8 }}>Kapat</button>
        </div>
      </form>
    </div>
  );
}

function App() {
  const [showLogin, setShowLogin] = useState(false);
  const [showRegister, setShowRegister] = useState(false);

  return (
    <div>
      <button onClick={() => setShowLogin(true)}>Giriş Yap</button>
      {showLogin && <LoginForm onClose={() => setShowLogin(false)} />}
      <button onClick={() => setShowRegister(true)}>Kayıt Ol</button>
      {showRegister && <RegisterForm onClose={() => setShowRegister(false)} />}
    </div>
  );
}
// function App() {
//   const [count, setCount] = useState(0)
//   return (
//     <div>
//       {/* <form action="http://localhost:8000/login" method="post" class="form-example">
//         <div class="form-example">
//           <label for="name">Kullanıcı adı: </label>
//           <input type="text" name="name" id="name" required />
//         </div>
//         <div class="form-example">
//           <label for="email">Şifre : </label>
//           <input type="password" name="password" id="password" required />
//         </div>
//         <div class="form-example">
//           <input type="submit" value="Subscribe!" />
//         </div>
//       </form>

//       <form action="http://localhost:8000/register" method="post" class="form-example">
//         <div class="form-example">
//           <label for="name">Kullanıcı adı: </label>
//           <input type="text" name="name" id="name" required />
//         </div>
//         <div class="form-example">
//           <label for="email">Şifre : </label>
//           <input type="password" name="password" id="password" required />
//         </div>
//         <div class="form-example">
//           <input type="submit" value="kaydol!" />
//         </div>
//       </form>

//       <form action="http://localhost:8000/uploadfile" method="post" class="form-example">
//         <div class="form-example">
//           <label for="dosya">Kullanıcı adı: </label>
//           <input type="file" name="dosya" id="dosya" required />
//         </div>
//         <div class="form-example">
//           <input type="submit" value="Subscribe!" />
//         </div>
//       </form>
//       <table>
//         <li><a href="http://localhost:8000/hello.txt" download>hello.txt</a></li>
//       </table>
//       <Files /> */}
//     </div>

//   )
//   //return (
//   //  <>
//   //    <div>
//   //      <a href="https://vite.dev" target="_blank">
//   //        <img src={viteLogo} className="logo" alt="Vite logo" />
//   //      </a>
//   //      <a href="https://react.dev" target="_blank">
//   //        <img src={reactLogo} className="logo react" alt="React logo" />
//   //      </a>
//   //    </div>
//   //    <h1>Vite + React</h1>
//   //    <div className="card">
//   //      <button onClick={() => setCount((count) => count + 1)}>
//   //        count is {count}
//   //      </button>
//   //      <p>
//   //        Edit <code>src/App.jsx</code> and save to test HMR
//   //      </p>
//   //    </div>
//   //    <p className="read-the-docs">
//   //      Click on the Vite and React logos to learn more
//   //    </p>
//   //  </>
//   //)
// }

export default App
