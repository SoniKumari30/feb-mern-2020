function frequency(char){
    //type code here
        const result = ''
        for (let i=0;i<char.length;i++) {
            if (result.includes(char)) {
                result[char] = result[char] + 1
            }
            else {
                result[char] = 1
            }
        }
        return result
    }
    console.log (frequency('abca'))