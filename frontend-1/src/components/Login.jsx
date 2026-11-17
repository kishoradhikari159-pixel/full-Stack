import {useForm} from "react-hook-form"
import {Link} from "react-router"
const Login = () => {
  const {
  register,
  handleSubmit,
  formState :{errors},
}= useForm();
  return (
    <div className=' grid lg:grid-cols-2 md:grid-cols-1 sm: grid-cols-1 mb-20'>
      <div className='h-screen w-full'> 
        <img className='h-150 w-full' src="https://mir-s3-cdn-cf.behance.net/project_modules/1400/7a1369160922619.63bd087419f52.png" alt="" />
        </div>

        <div className="pl-15 h-full w-full">
          <form action="" onSubmit={handleSubmit((data)=>console.log(data))}>
            <div className="mt-15 lg:mt-45 md:mt-35 sm:mt-25 ">
              <p className="font-[550] text-2xl">Log into facebook</p>
            <div className="pr-15 mt-15">
              <input className="h-15 w-full pl-2 pr-2 border border-gray-400 rounded-xl hover:border-gray-900"
              {...register("Emailorphone", {required:true})}
              placeholder="Email or phone"

               type="text" />
               {errors.Emailorphone && <p className="text-red-600 text-sm">Enter email or phone</p>}
            </div>

              <div className="pr-15 mt-5">
              <input {...register("password",{required:true})} className="h-15 w-full pl-2 pr-2 border border-gray-400 rounded-xl hover:border-gray-900"
              placeholder="Password"

               type="text" />
               {errors.password && <p className="text-red-600 text-sm">Enter your password</p>}
            </div>
            

            <div className="pr-15 mt-5">
              <Link to="">
              <button className="bg-blue-500 h-10 w-full flex justify-center items-center text-white font-[550] rounded-full cursor-pointer "> Log in </button>
              </Link>
              
              <Link className="h-10 w-full flex justify-center items-center font-medium rounded-full cursor-pointer mt-3" to="">
              Forgot password ?
              </Link>
            </div>

             <div className="pr-15 mt-10">
              <Link to="/Userdetails">
              <button className=" h-10 w-full flex justify-center items-center text-blue-500 rounded-full cursor-pointer font-[550] text-md border border-blue-600"> Create new account </button>
              </Link>
              
            </div>

            </div>
            

          </form>
        </div>
    </div>
  )
}

export default Login