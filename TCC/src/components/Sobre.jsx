
function Sobre() {
    return (
        <>
            <div className="flex-col bg-gray-100 justify-center text-center py-8 px-50">
                <div className="flex justify-center mb-5"><h1>Sobre o Projeto</h1></div>
                <div>
                    <span className="text-[11px] my-5">A <strong>Galeria do Frei</strong> nasceu do desejo de criar um arquivo vivo das experiências compartilhadas em nossa escola. Mais do que um simples repositório de imagens, este projeto representa a memória coletiva de nossa comunidade educacional.</span>
                </div>
                <div>
                    <div className="flex my-5">
                        <a href="#" class="block max-w-sm p-6 bg-white border border-gray-300 rounded-lg shadow-xl mx-5">
                            <img src="../assets/Galereia.png" alt="" />
                            <h5 class="text-[12px] my-2">Memórias Preservadas</h5>
                            <p class="font-normal text-gray-700 text-[10px]">Cada foto é cuidadosamente catalogada com informações sobre o autor, data e contexto.</p>
                        </a>
                        <a href="#" class="block max-w-sm p-6 bg-white border border-gray-300 rounded-lg shadow-xl mx-5">
                            <h5 class="text-[12px] my-2">Comunidade Unida</h5>
                            <p class="font-normal text-gray-700 text-[10px]">Alunos de todas as séries contribuem para construir essa história juntos.</p>
                        </a>
                        <a href="#" class="block max-w-sm p-6 bg-white border border-gray-300 rounded-lg shadow-xl mx-5">
                            <h5 class="text-[12px] my-2">Organização por Ano</h5>
                            <p class="font-normal text-gray-700 text-[10px]">Navegue facilmente pelas memórias organizadas cronologicamente.</p>
                        </a>
                    </div>
                </div>
                <div>
                    <span className=" text-[11px] my-5 text-center">Convidamos todos os alunos a participarem ativamente deste projeto, compartilhando momentos que marcaram sua jornada escolar. Juntos, estamos construindo um legado de memórias que permanecerá por gerações.</span>
                </div>
            </div>
        </>
    )
}

export default Sobre