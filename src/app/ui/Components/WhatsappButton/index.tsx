// app/ui/WhatsAppButton.tsx
"use client";

import { MessageCircle } from "lucide-react";

export default function WhatsAppButton() {
  return (
    <a
      href="https://wa.me/5547992217503" // substitua com seu número (ex: 55 + DDD + número)
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Conversar no WhatsApp"
      className="fixed bottom-6 right-6 z-50 bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-lg transition-transform hover:scale-110"
    >
      <MessageCircle className="w-6 h-6" />
    </a>
  );
}
