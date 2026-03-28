import {calculateInvestmentResults,formatter} from "../util/investment.js"
export default function Result({input}){
    const result = calculateInvestmentResults(input)
    const initialInvestment = result[0].valueEndOfYear - result[0].interest - result[0].annualInvestment
    return <table id="result">
<thead>
    <tr>
        <th>Year</th>
        <th>Investment Value</th>
        <th>Interest (Year)</th>
        <th>Total Interest</th>
        <th>Invested Capital</th>
    </tr>
</thead>
<tbody>
    {result.map(yearData => {
        const totalIntreast =yearData.valueEndOfYear - yearData.annualInvestment * yearData.year -initialInvestment
        const totalAmountInvested = yearData.valueEndOfYear - totalIntreast
        return <tr key={yearData.year}>
            <td>{yearData.year}</td>
            <td>{formatter.format(yearData.valueEndOfYear)}</td>
            <td>{formatter.format(yearData.interest)}</td>
            <td>{formatter.format(totalIntreast)}</td>
            <td>{formatter.format(totalAmountInvested)}</td>
        </tr>
    })}
</tbody>
    </table>
}