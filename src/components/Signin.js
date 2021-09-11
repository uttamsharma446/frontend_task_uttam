import React from "react";
import Button from "./commonCommonent/Button";
import CustomButton from "./commonCommonent/CustomButton";
import Input from "./commonCommonent/Input";
function Signin() {
  return (
    <div className="main sm:grid-cols-1">
      <div className="form sm:p-4">
        <img className="h-14 mb-3" src="/images/logo.png" />
        <h1 className=" block font-bold text-4xl">Acme Corp.</h1>
        <p className="font-bold py-1">
          Sign in or <span className="text-primary">create an account</span>
        </p>
        <div className="py-4">
          <p className="py-1">Sign in with</p>
          <div className="grid grid-cols-2 gap-x-4 ">
            <CustomButton
              label="Google"
              iconSrc="https://img.icons8.com/color/50/000000/google-logo.png"
            />
            <CustomButton
              iconSrc="https://img.icons8.com/ios-glyphs/50/000000/github.png"
              label="Github"
            />
          </div>
        </div>
        <br />
        <div className="line-with-text ">
          <span className="continue-with-text">Or continue with</span>
        </div>
        <Input label="Email address" name="" placeholder="john.doe@acme.com" />
        <Input label="Password" name="" placeholder="********" />
        <div className="relative mt-7 mb-5 ">
          <input type="checkbox" className="rememberme-checkbox" />{" "}
          <label className="absolute  left-6 sm:text-sm">Remember me</label>
          <span className="absolute right-0 text-primary font-bold sm:text-sm ">
            Forgot your password?
          </span>
        </div>
        <Button label={"Sign in"} />
      </div>

      <div className="sm:hidden hero-image">
        <div
          style={{
            backgroundImage: "url(/images/hero.jpg)",
            width: "100%",
            height: "100vh",
            backgroundSize: "cover",
          }}
        ></div>
      </div>
    </div>
  );
}

export default Signin;
