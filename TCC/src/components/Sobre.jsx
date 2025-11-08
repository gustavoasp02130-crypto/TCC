import Imagem1 from  '../assets/Galeria.png'
import Imagem2 from  '../assets/estudo.png'
import Imagem3 from  '../assets/calendario.png'
import { Link, Element, animateScroll as scroll } from "react-scroll"

function Sobre() {
  return (
    <>
      <div className="flex flex-col bg-gray-100 justify-center text-center py-8 px-4 md:px-16 lg:px-32">
        <Element name="sobre"></Element>
        <div className="flex justify-center mb-10 text-xl font-semibold">
          <h1>Sobre o Projeto</h1>
        </div>
        <div>
          <span className="text-base my-10 block max-w-4xl mx-auto">
            A <strong>Galeria do Frei</strong> nasceu do desejo de criar um arquivo vivo das experiências compartilhadas em nossa escola. Mais do que um simples repositório de imagens, este projeto representa a memória coletiva de nossa comunidade educacional.
          </span>
        </div>
        <div>
          <div className="flex flex-col md:flex-row my-10 justify-center space-y-6 md:space-y-0 md:space-x-6">
            <div className="flex-col max-w-sm p-6 bg-white border border-gray-300 rounded-lg lg:mx-2  md:mx-auto sm:mx-auto flex items-center">
              <img src={Imagem1} alt="" className="w-20" />
              <h5 className="text-lg my-2">Memórias Preservadas</h5>
              <p className="font-normal text-gray-700 text-base">Cada foto é cuidadosamente catalogada com informações sobre o autor, data e contexto.</p>
            </div>
            <div className="flex-col max-w-sm p-6 bg-white border border-gray-300 rounded-lg lg:mx-2 md:mx-auto sm:mx-auto flex items-center">
              <img src={Imagem2} alt="" className="w-30" />
              <h5 className="text-lg my-2">Comunidade Unida</h5>
              <p className="font-normal text-gray-700 text-base">Alunos de todas as séries contribuem para construir essa história juntos.</p>
            </div>
            <div className="flex-col max-w-sm p-6 bg-white border border-gray-300 rounded-lg lg:mx-2 md:mx-auto sm:mx-auto flex items-center">
              <img src={Imagem3} alt="" className="w-20" />
              <h5 className="text-lg my-2">Organização por Ano</h5>
              <p className="font-normal text-gray-700 text-base">Navegue facilmente pelas memórias organizadas cronologicamente.</p>
            </div>
          </div>
        </div>
        <div>
          <span className="text-base my-5 block max-w-4xl mx-auto text-center">
            Convidamos todos os alunos a participarem ativamente deste projeto, compartilhando momentos que marcaram sua jornada escolar. Juntos, estamos construindo um legado de memórias que permanecerá por gerações.
          </span>
        </div>
      </div>
    </>
  );
}

export default Sobre