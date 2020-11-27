import React, { Component } from "react";
const scheduleJson = require('../data/schedule.json')

class Schedule extends Component {
    private getDay() {
        return new Date().getDay() - 1
    }

    public render() {
        return (
            <div>
                <h1>시간표</h1>
                <table>
                    <th><b>월요일</b></th>
                    <th><b>화요일</b></th>
                    <th><b>수요일</b></th>
                    <th><b>목요일</b></th>
                    <th><b>금요일</b></th>
                    <tr>
                        <td>{scheduleJson[0].subject[0].title}</td>
                        <td>{scheduleJson[1].subject[0].title}</td>
                        <td>{scheduleJson[2].subject[0].title}</td>
                        <td>{scheduleJson[3].subject[0].title}</td>
                        <td>{scheduleJson[4].subject[0].title}</td>
                    </tr>
                    <tr>
                        <td>{scheduleJson[0].subject[1].title}</td>
                        <td>{scheduleJson[1].subject[1].title}</td>
                        <td>{scheduleJson[2].subject[1].title}</td>
                        <td>{scheduleJson[3].subject[1].title}</td>
                        <td>{scheduleJson[4].subject[1].title}</td>
                    </tr>
                    <tr>
                        <td>{scheduleJson[0].subject[2].title}</td>
                        <td>{scheduleJson[1].subject[2].title}</td>
                        <td>{scheduleJson[2].subject[2].title}</td>
                        <td>{scheduleJson[3].subject[2].title}</td>
                        <td>{scheduleJson[4].subject[2].title}</td>
                    </tr>
                </table>
            </div>
            
        )
    }
}

export default Schedule