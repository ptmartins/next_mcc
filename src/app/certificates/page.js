import { fetchCertificatesData, fetchLocalCertificatesData } from "@/actions/fetchData";
import { Page, Card, Table, KeyValue, Button, CopyToClipboard } from "../../components";
import styles from './certificates.module.css';

const Certificates = async () => {

    const certificates = await fetchCertificatesData();
    const localCerts = await fetchLocalCertificatesData();

    const columnsToShow = [
        {
            key: 'issuedToCN',
            label: 'Issued to',
            width: '30%'
        },
        {
            key: 'issuedByCN',
            label: 'Issued by',
            width: '35%'
        },
        {
            key: 'validFrom',
            label: 'Valid from',
            width: '35%'
        }
    ];

    return(
        <Page title="Certificates">   
            <div className="half_half">
                {
                    certificates.map((certificate, index) => {
                        return(
                            <Card key={ index } >
                                <KeyValue label="Issued to:" value={ certificate.issuedTo } />
                                <KeyValue label="Issued by:" value={ certificate.issuedBy } />
                                <KeyValue label="Valid from:" value={ certificate.validFrom } />
                                <div className={ styles.fingerprint__container }>
                                    <h4 className={ styles.fingerprint__title }> SHA1 Fingerprint: </h4>
                                    <CopyToClipboard value={ certificate.fingerprint } cssClass={ styles.fingerprint }/>
                                </div>
                                <Button type="primary" className={ styles.fingerprint__btn } style={{display: 'block', marginInlineStart: 'auto'}}>Update</Button> 
                            </Card>   
                        )
                    })
                }
            </div>
            <Card>
                <Table data={ localCerts } columns={ columnsToShow }/>
            </Card>
        </Page>
    )
}

export default Certificates;