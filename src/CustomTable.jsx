import { Table } from "react-bootstrap"


const CustomTable = ({ data }) => {
    return (

        <Table striped bordered hover>

                <tbody>

                    {data.map((item) => {
                        return (
                            <tr key={item.id}>
                                <th>{item.first_name}</th>
                                <th>{item.last_name}</th>
                                <th>{item.email}</th>
                            </tr>
                        )
                    })}

                </tbody>

        </Table>
           

    )
}
export default CustomTable