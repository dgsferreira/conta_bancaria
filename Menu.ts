import readlinesync from 'readline-sync';
import { colors } from './src/util/colors';
import { ContaCorrente } from './src/util/model/ContaCorrente';
import { ContaPoupanca } from './src/util/model/ContaPoupanca';

export function main() {

    let opcao: number;

    const contacorrente: ContaCorrente = new ContaCorrente(2, 123, 1, "Julia", 15000, 1000)
    contacorrente.visualizar();
    contacorrente.sacar(2000);
    contacorrente.visualizar();
    contacorrente.depositar(1000);
    contacorrente.visualizar();

    const contapoupanca: ContaPoupanca = new ContaPoupanca(3, 123, 2, "Anakin", 1000, 10)
    contapoupanca.visualizar();
    contapoupanca.sacar(200);
    contapoupanca.visualizar();
    contapoupanca.depositar(1000);
    contapoupanca.visualizar();

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
                console.log(colors.fg.bluestrong,
                    "\n\nCriar conta\n\n",colors.reset);

                break;
            case 2: 
                console.log(colors.fg.bluestrong,
                    "\n\nListar todas as Contas\n\n",colors.reset);

                break; 
            case 3: 
                console.log(colors.fg.bluestrong,
                    "\n\nConsultar dados da conta - por número\n\n",colors.reset);

                break;
            case 4: 
                console.log(colors.fg.bluestrong,
                    "\n\nAtualizar dados da conta\n\n",colors.reset);

                break;
            case 5: 
                console.log(colors.fg.bluestrong,
                    "\n\nApagar uma conta\n\n",colors.reset);

                break;
            case 6: 
                console.log(colors.fg.bluestrong,
                    "\n\nSaque\n\n",colors.reset);

                break;
            case 7: 
                console.log(colors.fg.bluestrong,
                    "\n\nDepósito\n\n",colors.reset);

                break;
            case 8: 
                console.log(colors.fg.bluestrong,
                    "\n\nTransferência entre contas\n\n",colors.reset);

                break; 
            default: 
                console.log(colors.fg.bluestrong,
                    "\n\nOpção Inválida!\n\n",colors.reset);

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