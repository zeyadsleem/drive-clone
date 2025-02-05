import { ChevronRightIcon } from "lucide-react";
import React from "react";

const Breadcrumbs: React.FC<{
  path: string[];
  onNavigate: (index: number) => void;
}> = ({ path, onNavigate }) => (
  <div className="mb-4 flex items-center space-x-2 text-sm text-gray-400">
    {path.map((item, index) => (
      <React.Fragment key={index}>
        {index > 0 && <ChevronRightIcon size={16} />}
        <button
          onClick={() => onNavigate(index)}
          className="hover:text-gray-200"
        >
          {item}
        </button>
      </React.Fragment>
    ))}
  </div>
);

export default Breadcrumbs;
