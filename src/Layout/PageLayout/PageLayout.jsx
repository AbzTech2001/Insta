import { Box, Flex, Spinner } from "@chakra-ui/react";
import Sidebar from "../../Components/Sidebar/Sidebar";
import { useLocation } from "react-router-dom";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../../firebase/firebase";
import Navbar from "../../Components/Navbar/Navbar";

const PageLayout = ({ children }) => {
  const { pathname } = useLocation();
  const [user, loading] = useAuthState(auth);
  const canReadSideBar = pathname !== "/auth" && user;
  const canRenderNavBar = !user && !loading && pathname !== "/auth";

  const checkingUserIsAuth = !user && loading;
  if (checkingUserIsAuth) {
    return <PageLayoutSpinner />;
  }
  return (
    <Flex flexDir={canRenderNavBar ? "column" : "row"}>
      {/* left side layout */}
      {canReadSideBar ? (
        <Box w={{ base: "70px", md: "240px" }}>
          <Sidebar />
        </Box>
      ) : null}
      {/* Navbar */}
      {canRenderNavBar ? <Navbar /> : null}
      {/* right side layout */}
      <Box
        flex={1}
        w={{ base: "calc(100% -70px)", md: "calc(100%-240px)" }}
        mx={"auto"}
      >
        {children}
      </Box>
    </Flex>
  );
};

export default PageLayout;
const PageLayoutSpinner = () => {
  return (
    <Flex
      flexDir="column"
      h="100vh"
      alignItems="center"
      justifyContent="center"
    >
      <Spinner size="xl" />
    </Flex>
  );
};
