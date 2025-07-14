"use client";

import { useState } from "react";
import SuccessMessage from "@/app/ui/SucessMessage";
import ErrorMessage from "@/app/ui/ErrorMessage";

export default function BriefingForm() {
  const [form, setForm] = useState({
    empresa: "",
    nome: "",
    telefone: "",
    email: "",
    projeto: "",
    descricao: "",
  });

  const [errors, setErrors] = useState<{ [key: string]: string }>({});
  const [success, setSuccess] = useState(false);
  const [errorGlobal, setErrorGlobal] = useState(false);

  const validate = () => {
    const newErrors: { [key: string]: string } = {};
    Object.entries(form).forEach(([key, value]) => {
      if (!value.trim()) newErrors[key] = "Campo obrigatório";
    });
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    try {
      const res = await fetch("/api/briefing", {
        method: "POST",
        body: JSON.stringify(form),
      });

      if (!res.ok) throw new Error("Erro");

      setForm({
        empresa: "",
        nome: "",
        telefone: "",
        email: "",
        projeto: "",
        descricao: "",
      });
      setSuccess(true);
      setErrors({});
    } catch (e) {
      console.log(e)
      setErrorGlobal(true);
      
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
    setErrors({ ...errors, [e.target.name]: "" });
  };

  return (
    <section className="bg-[#0D1117] min-h-screen px-4 py-16 flex items-center justify-center">
      <form
        onSubmit={handleSubmit}
        className="w-full max-w-xl space-y-6 bg-[#1C2128] p-8 rounded-xl shadow-lg border border-[#2f3e4e]"
      >
        {success && <SuccessMessage message="Briefing enviado com sucesso!" />}
        {errorGlobal && <ErrorMessage message="Erro ao enviar o formulário!" />}

        <h2 className="text-2xl font-bold text-white text-center">Envie seu briefing</h2>

        {[
          { name: "empresa", placeholder: "Empresa" },
          { name: "nome", placeholder: "Nome do responsável" },
          { name: "telefone", placeholder: "Telefone" },
          { name: "email", placeholder: "Email" },
          { name: "projeto", placeholder: "Projeto a ser criado" },
          { name: "descricao", placeholder: "Descreva seu projeto...", textarea: true },
        ].map(({ name, placeholder, textarea }) => (
          <div key={name}>
            {textarea ? (
              <textarea
                name={name}
                value={form[name as keyof typeof form]}
                onChange={handleChange}
                placeholder={placeholder}
                className="w-full bg-[#0D1117] border border-[#2f3e4e] rounded-md px-4 py-3 text-white placeholder-gray-400 min-h-[120px] focus:outline-none focus:ring-2 focus:ring-[#3b82f6]"
              />
            ) : (
              <input
                type="text"
                name={name}
                value={form[name as keyof typeof form]}
                onChange={handleChange}
                placeholder={placeholder}
                className="w-full bg-[#0D1117] border border-[#2f3e4e] rounded-md px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#3b82f6]"
              />
            )}
            {errors[name] && (
              <p className="text-red-500 text-sm mt-1">{errors[name]}</p>
            )}
          </div>
        ))}

        <button
          type="submit"
          className="w-full bg-gradient-to-r from-[#3b82f6] via-[#573BF6] to-[#573BF6] text-white font-semibold py-3 rounded-md hover:scale-105 transition-transform shadow-lg"
        >
          Enviar Briefing
        </button>
      </form>
    </section>
  );
}
