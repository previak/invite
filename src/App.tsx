import { useState, useCallback } from 'react';
import { FloatingHearts } from './components/FloatingElements';
import WelcomePage from './components/WelcomePage';
import InvitationPage from './components/InvitationPage';
import RestaurantPage from './components/RestaurantPage';
import DressCodePage from './components/DressCodePage';
import FinalPage from './components/FinalPage';

const PAGES = [WelcomePage, InvitationPage, RestaurantPage, DressCodePage, FinalPage];

function App() {
  const [currentPage, setCurrentPage] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  const goNext = useCallback(() => {
    if (isAnimating || currentPage >= PAGES.length - 1) return;
    setIsAnimating(true);
    setCurrentPage((prev) => prev + 1);
    setTimeout(() => setIsAnimating(false), 600);
  }, [isAnimating, currentPage]);

  const CurrentPageComponent = PAGES[currentPage];

  return (
    <div className="relative w-full h-screen overflow-hidden">
      <FloatingHearts />
      <div key={currentPage} className="page-enter w-full h-full">
        <CurrentPageComponent onNext={goNext} />
      </div>
    </div>
  );
}

export default App;
