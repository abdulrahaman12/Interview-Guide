import { Input } from "@/components/ui/input";

const SearchInput = () => {
  return (
    <div className="space-y-4">
      <div className="flex flex-row items-center gap-4">
        <label htmlFor="" className="font-semibold w-32">
          Text Input:
        </label>
        <Input type="text" placeholder="Text" className="w-[500px]" />
      </div>
      <div className="flex flex-row items-center gap-4">
        <label htmlFor="" className="font-semibold w-32">
          Email Input:
        </label>
        <Input type="email" placeholder="Email" className="w-[500px]" />
      </div>
      <div className="flex flex-row items-center gap-4">
        <label htmlFor="" className="font-semibold w-32">
          Password Input:
        </label>
        <Input type="password" placeholder="Password" className="w-[500px]" />
      </div>
    </div>
  );
};

export default SearchInput;
