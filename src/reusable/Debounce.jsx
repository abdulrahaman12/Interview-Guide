import React, { useEffect, useState } from "react";
import { Input } from "../components/ui/input";
import UseDebounce from "../components/usedebounce/UseDebounce";

const Debounce = () => {
  const [debounce, setDebounce] = useState("");
  const [data, setData] = useState([]);

  const debouncedSearch = UseDebounce(debounce, 1000);

  const handleChange = (e) => {
    setDebounce(e.target.value);
  };

  async function CallApi() {
    const response = await fetch(
      "https://jsonplaceholder.typicode.com/posts?_limit=10"
    );
    const result = await response.json();
    setData(result);
  }

  useEffect(() => {
    CallApi();
  }, []);

  const filteredData = data.filter((fil) =>
    fil.title?.toLowerCase().includes(debouncedSearch.toLowerCase())
  );
  return (
    <div>
      <div className="container flex flex-col gap-2 justify-center items-center">
        <div>
          <Input
            type="text"
            placeholder="Search"
            className="w-[500px] m-2"
            value={debounce}
            onChange={handleChange}
          />
        </div>
        <div>
          {filteredData.map((user, index) => (
            <div key={index} className="p-1">
              {user.title}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Debounce;
