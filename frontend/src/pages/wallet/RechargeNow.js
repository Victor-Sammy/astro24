import { Link, useParams } from "react-router-dom";

const RechargeNow = () => {
  const id = useParams();
  console.log(id);
  return (
    <div className="w-[80%] mx-auto h-screen py-28">
      <p className="text-2xl">Payment Details</p>
      <div className="my-3">
        <p className="flex justify-between">
          <span>Total Amount</span>
          <span>₹{id.id}</span>
        </p>
        <p className="flex justify-between my-2">
          <span>Get @ 18%</span>
          <span>₹{parseFloat((id.id * 18) / 100)}</span>
        </p>
        <p className="flex justify-between">
          <span>Total Payable Amount</span>
          <span>₹{parseInt((id.id * 18) / 100) + parseInt(id.id)}</span>
        </p>
      </div>
      <div className="bg-[#025AF0] w-full h-[1.5px]"></div>
      <p className="my-2">
        If you have a Coupon Code,{" "}
        <Link className="text-[#025AF0]" to="/">
          Click here
        </Link>
      </p>
      <div className="bg-[#025AF0] w-full h-[1.5px]"></div>
      <div className="bg-[#025AF0] w-full my-6 rounded-sm text-white flex py-4 justify-center gap-6">
        <svg
          fill="yellow"
          width="40px"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 512 512"
        >
          <path d="M152 0H154.2C186.1 0 215.7 16.91 231.9 44.45L256 85.46L280.1 44.45C296.3 16.91 325.9 0 357.8 0H360C408.6 0 448 39.4 448 88C448 102.4 444.5 115.1 438.4 128H480C497.7 128 512 142.3 512 160V224C512 241.7 497.7 256 480 256H32C14.33 256 0 241.7 0 224V160C0 142.3 14.33 128 32 128H73.6C67.46 115.1 64 102.4 64 88C64 39.4 103.4 0 152 0zM190.5 68.78C182.9 55.91 169.1 48 154.2 48H152C129.9 48 112 65.91 112 88C112 110.1 129.9 128 152 128H225.3L190.5 68.78zM360 48H357.8C342.9 48 329.1 55.91 321.5 68.78L286.7 128H360C382.1 128 400 110.1 400 88C400 65.91 382.1 48 360 48V48zM32 288H224V512H80C53.49 512 32 490.5 32 464V288zM288 512V288H480V464C480 490.5 458.5 512 432 512H288z" />
        </svg>
        <div>
          <p className="text-yellow-500">Bonus:₹101</p>
          <p>Balance in your wallet after recharge:₹300</p>
        </div>
      </div>
      <div className="flex justify-center">
        <button className="bg-[#001446] text-white px-8 py-2 rounded-full">
          Pay Now
        </button>
      </div>
    </div>
  );
};

export default RechargeNow;
