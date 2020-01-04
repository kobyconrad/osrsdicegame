import Link from "next/link";
import Button from "../components/navButton";

const Index = () => (
  <div>
    <Link href="/game">
      <div>
        <Button title="Game Page"></Button>
      </div>
    </Link>
    <p>This is the home page.</p>
  </div>
);

export default Index;
