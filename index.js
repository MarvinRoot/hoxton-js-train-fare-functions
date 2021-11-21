function calculateTicketPriceForDistance(age, distance){

    const ticketPrice = distance*pricePerKilometer
    const ticketPriceDiscount18 = ticketPrice-((ticketPrice*20)/100)
    const ticketPriceDiscount65 = ticketPrice-((ticketPrice*40)/100)

    if(age < 18){
        alert(`Your ticket price is: £ ${ticketPriceDiscount18.toFixed(2)}`)
    } else if(age > 65) {
        alert(`Your ticket price is: £ ${ticketPriceDiscount65.toFixed(2)}`)
    }else {
        alert(`Your ticket price is: £ ${ticketPrice.toFixed(2)}`)
    }
}

const azkaban = {distance: 23}
const ministryOfMagic = {distance: 88}
const diagonAlley = {distance: 120}
const Hogwarts = {distance: 300}

const pricePerKilometer = 0.21 //TICKET PRICE PER KILOMETER
const age = Number(prompt(`How old are you?`))

//Ticket price if the user wants to visit SIRIUS BLACK 
let destination = confirm("Is your destination Azkaban?\nDistance: 23km")
if (destination) {
    calculateTicketPriceForDistance(age, azkaban.distance)
}else{

    //Ticket price if the user wants to visit CORNELIUS FUDGE
    let destination2 = confirm("Is your destination Ministry of Magic?\nDistance: 88km")
    if (destination2) {
        calculateTicketPriceForDistance(age, ministryOfMagic.distance)
    }else{


        //Ticket price if the user wants to buy a MAGIC STICK or a fuckin FLYING BROOM NIMBUS 2000
        let destination3 = confirm("Is your destination Diagon Alley?\nDistance: 120km")
        if (destination3) {
            calculateTicketPriceForDistance(age, diagonAlley.distance)
        }else{


            //Ticket price if the user wants to be a WIZARD
            let destination4 = confirm("Is your destination Hogwarts?\nDistance: 300km")
            if (destination4) {
                calculateTicketPriceForDistance(age, Hogwarts.distance)
            }else{


                //Ticket price if the user entered the Nine and Three-Quarters Platform by mistake
                if(destination==false && destination2==false && destination3==false && destination4==false) {
                const distance = Number(prompt(`How far are you traveling?`))

                calculateTicketPriceForDistance(age, distance)
                }
            }
        }
    }
}