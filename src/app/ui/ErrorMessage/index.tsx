"use client";

import { useEffect, useState } from "react";
import { AlertCircle } from "lucide-react";

type Props = {
  message?: string;
  duration?: number;
};

export default function ErrorMessage({
  message = "Erro ao enviar o formulário. Tente novamente.",
  duration = 5000,
}: Props) {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setVisible(false), duration);
    return () => clearTimeout(timer);
  }, [duration]);

  if (!visible) return null;

  return (
    <div className="fixed top-6 left-1/2 transform -translate-x-1/2 bg-red-600 text-white px-6 py-3 rounded-md shadow-lg z-50 animate-slide-down">
      <div className="flex items-center gap-2">
        <AlertCircle className="w-5 h-5" />
        <span>{message}</span>
      </div>
    </div>
  );
}