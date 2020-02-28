// metodos: index, show, update, store, destroy
/*
index: listagem de sessoes
store: criar uma sessão
show: listagem de uma única sessão
update: atualizar sessão
destroy: deletar uma sessao
*/
import User from '../models/User';

class SessionCOntroller{
    async store(req, res) {
        const { email } = req.body;

        //Verificando se o usuário existe
        let user = await User.findOne({ email });
        
        if(!user){
            user = await User.create({ email });
        }

        return res.json(user);
    }
}

export default new SessionCOntroller();