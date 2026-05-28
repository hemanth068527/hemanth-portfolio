import { Outlet } from 'react-router-dom';
import BackgroundSystem from '../components/BackgroundSystem.jsx';
import BootSequence from '../components/BootSequence.jsx';
import CustomCursor from '../components/CustomCursor.jsx';
import Navbar from '../components/Navbar.jsx';
import ScrollProgress from '../components/ScrollProgress.jsx';
import TerminalMode from '../components/TerminalMode.jsx';

export default function AppLayout() {
  return (
    <>
      <BackgroundSystem />
      <ScrollProgress />
      <CustomCursor />
      <BootSequence />
      <Navbar />
      <Outlet />
      <TerminalMode />
    </>
  );
}
