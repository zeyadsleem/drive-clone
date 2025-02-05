import { FileIcon, FolderIcon } from "lucide-react";
import { type FileItem } from "~/lib/types";

const FileList: React.FC<{
  items: FileItem[];
  onFolderClick: (item: FileItem) => void;
}> = ({ items, onFolderClick }) => (
  <table className="w-full">
    <thead>
      <tr className="text-left text-gray-400">
        <th className="py-2">Name</th>
        <th className="py-2">Size</th>
        <th className="py-2">Modified</th>
      </tr>
    </thead>
    <tbody>
      {items.map((item) => (
        <tr key={item.id} className="border-t border-gray-700">
          <td className="py-2">
            <div className="flex items-center">
              {item.type === "folder" ? (
                <FolderIcon size={20} className="mr-2 text-blue-400" />
              ) : (
                <FileIcon size={20} className="mr-2 text-gray-400" />
              )}
              {item.type === "folder" ? (
                <button
                  onClick={() => onFolderClick(item)}
                  className="text-blue-400 hover:underline"
                >
                  {item.name}
                </button>
              ) : (
                <a
                  href={`#file-${item.id}`}
                  className="text-gray-200 hover:underline"
                >
                  {item.name}
                </a>
              )}
            </div>
          </td>
          <td className="py-2 text-gray-400">{item.size && "-"}</td>
          <td className="py-2 text-gray-400">{item.modified && "-"}</td>
        </tr>
      ))}
    </tbody>
  </table>
);

export default FileList;
