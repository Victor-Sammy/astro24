import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Pack from "./Pack";

const Wallet = () => {
  // #025AF0  #001446
  const navigate = useNavigate();
  const [packs, setPacks] = useState([]);
  useEffect(() => {
    fetch("packs.json")
      .then((res) => res.json())
      .then((data) => setPacks(data));
  }, []);
  const handlePay = (e) => {
    e.preventDefault();
    const amount = e.target.amount.value;
    navigate(`/recharge/${amount}`);
  };
  return (
    <div className="w-[90%] xl:w-[80%] mx-auto py-28" >
      {/* balance & history section*/}
      <section className="flex justify-between items-center">
        {/* available balance */}
        <div>
          <p className="md:text-2xl text-black">Available Balance</p>
          <h1 className="text-3xl md:text-6xl text-black font-semibold">
            ₹75.63
          </h1>
        </div>
        {/* consultation history */}
        <div>
          <p className="text-[#025AF0] text-xs md:text-xl font-bold">
            Consultation History
          </p>
        </div>
      </section>
      {/* recharge pack */}
      <section className="mt-16">
        {/* section title */}
        <div>
          <h4 className="text-2xl font-bold">Add Money to Wallet</h4>
          <p className="text-lg">Choose from the available recharge pack</p>
        </div>
        <div className="grid  md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 justify-items-stretch gap-8 mt-4">
          {packs.map((pack) => (
            <Pack pack={pack} key={pack.pack} />
          ))}
        </div>
        <div class="divider ">OR</div>
        <form
          onSubmit={handlePay}
          className="flex flex-col md:flex-row justify-center gap-4"
          action=""
        >
          <input
            placeholder="Enter Amount"
            className="border-2 border-[#025AF0] rounded-full h-12 pl-4"
            type="text"
            name="amount"
            required
            id=""
          />
          <button className="h-12 px-8 bg-[#001446] transform duration-200 hover:bg-[#025AF0] text-white rounded-full">
            Pay Now
          </button>
        </form>
      </section>
    </div>
  );
};

export default Wallet;