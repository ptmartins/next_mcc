import { fetchDatabasesData } from '@/actions/fetchData';
import { Page, Card, Table } from '../../components';

const Databases = async () => {

    const databases = await fetchDatabasesData();

    const actions = [
        {
            type: 'primary',
            label: 'Add'
        }
    ];

    const columnsToShow = [
        {
            key: 'id',
            label: 'ID',
            width: '50px'
        },
        {
            key: 'name',
            label: 'Name',
            width: '100%'
        },
        {
            key: 'type',
            label: 'Type',
            width: '200px'
        },
        {
            key: 'solr_status',
            label: 'SOLR',
            width: '160px'
        }
    ];

    return(
        <Page title="Databases" actions={ actions }>
            <Card>
                <Table data={ databases } columns={ columnsToShow } />
            </Card>
        </Page>
    )
}

export default Databases;