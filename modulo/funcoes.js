/*******************************************
 * Autor: Breno Dias Machado
 * data: 24/09/2025
 * Versão: 1.0
 * 
 * Feramentas:
 * 
 * Express
 * cors
 * body-parser
 * 
 * professor: Marcel
*/////////////////////////////////////////////////

const { status } = require('express/lib/response.js')
const dados = require('./contatos.js')

message = {status: false, statuscode: 500, development: 'Breno Dias Machado'}


const getContadosAllDados() {


message = {status: true, statuscode: 200, development: 'Breno Dias Machado', users = []}

    dados.contatos['whats-users'].forEach(item) {
        
        let dadosUser = {}

        dadosUser.id = item.id
        dadosUser.account = item.account
        dadosUser.nickname = item.nickname
        dadosUser.

    }


}



