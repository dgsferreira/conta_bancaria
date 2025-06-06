import readlinesync from 'readline-sync';
import { colors } from './src/util/colors';
import { ContaCorrente } from './src/util/model/ContaCorrente';
import { ContaPoupanca } from './src/util/model/ContaPoupanca';
import { ContaController } from './src/controller/ContaController';

export function main() {

//Instância da Classe ContaCo0ntroller
let contas: ContaController = new ContaController();

//Variáveis Auxiliares
let opcao, numero, agencia, tipo, saldo, limite, aniversario, valor, numeroDestino: number;
let titular: string;
const tiposContas = ["Conta Corrente", "Conta Poupanca"];

console.log("\nCriar Contas\n");

let cc1: ContaCorrente = new ContaCorrente(contas.gerarNumero(), 123, 1, "João da Silva", 1000, 100.0);
contas.cadastrar(cc1);

let cc2: ContaCorrente = new ContaCorrente(contas.gerarNumero(), 124, 1, "Maria da Silva", 2000, 100.0);
contas.cadastrar(cc2);

let cp1: ContaPoupanca = new ContaPoupanca(contas.gerarNumero(), 125, 2, "Mariana dos Santos", 4000, 12);
contas.cadastrar(cp1);

let cp2: ContaPoupanca = new ContaPoupanca(contas.gerarNumero(), 125, 2, "Juliana Ramos", 8000, 15);
contas.cadastrar(cp2);

contas.listarTodas();


    while (true) {

        console.log(colors.bg.black, colors.fg.redstrong);
        console.log("*****************************************************");
        console.log("                                                     ");
        console.log("                BANCO DO BRAZIL COM Z                ");
        console.log("                                                     ");
        console.log("*****************************************************");
        console.log("                                                     ");
        console.log("            1 - Criar Conta                          ");
        console.log("            2 - Listar todas as Contas               ");
        console.log("            3 - Buscar Conta por Numero              ");
        console.log("            4 - Atualizar Dados da Conta             ");
        console.log("            5 - Apagar Conta                         ");
        console.log("            6 - Sacar                                ");
        console.log("            7 - Depositar                            ");
        console.log("            8 - Transferir valores entre Contas      ");
        console.log("            9 - Sair                                 ");
        console.log("                                                     ");
        console.log("*****************************************************");
        console.log("                                                     ",
        colors.reset);  
        
        console.log("Entre com a opção desejada: ");
        opcao = readlinesync.questionInt("");

        if (opcao == 9) {
            console.log(colors.fg.bluestrong,
                "\nBando do Brazil com Z - O seu futuro começa aqui!");
            sobre();
            console.log(colors.reset, "");
            process.exit(0);
        }

        switch (opcao) {
            case 1: 
                console.log(colors.fg.bluestrong, "\n\nCriar conta\n\n",colors.reset);

                console.log("Digite o Número da agência: ");
                agencia = readlinesync.questionInt("");

                console.log("Digite o Nome do Titular da conta: ");
                titular = readlinesync.question("");

                console.log("\nDigite o tipo da conta: ");
                tipo = readlinesync.keyInSelect(tiposContas, "", {cancel: false}) + 1;

                console.log("\nDigite o Saldo da conta(R$): ");
                saldo = readlinesync.questionFloat("");

                switch (tipo) {
                    case 1:
                        console.log("Digite o Limite da Conta (R$): ");
                        limite = readlinesync.questionFloat("");
                        contas.cadastrar(new ContaCorrente (contas.gerarNumero(), agencia, tipo, titular, saldo, limite)
                        );
                        break;
                    
                    case 2: 
                        console.log("Digite o Dia do aniversário da Conta Poupança: ");
                        aniversario = readlinesync.questionInt("");
                        contas.cadastrar(new ContaPoupanca(contas.gerarNumero(), agencia, tipo, titular, saldo, aniversario));
                        break;
                    }

                Keypress()
                break;

            case 2: 
                console.log(colors.fg.bluestrong, "\n\nListar todas as Contas\n\n",colors.reset);
                
                contas.listarTodas();

                Keypress()    
                break; 

            case 3: 
                console.log(colors.fg.bluestrong,"\n\nConsultar dados da conta - por número\n\n",colors.reset);
                
                console.log("Digite o número da Conta: ");
                numero = readlinesync.questionInt("");
                contas.procurarPorNumero(numero);    

                Keypress()
                break;

            case 4: 
                console.log(`${colors.fg.bluestrong} \n\nAtualizar dados da conta\n\n ${colors.reset}`);

                    console.log("Digite o número da Conta: ");
                    numero = readlinesync.questionInt("")

                    let conta = contas.buscarNoArray(numero);

                    if (conta != null) {
                        
                        console.log("Digite o Número da agência: ");
                        agencia = readlinesync.questionInt("");

                        console.log("Digite o Nome do Titular da conta: ");
                        titular = readlinesync.question("");

                        tipo = conta.tipo;

                        console.log("\nDigite o saldo da conta (R$): ");
                        saldo = readlinesync.questionFloat("");

                        switch (tipo) {    

                            case 1:

                                console.log("Digite o Limite da Conta (R$): ");
                                limite = readlinesync.questionFloat("");
                                contas.atualizar(new ContaCorrente(numero, agencia, tipo, titular, saldo, limite));
                                break;

                            case 2:
                                
                                console.log("Digite o Dia do aniversário da Conta Poupança: ");
                                aniversario = readlinesync.questionInt("");
                                contas.atualizar(new ContaPoupanca(numero, agencia, tipo, titular, saldo, aniversario));
                                break;
                        }    
                    } else {
                        console.log(`${colors.fg.bluestrong} \nA conta número: ${numero} não foi encontrada! ${colors.reset}`);
                    }
                
                Keypress()    
                break;

            case 5: 
                console.log(colors.fg.bluestrong,"\n\nApagar uma conta\n\n",colors.reset);

                console.log("Digite o número da Conta: ");
                numero = readlinesync.questionInt("");
                contas.deletar(numero);

                Keypress()
                break;

            case 6: 
                console.log(`${colors.fg.bluestrong} \n\nSaque\n\n",colors.reset ${colors.reset}`);

                console.log("Digite o número da Conta: ");
                numero = readlinesync.questionInt("");
                
                console.log("\nDigite o valor do Saque (R$): ");
                valor = readlinesync.questionFloat("");

                contas.sacar(numero, valor);

                Keypress()
                break;

            case 7: 
                console.log(`${colors.fg.bluestrong} \n\nDepósito\n\n ${colors.reset} `);

                console.log("Digite o número da Conta: ");
                numero = readlinesync.questionInt("");

                console.log("\nDigite o valor do Depósito: (R$): ");
                valor = readlinesync.questionFloat("");
                
                contas.depositar(numero, valor);

                Keypress()
                break;

            case 8: 
                console.log(`${colors.fg.bluestrong} \n\nTransferência entre contas\n\n ${colors.reset}`);

                console.log("Digite o número da Conta de Origem: ");    
                numero = readlinesync.questionInt("");

                console.log("Digite o número da Conta de Destino: ");
                numeroDestino = readlinesync.questionInt("");
                
                console.log("\nDigite o valor do Depósito (R$): ");
                valor = readlinesync.questionFloat("");

                contas.transferir(numero, numeroDestino, valor);

                Keypress()
                break; 
                
            default: 
                console.log(`${colors.fg.bluestrong} \n\nOpção Inválida!\n\n ${colors.reset}`);

                Keypress()    
                break;               
        }
    }

}



export function sobre(): void {
    console.log("\n*****************************************************");
    console.log("Projeto Desenvolvido por: ");
    console.log("Douglas C. Ferreira - doug_casetta@hotmail.com");
    console.log("https://github.com/dgsferreira");
    console.log("\n*****************************************************");
}

function Keypress(): void {
    console.log(colors.reset, "");
    console.log("\nPressione enter para continuar...");
    readlinesync.prompt();
}

main();