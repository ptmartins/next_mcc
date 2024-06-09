import { fetchToolsData } from "@/actions/fetchData";
import { Card, Page, Input, Button } from "../../components";
import { IoMdDownload } from "react-icons/io";

const RemoteTools = async () => {

    const tools = await fetchToolsData();

    return(
        <Page title="Remote tools">
            <div className="thirds">
                <Card>
                    {
                        Object.keys(tools).map((key, index) => {
                            return(
                                key === 'rdp_port' ?
                                    <div key={ index }>
                                        <Input label="RDP port number" value={ tools[key] } readOnly={true} /> 
                                        <Button type="submit">Workflow editor <IoMdDownload /> </Button> 
                                    </div> 
                                    :  ''  
                            )
                        })
                    }
                </Card>
            </div>
        </Page>   
    )
}

export default RemoteTools;