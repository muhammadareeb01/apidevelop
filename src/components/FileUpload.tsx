import { Upload } from 'lucide-react';
import { Button } from './Button';

interface FileUploadProps {
  onFileSelect: (files: FileList) => void;
  accept?: string;
  multiple?: boolean;
}

export function FileUpload({ onFileSelect, accept = '.pdf,image/*', multiple = true }: FileUploadProps) {
  return (
    <div className="relative">
      <input
        type="file"
        className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
        onChange={(e) => e.target.files && onFileSelect(e.target.files)}
        accept={accept}
        multiple={multiple}
      />
      <Button variant="outline" type="button">
        <Upload className="h-4 w-4 mr-2" />
        Upload Files
      </Button>
    </div>
  );
}