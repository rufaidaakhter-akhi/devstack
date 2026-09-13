import React from 'react';
import hero from '../assets/banner-stack.png'

const Banner = () => {
    return (
        <div>
            <div className="hero bg-base-200 min-h-screen">
  <div className="hero-content flex-col lg:flex-row-reverse">
    <img
      alt="Tailwind CSS hero component"
      src={hero}
      className="max-w-sm rounded-lg shadow-2xl"
    />
    <div>
      <h1 className="text-5xl font-bold">Build Your Ideal</h1>
      <h1 className="text-5xl font-bold text-blue-500">Development Stack</h1>
      <p className="py-6">Explore frontend, backend, database, and tooling options,<br/>
compare them side by side, and put together the stack that fits your,<br/>
next project.
      </p>
      <button className="btn btn-primary">Get Started</button>
    </div>
  </div>
</div>
        </div>
    );
};

export default Banner;