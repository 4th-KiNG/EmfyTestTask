import { useEffect } from "react";
import { useAuth } from "../lib/hooks/useAuth";

const MainPage = () => {
  const { GetAccessTokenFn } = useAuth();
  useEffect(() => {
    //const params = new URLSearchParams(window.location.search);
    const authorizationCode =
      "def50200380c38d17a6eb8628b7edeb4e6be65f9c4c3247c2323ae81a114790e1a3a5335ae1d1ab36539aa2a921adf108b2057eb0b5c3c21f28d87605a126a1af1bd762d9d09671ac890075ea103a07fb69fa490afbd41fb195236216d6500967d93fe86de84b751c397fe21f8235ade79d88d899660073a8c796660f32f709b9d1d67476a63e6f6847786de247c68a5ff1e70eb811c72d732bcd469b1c3ab3154ba4bbff53bf531ee1d24e3c3d3153970c9df0afd08c58e614c77b5651ede2a2576d9dd25091b18fea726e769fc9536578a16f3a5efdee9526fc6fc52f71717ff30437cafce91163407a62dc0ca1b9b2360c213bae66274bcbde7e06f7c58ee4f2ad2f13af16aa282df010fa5b905084615e72f8d8dbd68db95e208b7cf4432d0b7f2ef96825a7c0680e7988a36f711992066e3446921c41e81232a5477abc07582e98816dd4d7eed2209a215402f68d2d9edf29ab3f2d3d49c0386fdbfaa3622d877070c18012253da0498293f501b26fe20b41c5d361c2c83d6c227a25bacde9df41435ef049f4290e94cef35bf7c4c6c5bf6267ea2707b4aaed929db50c32188a245b5ab5e7fc0ca9c52973677aa9da13f3f2982f7ee7747d4cda677483b0cdafa82d6a288fdb871ed11e1f9bcffab239fdd781aa386164699f7cb0875231d1b132f83d817226ddfee3c52e645e3f47fb65e757120ec73bc54";
    if (authorizationCode) GetAccessTokenFn(authorizationCode);
  }, []);
  return (
    <>
      <p>123123</p>
    </>
  );
};

export default MainPage;
