import { useState } from "react";
import Imagem3 from  '../assets/calendario.png'
import { Link, Element, animateScroll as scroll } from "react-scroll"
import { motion } from "framer-motion";


// Dados base (substitua/ou adicione o campo "imagem" se quiser utilizar imagens reais)
<Element name="galeria"></Element>
const fotos = [
    
  { id: 1, titulo: "Interclasse", ano: 2025, autor: "Desconhecido", serie: "1º Ano 3", detalhes: "Informações detalhadas sobre a foto", imagem: Imagem3 },
  { id: 2, titulo: "Feira de profissões", ano: 2025, autor: "Desconhecido", serie: "2º Ano 1", detalhes: "Informações detalhadas sobre a foto", imagem: Imagem3 },
  { id: 3, titulo: "Festa junina", ano: 2025, autor: "Desconhecido", serie: "3º Ano 2", detalhes: "Informações detalhadas sobre a foto", imagem: Imagem3  },
  { id: 4, titulo: "Escalada", ano: 2024, autor: "Desconhecido", serie: "4º Ano 1", detalhes: "Informações detalhadas sobre a foto", imagem: Imagem3  },
  { id: 5, titulo: "Alunos exemplares", ano: 2024, autor: "Desconhecido", serie: "5º Ano 3", detalhes: "Informações detalhadas sobre a foto", imagem: Imagem3  },
  { id: 6, titulo: "Reencontro", ano: 2024, autor: "Desconhecido", serie: "6º Ano 4", detalhes: "Informações detalhadas sobre a foto", imagem: Imagem3  },
  { id: 7, titulo: "Momentos em grupo", ano: 2023, autor: "Desconhecido", serie: "7º Ano 2", detalhes: "Informações detalhadas sobre a foto", imagem: Imagem3  },
  { id: 8, titulo: "Aula Boa", ano: 2023, autor: "Desconhecido", serie: "8º Ano 1", detalhes: "Informações detalhadas sobre a foto", imagem: Imagem3  },
  { id: 9, titulo: "Foto em grupo", ano: 2023, autor: "Desconhecido", serie: "9º Ano 3", detalhes: "Informações detalhadas sobre a foto", imagem: Imagem3  },
];

const anos = ["Todos", ...Array.from(new Set(fotos.map(f => f.ano)))];

export default function Galeria() {
  const [filtroAno, setFiltroAno] = useState("Todos");
  const [fotoAberta, setFotoAberta] = useState(null);

  // Filtra as fotos conforme o ano
  const fotosVisiveis = filtroAno === "Todos" ? fotos : fotos.filter(f => f.ano === filtroAno);

  return (
    
    <div className="flex flex-col min-h-screen items-center  my-8">
      <Element name="galeria"></Element>
      <h1 className="mt-10 mb-2 text-xl font-medium text-gray-800">Galeria de Fotos</h1>

      {/* Filtros no topo */}
      <div className="flex mb-8 space-x-3">
        {anos.map(ano => (
          <button
            key={ano}
            onClick={() => setFiltroAno(ano)}
            className={`min-w-[50px] px-3 py-1 my-5 mx-2 text-sm rounded transition 
              ${filtroAno === ano 
                ? "bg-black text-white" 
                : "bg-gray-200 text-gray-700 hover:bg-gray-300"}`}>
            {ano}
          </button>
        ))}
      </div>

      {/* Grid de cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-7 w-full max-w-5xl justify-items-center">
        {fotosVisiveis.map(foto => (
          <div
            key={foto.id}
            onClick={() => setFotoAberta(foto)}
            className="w-72 h-64 bg-white rounded-xl shadow flex flex-col cursor-pointer transition hover:scale-105"
          >
            <div className="flex-grow bg-blue-400 flex items-center justify-center rounded-t-xl">
                <img src={foto.imagem} alt={foto.titulo} className="w-full h-36 object-cover rounded-t-xl" />
            </div>

            <div className="p-3">
              <div className="font-medium text-gray-900">{foto.titulo}</div>
              <div className="flex items-center text-xs text-gray-600 mt-1">
                <svg className="w-3 h-3 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3M5 11h14M5 19h14m-7-8v8"/></svg>
                {foto.ano}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Modal de expansão */}
{fotoAberta && (
  <motion.div
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    exit={{ opacity: 0 }}
    className="fixed inset-0 z-50 flex items-center justify-center backdrop-blur bg-opacity-50 p-4 md:p-10"
  >
    <motion.div
      initial={{ scale: 0.95, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      exit={{ scale: 0.95, opacity: 0 }}
      transition={{ duration: 0.3, ease: "easeInOut" }}
      className="relative rounded-xl bg-white shadow-xl max-w-3xl w-full p-0 flex flex-col"
    >
      <button
        onClick={() => setFotoAberta(null)}
        className="absolute top-4 right-6 text-2xl text-gray-500 hover:text-black z-10"
      >
        ×
      </button>
      <div
        className="w-full flex items-center justify-center bg-blue-400 rounded-t-xl"
        style={{ height: "500px" }}
      >
        <img
          src={fotoAberta.imagem}
          alt={fotoAberta.titulo}
          className="max-h-[480px] w-full object-contain rounded-t-xl"
        />
      </div>
      <div className="p-6 pb-3">
        <div className="text-lg font-bold text-gray-900">{fotoAberta.titulo}</div>
        <div className="text-sm text-gray-700 mt-1">{fotoAberta.detalhes}</div>
      </div>
      <div className="flex items-center justify-between bg-gray-100 px-6 py-4 rounded-b-xl text-sm text-gray-700">
        <div>
          <div><b>Autor:</b> {fotoAberta.autor}</div>
          <div><b>Data:</b> Desconhecido</div>
        </div>
        <div>
          <div><b>Sala/Série:</b> {fotoAberta.serie}</div>
          <div><b>Ano:</b> {fotoAberta.ano}</div>
        </div>
      </div>
    </motion.div>
  </motion.div>
)}
    </div>
  );
}
