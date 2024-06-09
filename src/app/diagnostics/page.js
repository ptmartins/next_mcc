import { fetchDiagnosticsData } from "@/actions/fetchData";
import { Page, Card, Table } from "../../components";

const Diagnostics = async () => {

    const diagnostics = await fetchDiagnosticsData();

    const columnsToShow = [
        {
            key: 'name',
            label: 'Name',
            width: '30%'
        },
        {
            key: 'date',
            label: 'Date',
            width: '35%'
        },
        {
            key: 'size',
            label: 'Size',
            width: '35%'
        }
    ];

    return(
        <Page title="Diagnostics">   
            <Card>
                <Table data={ diagnostics } columns={ columnsToShow }/>
            </Card>
        </Page>
    )
}

export default Diagnostics;