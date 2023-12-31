import style from './login.module.css';
import Link from 'next/link';
import type { NextPage } from 'next';
import { useFormik } from 'formik';
import * as Yup from 'yup';

const schema = Yup.object().shape({
  email: Yup.string().required('Email is required').email('Invalid email'),
  password: Yup.string().required('Password is required').min(7).max(15),
});

const Login: NextPage = () => {
  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    // Pass the Yup schema to validate the form
    validationSchema: schema,

    // Handle form submission
    onSubmit: async ({ email, password }) => {
      // Make a request to your backend to store the data
    },
  });

  const { errors, touched, values, handleChange, handleSubmit } = formik;

  return (
    <div className={`${style.contain} lg:w-5/6 xl:w-2/3 w-full m-auto`}>
      <h1 className={style.LoginHeader}>WELCOME, PLEASE SIGN IN!</h1>
      <div
        className={`${style.mainContainer} grid lg:grid-cols-2 grid-cols-1 gap-5`}
      >
        <div className={`${style.loginContainer}`}>
          <form onSubmit={handleSubmit} method="POST">
            <h1 className={style.border}>RETURNING CUSTOMER</h1>
            <div>
              {errors.email && touched.email && (
                <span className={`${style.errors} flex justify-end mr-10`}>
                  {errors.email}
                </span>
              )}
              <div
                className={`${style.borderInput} flex  justify-between items-center`}
              >
                <label>Email</label>
                <input
                  className={style.input}
                  type="email"
                  name="email"
                  // required
                  value={values.email}
                  onChange={handleChange}
                />
              </div>
              {errors.password && touched.password && (
                <span className={`${style.errors} flex justify-end mr-10`}>
                  {errors.password}
                </span>
              )}
              <div
                className={`${style.borderInput} flex  justify-between items-center`}
              >
                <label>Password</label>
                <input
                  className={style.input}
                  type="password"
                  name="password"
                  value={values.password}
                  onChange={handleChange}
                />
              </div>
            </div>
            <div className={`${style.borderInput} flex  justify-between`}>
              <div>
                <input
                  type="checkbox"
                  name="remember"
                  value="true"
                  className={style.check}
                />
                <label>Remember me?</label>
              </div>
              <Link href="" className={style.forgetPass}>
                Forgot password?
              </Link>
            </div>
            <div className={style.b}>
              <button type="submit" className={style.Btn}>
                LOG IN
              </button>
            </div>
          </form>
        </div>
        <div className={`${style.signupContainer} `}>
          <h1 className={style.border}>NEW CUSTOMER</h1>
          <div className={style.signupDesc}>
            <p>
              By creating an account on our website, you will be able to shop
              faster, be up to date on an orders status, and keep track of the
              orders you have previously made.
            </p>
          </div>
          <div className={`${style.space} lg:block hidden`}></div>
          <Link href="/register">
            <button className={`${style.Btn} ${style.signBtn}`}>
              REGISTER
            </button>
          </Link>
        </div>
      </div>
      <div className={style.aboutRegister}>
        <h1 className={style.border}>ABOUT LOGIN / REGISTRATION</h1>
        <p className={style.aboutDesc}>
          Put your login / registration information here. You can edit this in
          the admin site.
        </p>
      </div>
    </div>
  );
};

export default Login;
