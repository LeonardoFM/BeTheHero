const connection = require('../database/connection');

module.exports = {

    async index(request, response){
        const {page = 1} = request.query;
        const [cont] = await connection('incidents').count();
        console.log(cont);
        const incidents = await connection('incidents')
            .join('ongs','ongs.id','=','incidents.ong_id')
            .limit(5)
            .offset((page-1)*5)
            .select(['incidents.*','ongs.name', 'ongs.email', 'ongs.uf', 'ongs.city', 'ongs.whatsapp']);
        // para retornar o total de incidents no header do response (feito assim em paginação)
        response.header('X-Total-Count',cont['count(*)']); 
        return response.json(incidents);
    },

    async create(request, response){
        const { title, description, value} = request.body;
        //cabeçalho: para pegar informações do contexto da requisição
        const ong_id = request.headers.authorization; //id da ong logada

        const [id] = await connection('incidents').insert({
            title,
            description,
            value,
            ong_id,
        });

        return response.json({ id });
    },

    async delete(request, response){
        const {id} = request.params;
        const ong_id = request.headers.authorization;
        const incidents = await connection('incidents').where('id',id).select('ong_id').first();
        if (incidents.ong_id != ong_id){
            return response.status(401).json({error: 'operation not premitted'}) // sem autorização
        }

        await connection('incidents').where('id',id).delete();
        return response.status(204).send(); //retorno sem conteúdo
    }
};