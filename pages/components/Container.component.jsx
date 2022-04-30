import LinkList from "./LinksList.component";
import Header from "./Header.component";
import Footer from "./Footer.component";
import Toggle from './toggle.component';

export default function Container() {
  return (
    <div className="h-screen bg-neutral-900">
      <Toggle />
      <Header />
      <LinkList />
      <Footer />
    </div>
  );
}
