import { Loader2, Loader2Icon } from "lucide-react"

const loading = () => {
    return (
      <div className="w-full h-screen">
        <Loader2 className="absolute top-[50%] left-[50%] animate-spin" />
      </div>
    )
  }
  
  export default loading
  