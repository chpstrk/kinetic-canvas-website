
import React from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from '@/components/ui/dialog';

interface SamplePopupProps {
  isOpen: boolean;
  onClose: () => void;
}

export const SamplePopup: React.FC<SamplePopupProps> = ({ isOpen, onClose }) => {
  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="bg-gradient-to-br from-white/95 to-blue-50/95 backdrop-blur-xl border border-white/30 rounded-3xl shadow-2xl max-w-md mx-auto">
        <DialogHeader className="text-center space-y-4">
          <div className="mx-auto w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center mb-4">
            <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          </div>
          
          <DialogTitle className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            Sample Landing Page
          </DialogTitle>
          
          <DialogDescription className="text-gray-700 text-lg leading-relaxed px-4">
            This is a sample landing page, and the button has been added for aesthetics. 
            <br />
            <span className="font-medium text-blue-600">Thank you for visiting!</span> 😊
          </DialogDescription>
          
          <div className="pt-4">
            <button 
              onClick={onClose}
              className="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-8 py-3 rounded-full font-medium shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
            >
              Got it!
            </button>
          </div>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
};
