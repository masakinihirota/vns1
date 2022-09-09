import { Button } from "@/components_test/Button/Button"
// import { Button } from "../components/Button/Button"

import type { NextPage } from "next"

const Home: NextPage = () => {
  return (
    <div>
      <h1>
        Welcome to <a href="https://nextjs.org">Next.js!</a>
      </h1>
      <Button
        outlined={false}
        size={"small"}
        onClick={() => (document.location.href = "https://reactjs.org")}
      >
        Submit
      </Button>
    </div>
  )
}

export default Home
