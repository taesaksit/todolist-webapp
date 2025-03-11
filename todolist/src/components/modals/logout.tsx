import { FC } from "react";
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
  } from "@/components/ui/dialog"
  import { Button } from "@/components/ui/button"; // ใช้ปุ่มจาก Shadcn หรือสร้างปุ่มเอง

type ModalProps = {
  onSubmit: () => void;
  onClose: () => void;
};

export const LogoutModal: FC<ModalProps> = ({ onSubmit, onClose }) => {
  return (
    <Dialog open={true} onOpenChange={(isOpen) => !isOpen && onClose()}>
      <DialogTrigger />
      <DialogContent className="max-w-sm w-full p-6 bg-white rounded-lg shadow-lg">
        <DialogTitle className="text-lg font-semibold text-gray-900">Confirm Logout</DialogTitle>
        <DialogDescription className="mt-2 text-sm text-gray-500">
          Are you sure you want to logout?
        </DialogDescription>
        <div className="mt-4 flex justify-end gap-2">
          {/* Logout Button */}
          <Button
            variant="destructive"
            onClick={onSubmit}
            className="bg-red-600 text-white hover:bg-red-700"
          >
            Logout
          </Button>
          {/* Cancel Button */}
          <Button variant="outline" onClick={onClose} className="hover:bg-gray-200">
            Cancel
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
};
