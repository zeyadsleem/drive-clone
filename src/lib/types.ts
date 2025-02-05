export interface FileItem {
  id: string;
  name: string;
  type: "file" | "folder";
  children?: FileItem[];
  size?: string;
  modified?: string;
}

export const initialData: FileItem[] = [
  {
    id: "1",
    name: "Documents",
    type: "folder",
    modified: "2023-05-15",
    children: [
      {
        id: "2",
        name: "Resume.pdf",
        type: "file",
        size: "1.2 MB",
        modified: "2023-05-10",
      },
      {
        id: "3",
        name: "Cover Letter.docx",
        type: "file",
        size: "500 KB",
        modified: "2023-05-12",
      },
    ],
  },
  {
    id: "4",
    name: "Photos",
    type: "folder",
    modified: "2023-05-14",
    children: [
      {
        id: "5",
        name: "Vacation.jpg",
        type: "file",
        size: "3.5 MB",
        modified: "2023-05-13",
      },
      {
        id: "6",
        name: "Family",
        type: "folder",
        modified: "2023-05-14",
        children: [],
      },
    ],
  },
  {
    id: "7",
    name: "Project Proposal.pptx",
    type: "file",
    size: "2.1 MB",
    modified: "2023-05-11",
  },
];
