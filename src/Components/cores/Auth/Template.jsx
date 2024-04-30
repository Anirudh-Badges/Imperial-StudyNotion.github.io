import React, { useState } from "react";

const Template = () => {
  const [loading, setLoading] = useState(false);
  return (
    <div>
      <div className="flex justify-between items-center">
        {loading ? (
          <div className="spinner"></div>
        ) : (
          <div className="mx-auto w-11/12 max-w-maxContent flex lg:flex-row flex-col items-center justify-between gap-8">

            <div>

            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Template;
