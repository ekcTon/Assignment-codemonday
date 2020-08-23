import React from 'react'
import '../asset/codestyle.css'
import FetchC from './FetchC'

function ReportC(props) {
    return(
        <div className="container">
            <FetchC />
        </div>
        // <table class="table table-striped">
        //     <thead>
        //         <tr>
        //             <th scope="col">#</th>
        //             <th scope="col">Country</th>
        //             <th scope="col">NewConfirmed</th>
        //             <th scope="col">TotalConfirmed</th>
        //             <th scope="col">NewDeaths</th>
        //             <th scope="col">TotalDeaths</th>
        //             <th scope="col">NewRecovered</th>
        //             <th scope="col">TotalRecovered</th>
        //         </tr>
        //     </thead>
        //     <tbody>
        //         <tr>
        //             <th scope="row">1</th>
        //             <td>{props.listC}</td>
        //             <td>111</td>
        //             <td>222</td>
        //             <td>333</td>
        //             <td>444</td>
        //             <td>555</td>
        //             <td>666</td>
        //         </tr>
        //     </tbody>
        //     </table>
    )
}

export default ReportC