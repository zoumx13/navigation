import { useState } from "react"

export default function ChangeLog() {
    const [logged,setLogged] = useState(false)
    setLogged(!logged)
}
