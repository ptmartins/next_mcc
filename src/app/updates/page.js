import { fetchUpdatesData } from "@/actions/fetchData";
import { Page, Accordion } from "../../components";
import styles from './updates.module.css';

const Updates = async () => {

    const updates = await fetchUpdatesData();
    const releases = await updates.releases;
    const accordionData = async () => {
        const updatedData = releases.map(release => {

            let result = {
                title: null,
                content: null
            }

            Object.keys(release).map(item => {
                switch(item) {
                    case('version'):
                        result.title = release[item];
                        break;
                    case('release_notes'):
                        result.content = release[item][0].note;  
                        break;
                    default: break;                  
                }
            })

            return result;
        })

        return updatedData;

    }

    const data = await accordionData();

    return(
        <Page title="Updates">
            {
                data.length > 0 ? <Accordion items={ data } /> : ''
            }
        </Page>        
    )
}

export default Updates;