
let Students = ({studentsList})=>{

    let renderStudnets = ()=>{

        if(studentsList.length > 0){
            return studentsList.map((student)=>{
                return (
                    <div className="studentItem">
                        <h4>{student.name}</h4>
                        <h4>{student.age}</h4>
                    </div>
                )
            })
        }else{
            return (<h1>No Students</h1>)
        }
    }

    return (
        <div className="search-Comp">
            <h3 className="header">All Students</h3>
            {renderStudnets()}
        </div>
    )
}

export default Students;