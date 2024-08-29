import { Link } from "react-router-dom";

function Index() {
    return(
		<>
			<section>
				<h2>Pagina inicial</h2>

                <p><a href="#basePagina">Desce  para o final da pagina</a></p>

				<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus corrupti nemo consequuntur in temporibus. Esse eligendi error voluptatem omnis voluptatum illo aperiam, natus mollitia accusantium et officia dolor. Nostrum, dolorem. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Odit blanditiis ex suscipit tempora, nihil minima quos hic beatae enim harum labore sit id, quibusdam voluptatem rerum, possimus porro ab molestiae?</p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus corrupti nemo consequuntur in temporibus. Esse eligendi error voluptatem omnis voluptatum illo aperiam, natus mollitia accusantium et officia dolor. Nostrum, dolorem. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Odit blanditiis ex suscipit tempora, nihil minima quos hic beatae enim harum labore sit id, quibusdam voluptatem rerum, possimus porro ab molestiae?</p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus corrupti nemo consequuntur in temporibus. Esse eligendi error voluptatem omnis voluptatum illo aperiam, natus mollitia accusantium et officia dolor. Nostrum, dolorem. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Odit blanditiis ex suscipit tempora, nihil minima quos hic beatae enim harum labore sit id, quibusdam voluptatem rerum, possimus porro ab molestiae?</p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus corrupti nemo consequuntur in temporibus. Esse eligendi error voluptatem omnis voluptatum illo aperiam, natus mollitia accusantium et officia dolor. Nostrum, dolorem. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Odit blanditiis ex suscipit tempora, nihil minima quos hic beatae enim harum labore sit id, quibusdam voluptatem rerum, possimus porro ab molestiae?</p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus corrupti nemo consequuntur in temporibus. Esse eligendi error voluptatem omnis voluptatum illo aperiam, natus mollitia accusantium et officia dolor. Nostrum, dolorem. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Odit blanditiis ex suscipit tempora, nihil minima quos hic beatae enim harum labore sit id, quibusdam voluptatem rerum, possimus porro ab molestiae?</p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus corrupti nemo consequuntur in temporibus. Esse eligendi error voluptatem omnis voluptatum illo aperiam, natus mollitia accusantium et officia dolor. Nostrum, dolorem. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Odit blanditiis ex suscipit tempora, nihil minima quos hic beatae enim harum labore sit id, quibusdam voluptatem rerum, possimus porro ab molestiae?</p>

                <li><Link to="/contato">Contaot</Link></li>

                <p><a href="#" id="basePagina">Voltar ao topo</a></p>

                <p><a href="http://www.google.com" id="basePagina">Ir para a pagina do Google</a></p>
            </section>
		</>
    );
}

export default Index;