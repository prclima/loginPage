import style from "./loginPage.module.css";
import login_img from "../../images/login-img.png";

function Login() {
  return (
    <>
      <div className={style.wrapper}>
        <div className={style.loginBox}>
          <div className={style.loginImage}>
            <img src={login_img} alt="login" />
          </div>

          <div className={style.loginInput}>
            <h2 className="title">Welcome</h2>
            <label className="label">User Name</label>
            <input className="input" type={"text"} />

            <label className="label">Password</label>
            <input className="input" type="password" />

            <button className="button">SUBMIT</button>

            <div className={style.check}>
              <input type="checkbox" id="remember" name="remember" />
              <label htmlFor="remember">Remember me</label>
              <a href="###">Forgot password?</a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Login;
