const FETCH_MATTERS = 'FETCH_MATTERS'

export const fetchMatters = () => {
    return (dispatch) => {
        fetch('http://localhost:3000/api/v1/matters')
        .then(resp => resp.json())
        .then(jsonResp => {
            // dispatch(console.log(jsonResp))
            dispatch({ type: FETCH_MATTERS, payload: jsonResp})
        })    
    }
}


/*

console.log(jsonResp) =
    (4) [{…}, {…}, {…}, {…}]
        0: {id: 1, case_title: "State Farm vs. Jane Doe", lead_attorney: "Matt Z", associate_attorney: "Patrick W", client: "State Farm", …}
        1: {id: 2, case_title: "Save Berkeley's Neighborhoods vs. The Regents of the University of California", lead_attorney: "Winter K.", associate_attorney: "Lauren T.", client: "Save Berkeley's Neighborhoods", …}
        2: {id: 3, case_title: "Alaco vs. JJJJ", lead_attorney: "Richard T", associate_attorney: "Ben G.", client: "Alaco", …}
        3: {id: 4, case_title: "BBB vs. STE", lead_attorney: "Mary J", associate_attorney: "Katrina T.", client: "Safca", …}
        length: 4


*/