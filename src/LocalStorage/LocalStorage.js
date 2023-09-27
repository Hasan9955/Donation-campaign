const getStoredCards = () => {
    const storedCard = localStorage.getItem('donated-cards')
    if(storedCard){
        return JSON.parse(storedCard)
    }
    return [];
}


const saveCard = id => {
    const storedCards = getStoredCards()
    const exists = storedCards.find(jobId => jobId === id)
    if(!exists){
        storedCards.push(id)
        localStorage.setItem('donated-cards', JSON.stringify(storedCards))
    }
}

export {getStoredCards, saveCard}