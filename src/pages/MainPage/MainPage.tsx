import { useEffect, useState } from "react";
import { useClient } from "../../lib/hooks/useClient";
import { ILead } from "../../types/leadTypes";
import Lead from "../../components/Lead/Lead";
import styles from "./MainPage.module.scss";

const MainPage = () => {
  const { leads } = useClient();
  const [allLeads, setLeads] = useState<ILead[]>([]);
  useEffect(() => {
    if (leads)
      setLeads((prevLeads) => {
        return [...prevLeads, ...leads];
      });
  }, [leads]);
  useEffect(() => {
    console.log(allLeads);
  }, [allLeads]);
  return (
    <>
      <div className={styles.Leads}>
        {allLeads
          ? allLeads.map((lead) => (
              <>
                <Lead {...lead} />
              </>
            ))
          : ""}
      </div>
    </>
  );
};

export default MainPage;
