import axios from 'axios';

const buscaEmpresa = axios.create({
    baseURL: 'https://sistema.zmpay.com.br/services/zmchat/buscaEmpresa.php'
})
;

export default buscaEmpresa;