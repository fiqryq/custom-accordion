import { IExperiment } from "./types";

export const Experiment = ({ onClick, content, title, show }: IExperiment) => {
  return (
    <div>
      <button className="w-full bg-slate-400 p-2" onClick={onClick}>
        {title}
      </button>
      <div hidden={show}>
        <p>{content}</p>
      </div>
    </div>
  );
};
