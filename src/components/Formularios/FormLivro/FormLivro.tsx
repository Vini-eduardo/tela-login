import { useState } from 'react';
import estilo from '../FormLivro/FormLivro.module.css';
import LivroRequests from '../../../fetch/LivroRequests';

function FormLivro() {
    const [formData, setFormData] = useState({
        titulo: '',
        autor: '',
        editora: '',
        anoPublicacao: "",
        isbn: '',
        quantTotal: 0,
        quantDisponivel: 0, 
        valorAquisicao: 0
    });

    // Função para atualizar o state
    const handleChange = (nome: string, valor: string) => {
        setFormData({ ...formData, [nome]: valor });
    };

    const handleSubmit = async (formData: { titulo: string; autor: string; editora: string; anoPublicacao: string; isbn: string; quantTotal: number; quantDisponivel: number; valorAquisicao: number; }) => {
        const resposta = await LivroRequests.enviaFormularioLivro(JSON.stringify(formData));
        if(resposta) {
            alert('Livro cadastrado com sucesso.');
        } else {
            alert('Erro ao cadastrar livro.');
        }
    }

    return (
        <section className={estilo['sec-form-livro']}>
            <h1>Cadastro Livro</h1>
            <form action="post" onSubmit={(e) => { e.preventDefault(); handleSubmit(formData); }}
                    className={estilo['form-livro']}
                >
                    <label htmlFor="">
                        Titulo
                        <input
                            type="text"
                            name="titulo"
                            id="titulo"
                            required
                            minLength={2}
                            onChange={(e) => handleChange("titulo", e.target.value)}
                        />
                    </label>

                    <label htmlFor="">
                        Autor
                        <input
                            type="text"
                            name="autor"
                            id="autor"
                            required
                            minLength={3}
                            onChange={(e) => handleChange("autor", e.target.value)}
                        />
                    </label>

                    <label htmlFor="">
                        Editora
                        <input
                            type="text"
                            name="editora"
                            id="editora"
                            required
                            minLength={3}
                            onChange={(e) => handleChange("editora", e.target.value)}
                        />
                    </label>

                    <label htmlFor="">
                        Ano Publicação
                        <input
                            type="text"
                            name="anoPublicacao"
                            id="anoPublicacao"
                            required
                            minLength={0}
                            onChange={(e) => handleChange("anoPublicacao", e.target.value)}
                        />
                    </label>

                    <label htmlFor="">
                        ISBN
                        <input
                            type="text"
                            name="isbn"
                            id="isbn"
                            minLength={0}
                            onChange={(e) => handleChange("isbn", e.target.value)}
                        />
                    </label>

                    <label htmlFor="">
                        Quant. Total
                        <input
                            type="text"
                            name="quantTotal"
                            id="quantTotal"
                            minLength={0}
                            onChange={(e) => handleChange("quantTotal", e.target.value)}
                        />
                    </label>

                    <label htmlFor="">
                        Quant. Disponível
                        <input
                            type="number"
                            name="quantDisponivel"
                            id="quantDisponivel"
                            minLength={0}
                            onChange={(e) => handleChange("quantDisponivel", e.target.value)}
                        />
                    </label>

                    <label htmlFor="">
                        valor de aquisição
                        <input
                            type="number"
                            name="valorAquisicao"
                            id="valorAquisicao"
                            step={0.01}
                            onChange={(e) => handleChange("quantDisponivel", e.target.value)}
                        />
                    </label>
                <input type="submit" value="ENVIAR" />
            </form>
        </section>
    );
}

export default FormLivro;