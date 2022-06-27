import React from "react";
import { useNavigate } from "react-router-dom";
const Pack = ({ pack: { amount } }) => {
  const navigate = useNavigate();
  return (
    <div
      onClick={() => navigate(`/recharge/${amount}`)}
      class="card max-w-xs xl:max-w-[200px]  bg-white transform duration-200 hover:bg-[#025AF0] hover:text-white shadow-xl border-2 border-[#025AF0] "
    >
      <div class="card-body items-center text-center ">
        <span class="text-lg font-bold">₹ {amount}</span>
        <button>Pay Now</button>
      </div>
    </div>
  );
};

export default Pack;