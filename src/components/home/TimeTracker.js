import React from "react"
import styled from "styled-components"

import {EmployeeTimeTracking} from "@globals/constants"


export default function TimeTracker() {
  const {billable, training, pto} = EmployeeTimeTracking
  const remainingTraining = training.totalHours - training.currentHours

  return (
    <Container>
      <table>
        <tr>
          <th colSpan="2">Target Hours</th>
          <th colSpan="2">Growth Time</th>
          <th colSpan="2">PTO</th>
        </tr>
        <tr>
          <td>Current Hours: </td>
          <td>{billable.currentHours}</td>
          <td>Hours Used: </td>
          <td>{training.currentHours}</td>
          <td>Hours Used: </td>
          <td>{pto.hoursUsed}</td>
        </tr>
        <tr>
          <td>Target Hours: </td>
          <td>{billable.currentTarget}</td>
          <td>Hours Remaining: </td>
          <td>{remainingTraining}</td>
          <td>Hours Remaining: </td>
          <td>{pto.hoursRemaining}</td>
        </tr>
        <tr>
          <td>Total Target: </td>
          <td>{billable.totalTarget}</td>
          <td>Total Growth: </td>
          <td>{training.totalHours}</td>
          <td>Hours not yet accrued: </td>
          <td>{pto.hoursNotAccrued}</td>
        </tr>
      </table>
    </Container>
  )
}

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  table {
    width: 100%;
  }
`
