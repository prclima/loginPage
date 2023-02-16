import style from "./loginPage.module.css";
import login_img from "../../images/login-img.png";

function Login() {
  return (
    <div className={style.wrapper}>
      <div className={style.loginBox}>
        <div className={style.loginImage}>
          <img src={login_img} alt="login" />
        </div>

        <div className={style.loginInput}>
          <h2>Login Title</h2>
          <label>User Name</label>
          <input />

          <label>Password</label>
          <input />

          <button>Go</button>

          <a href="###">Forgot my password</a>
        </div>
      </div>
    </div>
  );
}

export default Login;
