"use client";

import React, { useState } from "react";
import { type FileItem, initialData } from "~/lib/types";
import { UploadIcon } from "lucide-react";
import { Button } from "~/components/ui/button";
import Breadcrumbs from "~/components/bread-crumbs";
import FileList from "~/components/file-list";

export default function Hero() {
  const [currentFolder, setCurrentFolder] = useState<FileItem[]>([
    { id: "root", name: "My Drive", type: "folder", children: initialData },
  ]);
  const [path, setPath] = useState(["My Drive"]);

  const handleFolderClick = (folder: FileItem) => {
    setCurrentFolder([...currentFolder, folder]);
    setPath([...path, folder.name]);
  };

  const handleBreadcrumbClick = (index: number) => {
    setCurrentFolder(currentFolder.slice(0, index + 1));
    setPath(path.slice(0, index + 1));
  };

  const handleUpload = () => {
    const lastFolder = currentFolder[currentFolder.length - 1]!;

    const newFile: FileItem = {
      id: `${Date.now()}`,
      name: `New File ${(lastFolder.children?.length ?? 0) + 1}.txt`,
      type: "file",
      size: "0 B",
      modified: new Date().toISOString().split("T")[0],
    };

    const updatedFolder: FileItem = {
      ...lastFolder,
      children: [...(lastFolder.children ?? []), newFile],
    };

    setCurrentFolder([...currentFolder.slice(0, -1), updatedFolder]);
  };

  return (
    <div className="p-4">
      <div className="mb-4 flex items-center justify-between">
        <h1 className="text-2xl font-bold">Google Drive Clone</h1>
        <Button onClick={handleUpload} variant="outline">
          <UploadIcon size={16} className="mr-2" />
          Upload
        </Button>
      </div>
      <Breadcrumbs path={path} onNavigate={handleBreadcrumbClick} />
      <div className="rounded-lg border border-gray-700 p-4">
        <FileList
          items={currentFolder[currentFolder.length - 1]!.children ?? []}
          onFolderClick={handleFolderClick}
        />
      </div>
    </div>
  );
}
