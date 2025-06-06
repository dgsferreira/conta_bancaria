import { ContaRepository } from "../repository/ContaRepository";
import { colors } from "../util/colors";
import { Conta } from '../util/model/Conta';


export class ContaController implements ContaRepository { 

    private listaContas: Array<Conta> = new Array<Conta>();
    numero: number =0;

    procurarPorNumero(numero: number): void {
        let buscaConta = this.buscarNoArray(numero);

        if (buscaConta != null) {
            buscaConta.visualizar();
        } else
            console.log(`${colors.fg.red} \nA Conta numero: ${numero}  não foi encontrada. ${colors.reset}`);
    }

    listarTodas(): void {
        for (let conta of this.listaContas) {
            conta.visualizar();
        }
    }

    cadastrar(conta: Conta): void {
        this.listaContas.push(conta);
        console.log(`${colors.fg.bluestrong} "\nA Conta número: ${conta.numero} foi criada com sucesso! ${colors.reset}`);
    }

    atualizar(conta: Conta): void {
        let buscaConta = this.buscarNoArray(conta.numero);

        if (buscaConta != null) {
            this.listaContas[this.listaContas.indexOf(buscaConta)] = conta;
            console.log(`${colors.fg.bluestrong} \nA Conta número: ${conta.numero} foi atualizado com sucesso! ${colors.reset}`)

        } else
            console.log(`${colors.fg.bluestrong} \nA Conta número: ${conta.numero} não foi encontrada! ${colors.reset}`);
    }

    deletar(numero: number): void {
        let buscaConta = this.buscarNoArray(numero);

        if (buscaConta != null) {
            this.listaContas.splice(this.listaContas.indexOf(buscaConta), 1);
            console.log(`${colors.fg.bluestrong} \nA Conta número: ${numero} foi apagada com sucesso! ${colors.reset}`);
        } else 
        console.log(`${colors.fg.bluestrong} \nA Conta número: ${numero} não foi encontrada! ${colors.reset}`);
    }

    public sacar(numero: number, valor: number): void {
        let conta = this.buscarNoArray(numero);

        if (conta != null) {

            if (conta.sacar(valor) == true)
                console.log(`${colors.fg.bluestrong} \nO Saque na Conta número: ${numero} foi efetuado com sucesso! ${colors.reset}`);
        }else 
        console.log(`${colors.fg.bluestrong} \nO Saque na conta número: ${numero} foi efetuado com sucesso! ${colors.reset}`);
    }

    public depositar(numero: number, valor: number): void {
        let conta = this.buscarNoArray(numero);

        if (conta != null) {
            conta.depositar(valor);
            console.log(`${colors.fg.bluestrong} \nO Depósito na Conta número: ${numero} foi efetuado com sucesso! ${colors.reset}`);
        } else
        console.log(`${colors.fg.bluestrong} \n A Conta número: ${numero} não foi encontrada! ${colors.reset}`);
    }

    transferir(numeroOrigem: number, numeroDestino: number, valor: number): void {
        let contaOrigem = this.buscarNoArray(numeroOrigem);
        let contaDestino = this.buscarNoArray(numeroDestino);

        if (contaOrigem != null && contaDestino != null) {
            if (contaOrigem.sacar(valor) == true){
                contaDestino.depositar(valor);
                console.log(`${colors.fg.bluestrong} \nA Transferência da Conta número: ${numeroOrigem} para a Conta numero: ${numeroDestino} foi efetuada com sucesso! ${colors.reset}`);
            }
        }
    }

    /*Métodos Auxiliares*/
    
    /*Gerar número da Conta*/ 
    public gerarNumero(): number {
        return ++ this.numero;
    }

    /*Checa se uma Conta existe*/
    public buscarNoArray(numero: number): Conta | null {

        for (let conta of this.listaContas) {
            if (conta.numero === numero)
                return conta;
        }
        return null;
    }    
}
