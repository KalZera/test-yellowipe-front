import React from "react";

interface LoadingProps {
  message?: string;
  fullScreen?: boolean;
}

export const Loading: React.FC<LoadingProps> = ({
  message = "Carregando...",
  fullScreen = false,
}) => {
  return (
    <div
      className={`flex flex-col items-center justify-center text-gray-500 ${
        fullScreen ? "max-h max-w" : "py-4"
      }`}
    >
      {/* Spinner com Tailwind */}
      <div className="w-8 h-8 border-4 border-gray-300 border-t-primary rounded-full animate-spin mb-2"></div>
      <span className="text-sm">{message}</span>
    </div>
  );
};
