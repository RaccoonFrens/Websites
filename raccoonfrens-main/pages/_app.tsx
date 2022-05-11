import "normalize.css/normalize.css";
import "/styles/globals.css";
import "/styles/Menu.css";
import "/styles/Loader.css";
import "/styles/Background.css";
import "/styles/Navigation.css";
import "/styles/Index.css";
import "/styles/Hero.css";
import "/styles/Icon.css";
import "/styles/About.css";
import "/styles/Timeline.css";
import "/styles/Founders.css";
import "/styles/Footer.css";
import "/styles/Social.css";
import { MenuProvider } from "../contexts/menu";
import Layout from "../components/Layout";

import type { AppProps } from "next/app";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <MenuProvider>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </MenuProvider>
  );
}

export default MyApp;
