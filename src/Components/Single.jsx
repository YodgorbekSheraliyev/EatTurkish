import { useParams } from "react-router-dom"

const Single = () => {
    const {id} = useParams();
  return (
    <div>
        Single {id}
    </div>
  )
}

export default Single