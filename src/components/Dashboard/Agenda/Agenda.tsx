import { Agenda, MgtTemplateProps } from "@microsoft/mgt-react";

const NoEventsFound = (props: MgtTemplateProps) => {
    return <div>
      No events found
    </div>;
  };
  
export const Calendar = () => {
  return (
    <>
        <>
            <Agenda group-by-day >
                <NoEventsFound template="no-data"/>
            </Agenda>
        </>
    </>
  )
}