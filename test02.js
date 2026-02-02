// Made by : ALIF WAEHAYEE
function mergeStudentScores(scoresList) {
    let merge_obj = []
    for (let records of scoresList) {
        for (let record of records) {
            if (merge_obj.length === 0) {
                merge_obj.push({ name: record.name, scores: [record.score], average: 0 });
            } else {
                let found = false;
                for (let i = 0; i < merge_obj.length; i++) {
                    if (merge_obj[i].name === record.name) {
                        found = true
                        merge_obj[i]['scores'].push(record.score)
                    }
                };
                if (!found) {
                    merge_obj.push({ name: record.name, scores: [record.score], average: 0 });
                };
            }
        }
    };
    const result_obj = merge_obj.map((obj) => {
        let sum_score = 0;
        for (let score of obj.scores) {
            sum_score += score
        };
        obj.average = (sum_score/obj.scores.length).toFixed(2)
        return obj;
    })
    return result_obj;
}

const mathScores = [
    { name: 'Alice', score: 85 },
    { name: 'Bob', score: 90 },
    { name: 'Charlie', score: 78 }
]

const scienceScores = [
    { name: 'Alice', score: 92 },
    { name: 'Bob', score: 88 },
    { name: 'David', score: 95 }
]

console.log(mergeStudentScores([mathScores, scienceScores]));
