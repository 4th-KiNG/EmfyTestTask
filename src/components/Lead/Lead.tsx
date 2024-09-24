import { useEffect, useRef, useState } from "react";
import { useClient } from "../../lib/hooks/useClient";
import { ILead } from "../../types/leadTypes";
import styles from "./Lead.module.scss";
import { convertSeconds } from "../../lib/utils/fromUnixToDate";
import Loader from "../Loader/Loader";

const Lead = (props: ILead) => {
  const { id, name, price } = props;
  const { lead, getLeadById, isLoading } = useClient(id);
  const [isOpen, setOpen] = useState(false);
  const [status, setStatus] = useState("red");
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    if (lead?.id === id) setOpen(true);
    else setOpen(false);
  }, [lead]);

  useEffect(() => {
    if (lead?.closest_task_at) {
      if (convertSeconds(lead.closest_task_at) === convertSeconds())
        setStatus("green");
      else if (convertSeconds(lead.closest_task_at) > convertSeconds())
        setStatus("yellow");
      else setStatus("red");
    }
  }, [lead?.closest_task_at]);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (ref.current && !ref.current.contains(event.target as Node)) {
        setOpen(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [ref]);

  if (isLoading) return <Loader />;

  return (
    <div ref={ref} className={styles.Lead} onClick={() => getLeadById()}>
      {isOpen && lead?.closest_task_at ? (
        <>
          <p>ID: {id}</p>
          <p>Имя: {name}</p>
          <p>Дата: {convertSeconds(lead.closest_task_at)}</p>
          <p style={{ display: "flex", alignItems: "center", gap: "5px" }}>
            Статус ближайшей задачи:{" "}
            <svg width="20" height="20">
              <circle cx="10" cy="10" r="10" fill={`${status}`} />
            </svg>
          </p>
        </>
      ) : (
        <>
          <p>ID: {id}</p>
          <p>Имя: {name}</p>
          <p>Стоймость: {price}</p>
        </>
      )}
    </div>
  );
};

export default Lead;
