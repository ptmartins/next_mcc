import { fetchApplicationsData } from "@/actions/fetchData";
import { Page, Card, Table } from "../../components";

const Applications = async () => {

    const apps = await fetchApplicationsData();

    const actions = [
        {
            type: 'primary',
            label: 'Add Workflow Editor'
        }
    ];


    const columnsToShow = [
        {
            key: 'name',
            label: 'Application',
            width: '25%'
        },
        {
            key: 'id',
            label: 'Database ID',
            width: '25%'
        },
        {
            key: 'contact',
            label: 'Contact',
            width: '25%'
        },
        {
            key: 'created',
            label: 'Date created',
            width: '25%'
        }
    ];

    return(
        <Page title="Applications" actions= { actions }>   
            <Card>
                <Table data={ apps } columns={ columnsToShow }/>
            </Card>
        </Page>
    )
}

export default Applications;