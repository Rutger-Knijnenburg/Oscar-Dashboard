
import "./Dashboard.css"
import { OscarCard } from "../Utils/Card";
import { Calendar } from "./Agenda/Agenda";
import { Providers, ProviderState } from "@microsoft/mgt-element";
import { TeamsFxProvider } from "@microsoft/mgt-teamsfx-provider";
import { useGraphWithCredential } from "@microsoft/teamsfx-react";
import { useContext } from "react";
import { TeamsFxContext } from "../Context";
import { Image, Text } from "@fluentui/react-components";
import { Todos } from "./Todos/ToDo";
import { Tasks } from "./Tasks/Tasks";
import { AskOscar } from "./AskOscar/AskOscar";
import { Files } from "./Files/Files";
import { MeetupCard } from "./Meetup/Meetup";

export const Dashboard = () => {
    const { teamsUserCredential } = useContext(TeamsFxContext);
    const { loading, error, data, reload } = useGraphWithCredential(
        async (graph, teamsUserCredential, scope) => {
            const provider = new TeamsFxProvider(teamsUserCredential, scope);
            await provider.login();
            const profile = await graph.api("/me").get();
            Providers.globalProvider = provider;
            Providers.globalProvider.setState(ProviderState.SignedIn);

        }, { scope: ["Group.Read.All","Tasks.ReadWrite","Files.Read", "Files.Read.All", "Sites.Read.All", "Calendars.Read", "User.ReadBasic.All", "Presence.Read.All"], credential: teamsUserCredential });

    return (
        <div className="dashboard">
            {!loading &&
                <>
                <div className="header">
                    <Image src={window.location.origin +"/OscarAvatar.png"}/>
                    <Text size={900}>Oscar V1</Text>
                </div>
                    <div className="topcontent">
                            <OscarCard title="Meetup">
                                <MeetupCard />
                            </OscarCard>
                            <OscarCard title="Ask Oscar!">
                                <AskOscar/>
                            </OscarCard>
                    </div>
                    <div className="content">
                            <OscarCard title="Onboard challanges">
                                <Tasks />
                            </OscarCard>
                            <OscarCard title="To do">
                                <Todos />
                            </OscarCard>
                            <OscarCard title="Agenda">
                                <Calendar />
                            </OscarCard>
                            <OscarCard title="HR Files">
                                <Files />
                            </OscarCard>
                    </div>
                </>
            }

            {loading && <>Loading...</>}
        </div>
    )
}