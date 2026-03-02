import ErrorBoundary from "./ErrorBoundry"

export default function ErrorTesting(){
    const userData={
        name:"Ali",
        class:"10th",
        Age: 20
    }
    return(
        <div style={{border:"2px solid blue", marginRight:"50px", padding:"5px",backgroundColor:"#9c7171"}}>
            <h2>This is user Data</h2>
            {userData.name}-{userData.Age}-{userData.class}
            <ErrorBoundary>
            <UserProfile userData={null} />
            </ErrorBoundary>
        </div>
    )
}
const UserProfile=({userData})=>{
    return (
        <h2>{userData.name}</h2>
    )
}