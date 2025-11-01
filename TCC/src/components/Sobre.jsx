import Imagem1 from  '../assets/Galeria.png'
import Imagem2 from  '../assets/estudo.png'
import Imagem3 from  '../assets/calendario.png'

function Sobre() {
    return (
        <>
            <div className="flex flex-col bg-gray-100 justify-center text-center py-8 px-50">
                <div className="flex justify-center mb-10 text-xl"><h1>Sobre o Projeto</h1></div>
                <div>
                    <span className="text-base my-10">A <strong>Galeria do Frei</strong> nasceu do desejo de criar um arquivo vivo das experiências compartilhadas em nossa escola. Mais do que um simples repositório de imagens, este projeto representa a memória coletiva de nossa comunidade educacional.</span>
                </div>
                <div>
                    <div className="flex my-10 justify-center">
                        <div class="flex-col max-w-sm p-6 bg-white border border-gray-300 rounded-lg mx-5 flex items-center">
                            <img src={Imagem1} alt="" className='w-[80px]' />
                            <h5 class="text-lg my-2">Memórias Preservadas</h5>
                            <p class="font-normal text-gray-700 text-base">Cada foto é cuidadosamente catalogada com informações sobre o autor, data e contexto.</p>
                        </div>
                        <div class="flex-col max-w-sm p-6 bg-white border border-gray-300 rounded-lg mx-5 flex items-center">
                            <img src={Imagem2} alt="" className='w-[120px]' />
                            <div><h5 class="text-lg my-2">Comunidade Unida</h5></div>
                            <div><p class="font-normal text-gray-700 text-base">Alunos de todas as séries contribuem para construir essa história juntos.</p></div>
                        </div>
                        <div class="flex-col max-w-sm p-6 bg-white border border-gray-300 rounded-lg mx-5 flex items-center">
                            <img src={Imagem3} alt="" className='w-[80px]'/>
                            <h5 class="text-lg my-2">Organização por Ano</h5>
                            <p class="font-normal text-gray-700 text-base">Navegue facilmente pelas memórias organizadas cronologicamente.</p>
                        </div>
                    </div>
                </div>
                <div>
                    <span className=" text-base my-5 text-center">Convidamos todos os alunos a participarem ativamente deste projeto, compartilhando momentos que marcaram sua jornada escolar. Juntos, estamos construindo um legado de memórias que permanecerá por gerações.</span>
                </div>
            </div>
        </>
    )
}

export default Sobre