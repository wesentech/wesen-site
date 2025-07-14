"use client";

import { useEffect, useState } from "react";
import { CheckCircle2 } from "lucide-react";

type Props = {
  message?: string;
  duration?: number;
};

export default function SuccessMessage({
  message = "Formulário enviado com sucesso!",
  duration = 5000,
}: Props) {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setVisible(false), duration);
    return () => clearTimeout(timer);
  }, [duration]);

  if (!visible) return null;

  return (
    <div className="fixed top-6 left-1/2 transform -translate-x-1/2 bg-green-600 text-white px-6 py-3 rounded-md shadow-lg z-50 animate-slide-down">
      <div className="flex items-center gap-2">
        <CheckCircle2 className="w-5 h-5" />
        <span>{message}</span>
      </div>
    </div>
  );
}