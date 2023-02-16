import style from "./loginPage.module.css";
import login_img from "../../images/login-img.png";
import useForm from "../../hooks/useForm";
import { useState } from "react";

function Login(props) {
  const [data, setData] = useState();

  const username = useForm();
  const password = useForm();

  const infos = {
    username: username.form,
    password: password.form,
  };

  function HandleData(e) {
    e.preventDefault();
    setData(infos);
  }

  return (
    <>
      <div className={style.wrapper}>
        <div className={style.loginBox}>
          <div className={style.loginImage}>
            <img src={login_img} alt="login" />
          </div>

          <div className={style.loginInput}>
            <form className={style.form}>
              <h2 className="title">Welcome</h2>

              <label htmlFor="username" className="label">
                User Name
              </label>
              <input
                className="input"
                type={"text"}
                name="username"
                id="username"
                {...username}
              />

              <label className="label">Password</label>
              <input
                className="input"
                type="password"
                id="password"
                {...password}
              />

              <button onClick={HandleData} className="button">
                SUBMIT
              </button>
            </form>

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
