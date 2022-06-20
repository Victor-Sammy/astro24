import React, { useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../firebase.init";
import { useForm } from "react-hook-form";
import useAccount from "../../hooks/useAccount";
import axios from "axios";

const UpdateName = () => {
  //hook form
  const { register, handleSubmit } = useForm({ mode: onchange });
  //user from fire base useAuthState hook
  const [user, loading] = useAuthState(auth);
  const email = user?.email;
  //account hook call
  const { account } = useAccount(user);
  console.log(account);
  const { _id, first_name, last_name, ...rest } = account;
  //state for button toggle
  const [editPersonalInfo, setEditPersonalInfo] = useState(false);
  //if loading
  if (loading) return <p>Loading...</p>;
  //split name
  const splitName = user?.displayName?.split(" ");
  // form handle
  const onSubmit = async (data) => {
    const first_name = data?.first_name || splitName[0];
    const last_name = data?.last_name || splitName[1];
    const UpdateData = { first_name, last_name, ...rest };
    // console.log(UpdateData);
    (async () => {
      const { data } = await axios.put(
        `http://localhost:5000/users/${email}`,
        UpdateData
      );
      console.log(data);
    })();
  };

  return (
    <>
      <div>
        <p className="flex gap-4">
          <span className="text-lg font-semibold">Personal Information</span>
          <button
            onClick={() => setEditPersonalInfo(!editPersonalInfo)}
            className="text-primary"
          >
            {editPersonalInfo ? "Cancel" : "Edit"}
          </button>
        </p>
        <form onSubmit={handleSubmit(onSubmit)} className="flex gap-4 mt-6">
          {/* first name */}
          <input
            {...register("first_name")}
            className="h-12 rounded-sm border-2 pl-4"
            disabled={!editPersonalInfo ? true : false}
            defaultValue={first_name || splitName[0]}
            type="text"
            name="first_name"
          />
          {/* last name */}
          <input
            {...register("last_name")}
            className="h-12 rounded-sm border-2 pl-4"
            disabled={!editPersonalInfo ? true : false}
            defaultValue={last_name || splitName[1]}
            type="text"
          />
          <button
            className={`h-12 rounded-sm px-8 bg-primary text-base-100 ${
              editPersonalInfo ? "block" : "hidden"
            }`}
          >
            SAVE
          </button>
        </form>
      </div>
    </>
  );
};

export default UpdateName;
