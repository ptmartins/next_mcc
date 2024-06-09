 import { fetchResourceGroupsData } from "@/actions/fetchData";
import { Page, Card, Table } from "../../components";

const ResourceGroups = async () => {

    const groups = await fetchResourceGroupsData();

    const actions = [
        {
            type: 'primary',
            label: 'Add'
        },
        {
            type: null,
            label: 'Refresh'
        }
    ];

    const columnsToShow = [
        {
            key: 'name',
            label: 'Application',
            width: '35%'
        },
        {
            key: 'storageService',
            label: 'StorageService',
            width: '65%'
        }
    ];

    return(
        <Page title="Resource groups" actions={ actions }>   
            <Card>
                <Table data={ groups } columns={ columnsToShow }/>
            </Card>
        </Page>
    )
}

export default ResourceGroups;