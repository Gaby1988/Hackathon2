import { useMemo, useState } from "react";
import { Outlet } from "react-router-dom";
import Footer from "../components/footer/Footer";
import { CreateTutorialProvider } from "../contexts/CreateTutorialContext";
import NameMenuTopContext from "../contexts/NameMenuTopContext";

function Child() {
  const [nameMenu, setNameMenu] = useState("");
  return (
    <div>
      <NameMenuTopContext.Provider
        value={useMemo(
          () => ({ nameMenu, setNameMenu }),
          [nameMenu, setNameMenu]
        )}
      >
        <CreateTutorialProvider>
          <Outlet />
          <Footer />
        </CreateTutorialProvider>
      </NameMenuTopContext.Provider>
    </div>
  );
}

export default Child;
