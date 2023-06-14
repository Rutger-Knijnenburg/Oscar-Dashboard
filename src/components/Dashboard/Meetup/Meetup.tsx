import { CompoundButton } from "@fluentui/react-components"
import { CalendarMonthRegular } from "@fluentui/react-icons"
import { Person, PersonViewType } from "@microsoft/mgt-react"
import "./Meetup.scss"
import {  useGraphWithCredential } from "@microsoft/teamsfx-react"
import { useContext, useState } from "react"
import { TeamsFxContext } from "../../Context";
import { chat } from "@microsoft/teams-js"

export const MeetupCard = () => {
    const [randomUserId, setRandomUserId] = useState<any>(null);
    const { teamsUserCredential } = useContext(TeamsFxContext);
    
    const { loading, error, data, reload } = useGraphWithCredential(
        async (graph, teamsUserCredential, scope) => {
    
          const usersInOrganization = await graph.api("/users").get();
          const randomUser = usersInOrganization.value[Math.floor(Math.random() * usersInOrganization.value.length)];
          setRandomUserId(randomUser);
        }, { scope: ["User.ReadBasic.All"], credential: teamsUserCredential });

    return (
        <div className="meetup">
            <p>
            Have you met this person yet? It may be interesting to get to know eachother!
            </p>
                {
                    randomUserId && <><Person  personCardInteraction={2}  userId={randomUserId.id} view={PersonViewType.threelines}  showPresence={true} />
                    <CompoundButton onClick={() => {chat.openChat({user: randomUserId.mail})}} icon={<CalendarMonthRegular/>} >Meet this person</CompoundButton></>
                }
                {
                    !randomUserId && <div>Loading...</div>
                }
            
        </div>
    )
}