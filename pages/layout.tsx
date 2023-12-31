import Nav from './mainNav';
import Footer from './footer';
import style from './layout.module.css';

function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div>
      <Nav />
      <main className={style.main}>{children}</main>
      <Footer />
    </div>
  );
}
export default Layout;
