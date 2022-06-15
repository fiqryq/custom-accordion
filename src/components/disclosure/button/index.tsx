import { IButton } from "../types";

export const DisclosureButton = ({ onClick, children }: IButton) => {
  return (
    <button onClick={onClick} className="flex w-full bg-slate-400 p-2">
      {children}
    </button>
  );
};
