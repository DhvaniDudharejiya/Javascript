function Math_table() {
    let no = prompt("Enter a number", 0)
    for (let cnt = 1; cnt <= 10; cnt++) {
        let ans = no * cnt
        console.log(no,'*', cnt , '=', ans)
    }
}
Math_table()