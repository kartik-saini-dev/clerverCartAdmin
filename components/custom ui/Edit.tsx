// // custom ui/Edit.tsx

// "use client";

// import { useRouter } from "next/navigation";
// import { Button } from "@/components/ui/button";

// interface EditProps {
//   id: string;
//   item: string;
// }

// const Edit = ({ id, item }: EditProps) => {
//   const router = useRouter();

//   const handleEdit = () => {
//     router.push(`/${item}/${id}/edit`);
//   };

//   return (
//     <Button variant="outline" size="sm" onClick={handleEdit}>
//       Edit
//     </Button>
//   );
// };

// export default Edit;

"use client"

import { useState } from "react";
import { Pencil } from "lucide-react";
import { Button } from "../ui/button";
import toast from "react-hot-toast";

interface DeleteProps {
  item: string;
  id: string;
}

const Delete: React.FC<DeleteProps> = ({ item, id }) => {
  const [loading, setLoading] = useState(false);

  const onDelete = async () => {
    try {
      setLoading(true)
      const itemType = item === "product" ? "products" : "collections"
      const res = await fetch(`/api/${itemType}/${id}`, {
        method: "DELETE",
      })

      if (res.ok) {
        setLoading(false)
        window.location.href = (`/${itemType}`)
        toast.success(`${item} deleted`)
      }
    } catch (err) {
      console.log(err)
      toast.error("Something went wrong! Please try again.")
    }
  }
  return (
    <Button className="bg-red-1 text-white">
          <Pencil className="h-4 w-4" />
        </Button>
  );
};

export default Delete;
