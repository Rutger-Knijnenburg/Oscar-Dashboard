
import { File, MgtTemplateProps, ViewType } from "@microsoft/mgt-react"
import "./Files.css"

const NoFilesFound = (props: MgtTemplateProps) => {
    return <div>
        No files found
    </div>;
};

const FileFound = (props: MgtTemplateProps) => {
    return <>
        {props.dataContext.file.value.map((_file: any) => {
            return <File className="fileitem" onClick={(e) => window.open(_file["@microsoft.graph.downloadUrl"])} view={ViewType.twolines}  driveId={_file.parentReference.driveId} itemId={_file.id} />
        })}
    </>
}


export const Files = () => {
    return (
        
        <div className="files">
            <File siteId="rukndev.sharepoint.com,38113a0b-e459-45ad-bed4-704b209b40a4,1855d438-b988-46a9-9a2d-79ac40087416" itemPath="Onboarding:/children">
                <NoFilesFound template="no-data" />
                <FileFound template="default"/>
            </File>
        </div>
    )
}