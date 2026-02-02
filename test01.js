// Made by : ALIF WAEHAYEE
// หาเลขที่มีความถี่ในการปรากฏตัวมากที่สุดในอาเรย์ และถ้ามีหลายเลขที่มีความถี่เท่ากัน 
// ให้คืนค่าเลขที่มีค่ามากที่สุด พร้อมทั้งตำแหน่งที่เลขนั้นปรากฏในอาเรย์
function findMostFrequentNumber(numbers) {
    let set_numbers = new Set(numbers);
    let freq_numbers = []
    let max_freq = 0;
    for (let num of set_numbers) {
        let count_freq_num = 0;
        for (let n of numbers) {
            if (n == num) {
                count_freq_num += 1;
            }
        }
        if (max_freq <= count_freq_num) {
            max_freq = count_freq_num
            if (!freq_numbers.includes(num)) {
                freq_numbers.push(num)
            }
        }
    }
    let max_num = 0;
    for (let num of freq_numbers) {
        if (num > max_num) {
            max_num = num;
        }
    }
    let positions = []
    for (let i = 0; i < numbers.length; i++) {
        if (numbers[i] == max_num) {
            positions.push(i)
        }
    }
    return {
        number: max_num,
        count: max_freq,
        positions: positions
    }
}

console.log(findMostFrequentNumber([1, 2, 3, 2, 4, 2, 5]));
console.log(findMostFrequentNumber([5, 5, 3, 3, 7, 7]));
console.log(findMostFrequentNumber([10, 20, 10, 30, 10, 20]));