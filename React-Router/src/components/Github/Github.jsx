import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function Github() {
  const { userId } = useParams();
  const [data, setData] = useState({});
  useEffect(() => {
    fetch(`https://api.github.com/users/itz-skeshri`)
      .then((res) => res.json())
      .then((data) => {
        setData(data);
      });
  }, [userId]);

  return (
    <div className="text-center bg-slate-900 text-white my-4 py-5 text-xl font-semibold w-full">
      Github id: {data.login}
      <br />
      followers: {data.followers}
    </div>
  );
}

export default Github;
