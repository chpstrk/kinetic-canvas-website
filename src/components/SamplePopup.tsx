
import React from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from '@/components/ui/dialog';

interface SamplePopupProps {
  isOpen: boolean;
  onClose: () => void;
}

export const SamplePopup: React.FC<SamplePopupProps> = ({ isOpen, onClose }) => {
  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="bg-white/95 backdrop-blur-lg border border-white/20 rounded-2xl">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            Sample Landing Page
          </DialogTitle>
          <DialogDescription className="text-gray-600 text-lg mt-4">
            This is a sample landing page, and the button has been added for aesthetics. Thank you for visiting! 😊
          </DialogDescription>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
};
