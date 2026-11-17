import { useForm } from "react-hook-form"
const Userdetails = () => {
    const {
    register,
    handleSubmit,
    formState:{errors},
} = useForm(); 
  return (
    <div className='ml-90 mr-90 mt-10'>
        <form action="" onSubmit={handleSubmit((data)=>console.log(data))} >

            <div className="flex flex-col h-auto w-full justify-center text-2xl">
                <h1 className="font-[550] 
                tracking-wider ">Get started on Facebook with a Meta Account</h1>
                <p className="text-[15px] tracking-wider mt-1">A Meta Account lets you access multiple Meta technologies, like Facebook, easily and securely.</p>
            </div>

            <div className="mt-4">
                <h1 className="font-[550] text-[20px]">Name</h1>
                <div className="flex gap-10">
                <input className="mt-4 pl-2 pr-2 text-[18px] h-15 w-60 border rounded-xl border-gray-300 hover:border-gray-900 cursor-pointer " type="text"
                placeholder="First name"
                {...register("Firstname",{required:true})}/>

                <input className="mt-4 pl-2 pr-2 text-[18px] h-15 w-60 border rounded-xl border-gray-300 hover:border-gray-900 cursor-pointer " type="text"
                placeholder="Last name"
                {...register("Lastname",{required:true})}/>
                </div>
                {errors.Lastname && <p className="text-red-600 text-sm" >Enter your fullname</p> }
            </div>
            <div>
                 <h1 className=" mt-4 font-[550] text-[20px]">Birthday </h1>
                    <input className="mt-4 pl-2 pr-2 text-[18px] h-15 w-60 border rounded-xl border-gray-300 hover:border-gray-900 cursor-pointer " type="date"
                    {...register("Date"),{required:true}} />
                    {errors.Date && <p className="text-red-600 text-sm" >Enter your DOB</p>}
            </div>
        </form>
    </div>
  )
}

export default Userdetails