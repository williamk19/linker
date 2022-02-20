import LinkList from "./LinksList.component";
import Header from "./Header.component";
import Footer from "./Footer.component";

export default function Container() {
  return (
    <div className="pt-16 h-screen bg-neutral-900">
      <Header />
      <LinkList />
      <Footer />
    </div>
  );
}
