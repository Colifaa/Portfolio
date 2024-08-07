import { Route, Routes, useLocation, Navigate } from "react-router-dom";
import React, { Suspense } from "react";
import {
  NotFound,
  Loader,
  ScrollToTop,
  ProjectDetails,
  Navbar,
  Footer,
  BlogDetail,
  BlogIndex,
  MernBlogRepair,
  EmployeeSalaryManagementRepair
} from "./components";
import Blog from "./pages/Blog";
import Contact from "./pages/Contact";
import About from "./pages/About";
import ParticlesBg from "./components/BgParticles/BgParticles";


const Home = React.lazy(() => import("./pages/Home"));
const Project = React.lazy(() => import("./pages/Project"));

function App() {
  const location = useLocation();
  const isFalse = location.pathname.includes("404");

  return (
    <div className="relative min-h-screen">
      {/* Componente de fondo de partículas */}
      <ParticlesBg />
      
      {/* Otros componentes de la aplicación */}
      <ScrollToTop />
      {isFalse || <Navbar />}
      <Suspense fallback={<Loader />}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/project" element={<Project />} />
          <Route path="/project/:id" element={<ProjectDetails />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/blog" element={<Blog />}>
            <Route index element={<BlogIndex />} />
            <Route path=":blog_path" element={<BlogDetail />} />
          </Route>
          <Route path="/404" element={<NotFound />} />
          <Route path="*" element={<Navigate replace to="/404" />} />
          <Route path="/mern-blog" element={<MernBlogRepair />} />
          <Route path="/employee-salary-management" element={<EmployeeSalaryManagementRepair />} />
        </Routes>
      </Suspense>
      {isFalse || <Footer />}
    </div>
  );
}

export default App;
