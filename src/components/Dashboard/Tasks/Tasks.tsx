import { useGraphWithCredential } from "@microsoft/teamsfx-react";
import { useContext, useState } from "react";
import "./Tasks.scss";
import { Tasks as MSTasks } from "@microsoft/mgt-react";
import { TeamsFxContext } from "../../Context";

export const Tasks = () => {
  const [lastTask, setLastTask] = useState<any>(false);
  const [activeBucket, setActiveBucket] = useState<any>(false);
  const { teamsUserCredential } = useContext(TeamsFxContext);
  const { loading, error, data, reload } = useGraphWithCredential(
    async (graph, teamsUserCredential, scope) => {

      const tasksAndBuckets = await graph.api("/planner/plans/EecYlXvzakqZs6NRZi0X-JcADBiB/tasks").get();
      const tasks = tasksAndBuckets.value;
      const bucket = await graph.api("/planner/buckets/" + tasks[0].bucketId).get();
      setActiveBucket(bucket);
    }, { scope: ["Group.Read.All"], credential: teamsUserCredential });

  return (
    <>
      {!lastTask || loading && <div>Loading...</div>}
      {!loading && lastTask &&
        <>
          <h3 className="bucketName">{activeBucket.name}2</h3>
          <MSTasks hideOptions hideHeader initialBucketId={activeBucket.id} initialId={activeBucket.planId} targetId={activeBucket.planId} targetBucketId={activeBucket.id} />
        </>
      }
    </>
  )
}