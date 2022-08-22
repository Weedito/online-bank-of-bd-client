import React from "react";

const MyAccount = () => {
  return (
    <div className="h-11/12">
      <div className="header-bg bg-purple-800 w-cover h-52 z-0 relative mb-96"></div>
      <div className="myProfile z-10 absolute h-20 w-11/12 mx-14 top-36 flex gap-10">
        <div className="profile">
          <div class="card w-96 bg-base-100 shadow-xl">
            <figure class="px-10 pt-10">
              <img
                src="https://placeimg.com/400/225/arch"
                alt="Shoes"
                class="rounded-xl"
              />
            </figure>
            <div class="card-body items-center text-center">
              <h2 class="card-title">Shoes!</h2>
              <p>If a dog chews shoes whose shoes does he choose?</p>
              <div class="card-actions">
                <button class="btn btn-primary">Buy Now</button>
              </div>
            </div>
          </div>
        </div>

        <div className="profile-customize w-full h-screen">
          <div class="w-11]]/12 h-full bg-base-100 shadow-xl rounded-2xl">
            <div class="card-body">
              <h2 class="card-title">Card title!</h2>
              <p>If a dog chews shoes whose shoes does he choose?</p>
              <div class="card-actions justify-end">
                <button class="btn btn-primary">Buy Now</button>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default MyAccount;
