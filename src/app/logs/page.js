import { fetchLogsData } from "@/actions/fetchData";
import { Card, Page, TabMenu, Table} from '../../components';

export default async function Logs() {

    const logs = await fetchLogsData();

    console.log(logs);

    return(
        <Page title="Logs">
            <Card>

            </Card>
        </Page>
  
    )
}