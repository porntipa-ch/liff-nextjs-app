
import liff from "@line/liff";

export const initLiff = async () => {
  try {
    await liff.init({ liffId: process.env.NEXT_PUBLIC_LIFF_ID as string });
    if (!liff.isLoggedIn()) {
      liff.login();
    }
  } catch (error) {
    console.error("LIFF Initialization failed", error);
  }
};
