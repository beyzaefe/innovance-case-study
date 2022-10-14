import { useFormik } from "formik";
import React, { useState } from "react";
import Lottie from "lottie-react";
import { useNavigate } from "react-router-dom";
import * as Yup from "yup";
import signInBanner from "../../assets/signInBanner.jpg";
import Button from "../../components/Button";
import Input from "../../components/Input";
import SubTitle from "../../components/SubTitle";
import Title from "../../components/Title";
import Loading from "../../assets/loading.json";
type Props = {};

const SignIn = (props: Props) => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: Yup.object({
      email: Yup.string().email("Invalid email address").required("Required"),
      password: Yup.string()
        .min(3, "The password must be a minimum of 3 characters.")
        .max(20, "The password can be a maximum of 20 characters.")
        .required("Required"),
    }),

    onSubmit: (values) => {
      setLoading(true);
      setTimeout(() => {
        setLoading(false);
        navigate("/dashboard");
      }, 1500);
    },
  });
  return (
    <div className="flex h-screen">
      <div className="flex items-center justify-center w-1/2 h-full ">
        <img
          src={signInBanner}
          alt="signInBanner"
          width={"100%"}
          height="100%"
        />
      </div>
      <div className="flex items-center justify-center w-1/2 h-full">
        <div className="w-2/3">
          <Title>LOGIN</Title>
          <form onSubmit={formik.handleSubmit}>
            <div className="flex flex-col gap-5 mt-5 mb-5">
              <SubTitle htmlFor="email" className=" text-orange">
                E-mail Address
              </SubTitle>
              <Input
                id="email"
                name="email"
                type="email"
                onChange={formik.handleChange}
                value={formik.values.email}
                placeholder="Email adresininizi giriniz"
                error={
                  formik.errors.email && formik.touched.email ? true : false
                }
                errorMessage={formik.errors.email}
              />
            </div>
            <div className="flex flex-col gap-5 mb-5">
              <SubTitle htmlFor="password" className=" text-orange">
                Password
              </SubTitle>
              <Input
                id="password"
                name="password"
                type="text"
                onChange={formik.handleChange}
                value={formik.values.password}
                placeholder="Şifrenizi giriniz"
                error={
                  formik.errors.password && formik.touched.password
                    ? true
                    : false
                }
                errorMessage={formik.errors.password}
              />
            </div>
            <Button type="submit" disabled={!(formik.isValid && formik.dirty)}>
              Sign In
            </Button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
