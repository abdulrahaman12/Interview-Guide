import { Input } from "@/components/ui/input";

const SearchInput = ({
  label,
  type,
  value,
  onChange,
  name,
  placeholder,
  error,
  disabled,
}) => {
  return (
    <div className="flex flex-row items-center gap-4">
      <label htmlFor="" className="font-semibold w-32">
        {label}:
      </label>
      <div>
        <Input
          type={type}
          name={name}
          placeholder={placeholder}
          className="w-[500px]"
          value={value}
          onChange={onChange}
          disabled={disabled}
        />
        {error && <p className="text-red-500 text-sm ml-2">{error}</p>}
      </div>
    </div>
  );
};

export default SearchInput;
