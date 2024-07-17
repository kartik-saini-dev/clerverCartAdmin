// 'use client'
import { CldUploadWidget } from "next-cloudinary";
import { Plus, Trash } from "lucide-react";
import Image from "next/image";
import { Button } from "../ui/button";
// import { usePathname } from 'next/navigation'
interface ImageUploadProps {
  value: string[];
  onChange: (value: string[]) => void;
  onRemove: (value: string) => void;
}


const ImageUpload: React.FC<ImageUploadProps> = ({ onChange, onRemove, value }) => {
  const onUpload = (result: any) => {
    if (result.info && Array.isArray(result.info.files)) {
      const uploadedUrls = result.info.files.map((file: any) => file.uploadInfo.secure_url);
      onChange([...value, ...uploadedUrls]);
    } else if (result.info && result.info.secure_url) {
      onChange(result.info.secure_url);
    } else {
      console.error("Unexpected result format:", result);
    }
  };
 
  return (
    <div>
      <div className="mb-4 flex flex-wrap items-center gap-4">
        {value.map((url) => (
          <div key={url} className="relative w-[200px] h-[200px]">
            <div className="absolute top-0 right-0 z-10">
              <Button type="button" onClick={() => onRemove(url)} size="sm" className="bg-red-1 text-white">
                <Trash className="h-4 w-4" />
              </Button>
            </div>
            <Image
              src={url}
              alt="collection"
              className="object-cover rounded-lg"
              fill
            />
        
            {/* {isCollection ?  ( 
            <img
              src={url}
              alt="collection"
              className="object-cover w-[200px] h-[200px] rounded-lg"
            />

            ):(
              <img
              src={url}
              alt="collection"
              className="w-[200px] h-[200px] object-cover rounded-lg"
            />
            )} */}
          
          </div>
        ))}
      </div>

      <CldUploadWidget
        uploadPreset="o8kvmsp2"
        onUpload={onUpload}
    
      >
        {({ open }) => {
          return (
            <Button type="button" onClick={() => open()} className="bg-grey-1 text-white">
              <Plus className="h-4 w-4 mr-2" />
              Upload Images
            </Button>
          );
        }}
      </CldUploadWidget>
    </div>
  );
};

export default ImageUpload;
