
const readline = require('readline-sync')
const ascii = require('./src/ascii')
const opn = require("opn")
const gerator = require('./src/menugenerate')
const ddos=require('./src/ddos')
const ownner = { user: "+55 21984191603" }
console.log(ascii.logo())

async function main() {

    console.log(ascii.menu())
    let comand = readline.question('comando: ')
    switch (comand) {
        case '1':
            let number = readline.question("numero: ")
            await opn(`https://wa.me/${number}`)
            console.clear()
            main()
        case '2':
          
            let title = readline.question("titulo: ")
            let rules = []
            let key = 1
            while (key == 1) {
                console.log("☢ adicionar nova regra? ☢\n[1]-sim\n[0]-não")
                key = readline.question("comando: ")
                if (key == 1) {
                    let rule = readline.question("escreva a regra: ")
                    rules.push(rule)
                    console.log(' \u001b[32m regra adicionada \u001b[0m')
                } else {
                    key = 0
                    console.clear()
                }

            }
            console.clear()
             const rulex= await gerator.genemenu(title, rules)
            let alvin=readline.question('numero para enviar: ')
            await opn(`https://api.whatsapp.com/send?phone=${alvin}&text=${rulex}`)
           
            rules.splice(0, rules.length)
            await main()
            break;
        case '3':
            let aviso=readline.question("digite o aviso: ")
            let alvintwo=readline.question('numero para enviar: ')

            let avisopronto=gerator.aviso(aviso)
            await opn(`https://api.whatsapp.com/send?phone=${alvintwo}&text=${avisopronto}`)
           
            await main()
        break
        case '4':
        console.clear()
        console.log(ascii.aviso('Esse recurso foi criado apenas para estudo e testes. Não me responsabilizo por uso indevido. '))
        let alvintree=readline.question('server adress:')    
        await ddos.atack(alvintree)
        break
        case '9':
            let me = ownner.user
            let strig = 'gostei do seu bot man! retaliação domina!'
            await opn(`https://api.whatsapp.com/send?phone=${me}&text=${strig}`)
            console.clear()
            main()


            break;

        case '0':
            console.log("bye")
        break
        default:
            console.clear()
            console.log("\n comando inválido!\n")
           await main()
        break
    }
}

main()