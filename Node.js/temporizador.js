const { reduceRight } = require('lodash')
const schedule = require('node-schedule')

//dessa forma estou setando uma tarefa para ser feita de 5 em 5 segundos
const tarefa1 = schedule.scheduleJob('*/5 * * * * *', function () {
    console.log('excutando tarefa 1', new Date().getSeconds())
})

// uma função para cancelar a tarefa em 2 segundos
setTimeout(function (){
    tarefa1.cancel()
    console.log("cancelando tarefa 1!")
},20000)


//uma forma de setar valores de um momento que vc queira usar com recorrência
const regra = new schedule.RecurrenceRule()
regra.dayOfWeek = [new schedule.Range(1,5)]
regra.hour = 21
regra.minute = 21

//executando outra tarefa, mas com as regras feitas acima
const tarefa2 = schedule.scheduleJob(regra, function (){
    console.log("executando tarefa 2", new Date().getSeconds())

})