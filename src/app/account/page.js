import { Button, Card, Input, Page } from "../../components";

const Account = () => {
    return(
        <Page title="Management account">
            <div className="thirds"> 
                <Card>
                    <Input label="Current password" type="password"/>
                    <Input label="New password" type="password"/>
                    <Input label="Confirm new password" type="password"/>
                    <Button type="submit"> Change password </Button>
                </Card>
            </div>
        </Page>    
    )
}

export default Account;