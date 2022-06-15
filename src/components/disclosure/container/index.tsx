import { IContainer } from "../types";

export const DisclosureContainer = ({ children }: IContainer) => {
  console.log(
    "🚀 ~ file: index.tsx ~ line 4 ~ DisclosureContainer ~ children",
    children
  );
  return <div>{children}</div>;
};
