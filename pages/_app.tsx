import "normalize.css/normalize.css";
import "/styles/globals.css";
import "/styles/menu.css";
import "/styles/loader.css";
import "/styles/background.css";
import "/styles/navigation.css";
import "/styles/index.css";
import "/styles/hero.css";
import "/styles/icon.css";
import "/styles/about.css";
import "/styles/timeline.css";
import "/styles/founders.css";
import "/styles/footer.css";
import "/styles/social.css";
import { MenuProvider } from "../contexts/menu";
import Layout from "../components/layout";

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
