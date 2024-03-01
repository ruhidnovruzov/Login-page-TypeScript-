import { useState } from "react";
import { MdOutlineVisibilityOff, MdOutlineVisibility } from "react-icons/md";
import { useDispatch } from "react-redux";
import { userInfo } from "../store/user";
import { useSelector } from "react-redux";
import google from '../assets/google.svg'
import facebook from '../assets/facebook.svg'
import apple from '../assets/apple.svg'

const Login: React.FC = () => {
  const [passwordVisible, setPasswordVisible] = useState<boolean>(false);
  const [email, setEmail] = useState<string | number>('');
  const [password, setPassword] = useState<any>('');
  const dispatch = useDispatch();

  const handleLogin = () => {
    dispatch(userInfo({email, password}));
  };

  const handleTogglePassword = () => {
    setPasswordVisible(!passwordVisible);
  };

  const data: any = useSelector((state:any) => state.user);
  console.log(data)
 

  return (
    <div className="flex justify-center relative w-full  sm:block">
      <div className=" w-[90%] mt-[150px] h-fit rounded-[8px] sm:w-[27%] sm:h-[677px] bg-white sm:absolute sm:mt-[50px] sm:ml-[55%] p-8 sm:rounded-t-[15px]">
        <p>WELCOME BACK</p>
        <h3 className="text-[25px]">Log In to your Account</h3>
        <div className="pt-[20px]">
          <fieldset className="border-[1px] border-solid border-[#868686] w-full pl-[10px] mb-[25px] text-[12.8px] h-[56px] rounded-[8px] text-[#868686]">
            <legend>Email</legend>
            <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} className="outline-none pl-[5px] pt-1 w-[90%]" />
          </fieldset>
          <fieldset className="flex border-[1px] border-solid border-[#868686] w-full pl-[10px] pb-[5px] mb-[20px] text-[12.8px] h-[56px] rounded-[8px] text-[#868686]">
            <legend>Password</legend>
            <input
              type={passwordVisible ? 'text' : 'password'}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="outline-none pl-[5px] pt-1 w-[90%]"
            />
            <button onClick={handleTogglePassword}>
              {passwordVisible ? <MdOutlineVisibilityOff className="text-[18px] " /> : <MdOutlineVisibility className="text-[18px]" />}
            </button>
          </fieldset>
          <div className="flex justify-between text-[12px]">
            <div className="flex items-center content-center">
              <input type="checkbox" />
              <label className="ml-1">Remember me</label>
              <br />
            </div>
            <a href="#">Forgot Password?</a>
          </div>
          <button onClick={handleLogin} className="text-white text-[15px] rounded-[8px] bg-black h-[56px] w-full mt-[20px]">CONTINUE</button>
          <div className="pt-[28px] flex justify-between content-center items-center h-[10px]">
            <div className="h-[1px] w-[45%] bg-[#E0E0E0]"></div>
            <p className="text-[#212121]">Or</p>
            <div className="h-[1px] w-[45%] bg-[#E0E0E0]"></div>
          </div>
          <div className="pt-[25px]">
            <button className="h-[56px] w-full pl-[40px] bg-white border-[1px] mb-[10px] rounded-[8px] flex content-center items-center "><img src={google} alt="" /> <span className="text-[12px] ml-[60px]">Log in with Google</span></button>
            <button className="h-[56px] w-full pl-[40px] bg-white border-[1px] mb-[10px] rounded-[8px] flex content-center items-center "><img src={facebook} alt="" /> <span className="text-[12px] ml-[60px]">Log in with Facebook</span></button>
            <button className="h-[56px] w-full pl-[40px] bg-white border-[1px] mb-[10px] rounded-[8px] flex content-center items-center "><img src={apple} alt="" /> <span className="text-[12px] ml-[60px]">Log in with Apple</span></button>
          </div>
          <div className="flex pt-[15px] justify-center w-full gap-1 text-[13px]">
            <p>New User?</p><a href="#" className="underline font-bold">SIGN UP HERE</a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login