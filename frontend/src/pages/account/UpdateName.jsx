import React, { useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../firebase.init";
import { useForm } from "react-hook-form";
import axios from "axios";
import { useQuery } from "react-query";

const UpdateName = () => {
  //hook form
  const { register, handleSubmit } = useForm({ mode: onchange });
  //user from fire base useAuthState hook
  const [user, loading] = useAuthState(auth);
  const email = user?.email;
  //you should skip code repeat. so we can you use custom hook but when I'm gonna use custom hook it throw me a error. I think I will fix this error later
  const {
    isLoading,
    error,
    data: account,
  } = useQuery("accountData", () =>
    fetch(`http://localhost:5000/users/${user?.email}`).then((res) =>
      res.json()
    )
  );
  // console.log("account", account);
  //------------------------------------
  //state for button toggle
  const [editPersonalInfo, setEditPersonalInfo] = useState(false);
  //if loading
  // form handle
  const onSubmit = async (data) => {
    const { _id, first_name, last_name, ...rest } = account;
    const UpdateData = {
      first_name: data?.first_name,
      last_name: data?.last_name,
      ...rest,
    };
    console.log("updated", UpdateData);
    (async () => {
      const { data } = await axios.put(
        `http://localhost:5000/users/${email}`,
        UpdateData
      );
      console.log(data);
    })();
  };

  //is loading
  if (loading || isLoading) return <p>Loading...</p>;
  //is error
  if (error) {
    console.log(error);
  }

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
            defaultValue={account?.first_name}
            type="text"
          />
          {/* last name */}
          <input
            {...register("last_name")}
            className="h-12 rounded-sm border-2 pl-4"
            disabled={!editPersonalInfo ? true : false}
            defaultValue={account?.last_name}
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
