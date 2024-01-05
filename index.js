// code your solution here
const record = [
    { year: "2015", result: "W"},
    { year: "2014", result: "N/A"},
    { year: "2013", result: "L"}
]

const winningYear = superbowlWin(record)

function superbowlWin(record) {
    const winningYear = record.find(entry => entry.result === "W");
    return winningYear ? winningYear.year : undefined;
}
