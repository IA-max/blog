import React from 'react'
import P1 from './ydkjs-1.png'
import P2 from './ydkjs-2.jpg'
import P3 from './ydkjs-3.jpg'


export default props => (
    <>
        <h2>You dont Know Js</h2>
        <table className="fixTable">
            <tbody>
                <tr>
                    <td><img src={P1} alt="" /></td>
                    <td><img src={P2} alt="" /></td>
                    <td><img src={P3} alt="" /></td>
                    <td></td>
                    <td></td>
                </tr>
            </tbody>
        </table>
    </>
  )