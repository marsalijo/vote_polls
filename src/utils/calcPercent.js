export default function calcPercent(data) {
    let newData = data;
    
    let totalVotes = data.reduce((acc, cur) => {
        return acc + cur.votes
    }, 0)

    newData = data.map(item => {
        return ({
            ...item,
            percent: ((item.votes/totalVotes)*100).toFixed(2)
        })
    })

    return newData;

}