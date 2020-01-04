import Link from "next/link";
import Button from "../components/navButton";
import NavBar from "../components/navBar";

const Index = () => (
  <div>
    <NavBar />
    <Link href="/game">
      <div>
        <Button title="Game Page"></Button>
      </div>
    </Link>
    <p>This is the home page.</p>
  </div>
);

export default Index;
