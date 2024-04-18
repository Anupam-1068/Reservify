import { Flex, Box, Spacer, Link,Image } from "@chakra-ui/react";
// import { useTranslation } from "react-i18next";
import logo from '../assets/logo.png';
import LanguageSwitcher from "../LanguageSwitcher";
import { useTranslation } from "react-i18next";


function NavigationBar() {

  const {t} = useTranslation();


  return (
    <Flex bg="#f7fff0" p={3} color="black">
      <Image src={logo} alt="Logo" h={10} mr={4} /> 
      <Box p="2">
        <Link href="/resevify/">{t('home')}</Link>
      </Box>
      <Spacer />
      <Box p="2">
        <Link href="/resevify/bookspace">{t('bookSpot')}</Link>
      </Box>
      {/* <Box p="2">
        <Link href="/resevify/profile">{t('profile')}</Link>
      </Box> */}
      <Box p="2">
        <Link href="/resevify/contact">{t('contactUs')}</Link>
      </Box>
      <Box p="2">
        <LanguageSwitcher/>
      </Box>
    </Flex>
  );
}

export default NavigationBar;
